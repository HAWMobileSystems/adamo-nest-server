import { parseStringPromise } from 'xml2js';
import { CamundaBpmnParserV2 } from './CamundaBpmnParserV2';
import { CamundaBpmnParserV1 } from './CamundaBpmnParserV1';
import { BPMNIOParser } from './BPMNIOParser';
export class BPMNXMLParser{
   
    //Value of (absolute number) of Name right
    private nameValue = 10;
    //Value of (absolute number) of Incoming right
    private incValue = 10;
    //Value of (absolute number) of Outgoing right
    private outValue = 10;
    //Value of (absolute number) of Module (e.g Task) right
    private modValue = 20;
    /**
     * Empty constructor
     * kept empty because its not possible to overwrite
     */
    constructor(){}
    /**
     * 
     * Methode to change the Weights of the parsed Values
     * @param name 
     * @param inc 
     * @param out 
     * @param mod 
     */
    changeWeights(name:number,inc:number,out:number,mod:number){
        this.nameValue = name;
        this.incValue = inc;
        this.outValue = out;
        this.modValue = mod;
    }

    /**
     * Method to validate two XML FILes
     */
    async validate(camunda_xml_from_database: String, bpmn_io_xml_from_user: string) {
        //Parse USER XML
        let bpmn_from_user = await parseStringPromise(bpmn_io_xml_from_user);
        bpmn_from_user = (JSON.parse(JSON.stringify(bpmn_from_user)));
        //Go to relevant process
        let bpmn_from_user_lvl1 = bpmn_from_user['bpmn2:definitions']
        let bpmn_from_user_lvl2 = bpmn_from_user_lvl1['bpmn2:process']
        //Parse DB XML
        let bpmn_from_db = await parseStringPromise(camunda_xml_from_database);
        bpmn_from_db = (JSON.parse(JSON.stringify(bpmn_from_db)));
        //Go to relevant process
        let bpmn_from_db_lvl1 = bpmn_from_db['bpmn:definitions']
        let bpmn_from_db_lvl2
        let map_from_database 
        
        if(bpmn_from_db_lvl1 == undefined){
            bpmn_from_db_lvl1 = bpmn_from_db['definitions']
            bpmn_from_db_lvl2 = bpmn_from_db_lvl1['process']
            map_from_database = new CamundaBpmnParserV2(bpmn_from_db_lvl2).getXML(); 
        }else{
            bpmn_from_db_lvl2 = bpmn_from_db_lvl1['bpmn:process']
            map_from_database = new CamundaBpmnParserV1(bpmn_from_db_lvl2).getXML();
            
        }
        //Get Maps from XML FIles
        let map_for_user = new BPMNIOParser(bpmn_from_user_lvl2).getXML();
        //Compare Maps, get Score
        let returnscore = this.compareMaps(map_for_user,map_from_database)
        //return score
        
        return returnscore
    }
    /**
     * Methode to compare two Maps 
     * THE SCORES IN THIS MAP Represent the weighting of this parser
     * WEIGHTs have to be equal
     */
    compareMaps(map_for_user: Map<string, Map<string, any>>, map_from_database: Map<string, Map<string, any>>) {
        //Map to display the results.
        //EVERY entry in the number colum represents a bonus for the USER
        let resultMap: Map<string,number> = new Map()
        //Create USER success MAP
        var stringSimilarity = require('string-similarity');
        //Get similarity between strings
        map_for_user.forEach((value_user,key_user)=>{
            map_from_database.forEach((value_db,key_db)=>{
               if(key_user == key_db){
                   resultMap.set(key_db,this.modValue)
                   if(value_user.get("name")){
                        let s1 = value_user.get("name");
                        let s2 = value_db.get("name");
                        console.log(s1)
                        console.log(s2)
                        let res = stringSimilarity.compareTwoStrings(s1,s2);
                        // res = zwischen 0 und 1
                        let res_10 = res*this.nameValue;
                        let ret = Math.floor(res_10)
                        console.log(ret)
                    resultMap.set(key_db+"name",ret)
                   }
                   if(value_user.get("incoming") == value_db.get("incoming")&& value_db.get('incoming')){
                    resultMap.set(key_db+"incoming",this.incValue)
                   }
                   if(value_user.get("outgoing") == value_db.get("outgoing")&& value_db.get('outgoing')){
                    resultMap.set(key_db+"outgoing",this.outValue)
                   }
               }
            })
        })
        /**
         * This is the possible score map
         * THE SCORES IN THIS MAP Represent the weighting of this parser
         * WEIGHTs have to be equal
         */
        let bestPossibility: Map<string,number> = new Map()
        map_from_database.forEach((value_db,key_db)=>{
                bestPossibility.set(key_db,this.modValue)
                if(value_db.get("name")){
                    bestPossibility.set(key_db+"name",this.nameValue)
                }
                if(value_db.get("incoming")!= undefined){   
                    bestPossibility.set(key_db+"incoming",this.incValue)
                }
                if(value_db.get("outgoing")!= undefined){
                    bestPossibility.set(key_db+"outgoing",this.outValue)
                }
            }
        )
        //Count result of possible MAP
        let bestPossible = 0
        bestPossibility.forEach((value,key)=>{
            bestPossible = bestPossible+value
        })
        let userResult = 0
        resultMap.forEach((value,key)=>{
            userResult = userResult+value
        })

        let ret = (userResult/bestPossible)*100
        ret = Math.floor(ret)
        return ret
    }
}