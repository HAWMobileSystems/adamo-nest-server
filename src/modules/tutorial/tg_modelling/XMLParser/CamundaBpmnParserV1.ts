export class CamundaBpmnParserV1{
    private xml
    private result

    /**
     * 
     * @param xml_input 
     */
    constructor(xml_input){
        this.xml = xml_input
        this.result = this.createComparisonMapForCAMUNDA(this.xml)
    }


    /**
     * Parse Camunda XML file to Comparison Map
     * @param bpmn_from_user_lvl2 
     */
    createComparisonMapForCAMUNDA(bpmn_from_user_lvl2){
        let parse: Map<string,Map<string,any>> = new Map()
        bpmn_from_user_lvl2.forEach(e=>{
            if(e['bpmn:startEvent']){
                let i = 0
                e['bpmn:startEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name
                    let outgoing = 0
                    if(e['bpmn:startEvent'][0]['$']['name']){
                        name = e['bpmn:startEvent'][0]['$']['name']
                    }
                    if(e['bpmn:startEvent'][0]['bpmn:outgoing']){
                        outgoing = e['bpmn:startEvent'][0]['bpmn:outgoing'].length
                    }
                    let eventName = 'Startevent'+i
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    parse.set(eventName,res)
                    i++
                })
                
            }
            if(e['bpmn:endEvent']){
                let i = 0
                e['bpmn:endEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name 
                    let eventName = 'Endevent'+i
                    let incoming = 0
                    if(e['bpmn:endEvent'][0]['$']['name']){
                        name = e['bpmn:endEvent'][0]['$']['name']
                    }
                    if(e['bpmn:endEvent'][0]['bpmn:incoming']){
                        incoming = e['bpmn:endEvent'][0]['bpmn:incoming'].length
                    }
                    res.set("name",name)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:exclusiveGateway']){
                let i = 0
                e['bpmn:exclusiveGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name
                    let eventName = 'ExclusiveGateway'+i
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn:exclusiveGateway'][0]['$']['name']){
                        name = e['bpmn:exclusiveGateway'][0]['$']['name']
                    }
                    if(e['bpmn:exclusiveGateway'][0]['bpmn:incoming']){
                        incoming = e['bpmn:exclusiveGateway'][0]['bpmn:incoming'].length
                    }
                    if(e['bpmn:exclusiveGateway'][0]['bpmn:outgoing']){
                        outgoing = e['bpmn:exclusiveGateway'][0]['bpmn:outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:participant']){
                let i = 0
                e['bpmn:participant'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name
                    let eventName = 'Participant'+i
                    if(e['bpmn:participant'][0]['$']['name']){
                        name = e['bpmn:participant'][0]['$']['name']
                    }
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:lane']){
                let i = 0
                e['bpmn:lane'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name
                    let eventName = 'Lane'+i
                    if(e['bpmn:lane'][0]['$']['name']){
                        name = e['bpmn:lane'][0]['$']['name']
                    }
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:flowNodeRef']){
                let i = 0
                e['bpmn:flowNodeRef'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'FlowNodeRef'+i
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:sequenceFlow']){
                let i = 0
                e['bpmn:sequenceFlow'].forEach(ele=>{
                    console.log()
                    let res: Map<string,any> = new Map()
                    let name
                    if(e['bpmn:sequenceFlow'][0]['$']['name']){
                        name = e['bpmn:sequenceFlow'][0]['$']['name']
                    }
                    let eventName = 'SequenceFlow'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:subProcess']){
                let i = 0
                e['bpmn:subProcess'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name 
                    let eventName = 'subProcess'+i
                    if(e['bpmn:subProcess'][0]['$']['name']){
                        name = e['bpmn:subProcess'][0]['$']['name']
                    }
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:parallelGateway']){
                let i = 0
                e['bpmn:parallelGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ParallelGateway'+i
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn:parallelGateway'][0]['bpmn:incoming']){
                        incoming = e['bpmn:parallelGateway'][0]['bpmn:incoming'].length
                    }
                    if(e['bpmn:parallelGateway'][0]['bpmn:outgoing']){
                        outgoing = e['bpmn:parallelGateway'][0]['bpmn:outgoing'].length
                    }
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:exclusiveGateway']){
                let i = 0
                e['bpmn:exclusiveGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ExclusiveGateway'+i
                    let name
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn:exclusiveGateway'][0]['$']['name']){
                        name = e['bpmn:exclusiveGateway'][0]['$']['name']
                    }
                    if(e['bpmn:exclusiveGateway'][0]['bpmn:incoming']){
                        incoming = e['bpmn:exclusiveGateway'][0]['bpmn:incoming'].length
                    }
                    if(e['bpmn:exclusiveGateway'][0]['bpmn:outgoing']){
                        outgoing = e['bpmn:exclusiveGateway'][0]['bpmn:outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:complexGateway']){
                let i = 0
                e['bpmn:complexGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ComplexGateway'+i
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn:complexGateway'][0]['bpmn:incoming']){
                        incoming = e['bpmn:complexGateway'][0]['bpmn:incoming'].length
                    }
                    if(e['bpmn:complexGateway'][0]['bpmn:outgoing']){
                        outgoing = e['bpmn:complexGateway'][0]['bpmn:outgoing'].length
                    }
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:inclusiveGateway']){
                let i = 0
                e['bpmn:inclusiveGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'InclusiveGateway'+i
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn:inclusiveGateway'][0]['bpmn:incoming']){
                        incoming = e['bpmn:inclusiveGateway'][0]['bpmn:incoming'].length
                    }
                    if(e['bpmn:inclusiveGateway'][0]['bpmn:outgoing']){
                        outgoing = e['bpmn:inclusiveGateway'][0]['bpmn:outgoing'].length
                    }
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:eventBasedGateway']){
                let i = 0
                e['bpmn:eventBasedGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'EventBasedGateway'+i
                    let incoming = 0
                    let outgoing = 0
                   if(e['bpmn:eventBasedGateway'][0]['bpmn:incoming']){
                    incoming = e['bpmn:eventBasedGateway'][0]['bpmn:incoming'].length
                   }
                   if(e['bpmn:eventBasedGateway'][0]['bpmn:outgoing']){
                    outgoing = e['bpmn:eventBasedGateway'][0]['bpmn:outgoing'].length
                   }
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:intermediateCatchEvent']){
                let i = 0
                e['bpmn:intermediateCatchEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'IntermediateCatchEvent'+i
                    let name 
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn:intermediateCatchEvent'][0]['$']['name']){
                        name = e['bpmn:intermediateCatchEvent'][0]['$']['name']
                    }
                    if(e['bpmn:intermediateCatchEvent'][0]['bpmn:incoming']){
                        incoming = e['bpmn:intermediateCatchEvent'][0]['bpmn:incoming'].length
                    }
                    if(e['bpmn:intermediateCatchEvent'][0]['bpmn:outgoing']){
                        outgoing = e['bpmn:intermediateCatchEvent'][0]['bpmn:outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:intermediateThrowEvent']){
                let i = 0
                e['bpmn:intermediateThrowEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'IntermediateThrowEvent'+i
                    let name
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn:intermediateThrowEvent'][0]['$']['name']){
                        name = e['bpmn:intermediateThrowEvent'][0]['$']['name']
                    }
                    if(e['bpmn:intermediateThrowEvent'][0]['bpmn:incoming']){
                        incoming = e['bpmn:intermediateThrowEvent'][0]['bpmn:incoming'].length
                    }
                    if(e['bpmn:intermediateThrowEvent'][0]['bpmn:outgoing']){
                        outgoing = e['bpmn:intermediateThrowEvent'][0]['bpmn:outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:boundaryEvent']){
                let i = 0
                e['bpmn:boundaryEvent'].forEach(ele=>{
                    console.log(ele)
                    let res: Map<string,any> = new Map()
                    let eventName = 'BoundaryEvent'+i
                    let name
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn:boundaryEvent'][0]['$']['name']){
                        name = e['bpmn:boundaryEvent'][0]['$']['name']
                    }
                    if(e['bpmn:boundaryEvent'][0]['bpmn:incoming']){
                        incoming = e['bpmn:boundaryEvent'][0]['bpmn:incoming'].length
                    }
                    if(e['bpmn:boundaryEvent'][0]['bpmn:outgoing']){
                        outgoing = e['bpmn:boundaryEvent'][0]['bpmn:outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:task']){
                let i = 0;
                e['bpmn:task'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'Task'+i
                    let name
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn:task'][0]['$']['name']){
                        name = e['bpmn:task'][0]['$']['name']
                    }
                    if(e['bpmn:task'][0]['bpmn:incoming']){
                        incoming = e['bpmn:task'][0]['bpmn:incoming'].length
                    
                    }
                    if(e['bpmn:task'][0]['bpmn:outgoing']){
                        outgoing = e['bpmn:task'][0]['bpmn:outgoing'].length
                    }
              
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
                
            }
            if(e['bpmn:manualTask']){
                let i = 0;
                e['bpmn:manualTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ManualTask'+i
                    let name 
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn:manualTask'][0]['$']['name']){
                        name = e['bpmn:manualTask'][0]['$']['name']
                    }
                    if(e['bpmn:manualTask'][0]['bpmn:incoming']){
                        incoming = e['bpmn:manualTask'][0]['bpmn:incoming'].length
                    }
                    if(e['bpmn:manualTask'][0]['bpmn:outgoing']){
                        outgoing = e['bpmn:manualTask'][0]['bpmn:outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:sendTask']){
                let i = 0;
                e['bpmn:sendTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'SendTask'+i
                    let name
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn:sendTask'][0]['$']['name']){
                        name = e['bpmn:sendTask'][0]['$']['name']
                    }
                    if(e['bpmn:sendTask'][0]['bpmn:incoming']){
                        incoming = e['bpmn:sendTask'][0]['bpmn:incoming'].length
                    }
                    if(e['bpmn:sendTask'][0]['bpmn:outgoing']){
                        outgoing = e['bpmn:sendTask'][0]['bpmn:outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:receiveTask']){
                let i = 0;
                e['bpmn:receiveTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ReceiveTask'+i
                    let name
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn:receiveTask'][0]['$']['name']){
                        name = e['bpmn:receiveTask'][0]['$']['name']
                    }
                    if(e['bpmn:receiveTask'][0]['bpmn:incoming']){
                        incoming = e['bpmn:receiveTask'][0]['bpmn:incoming'].length
                    }
                    if(e['bpmn:receiveTask'][0]['bpmn:outgoing']){
                        outgoing = e['bpmn:receiveTask'][0]['bpmn:outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:scriptTask']){
                let i = 0;
                e['bpmn:scriptTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ScriptTask'+i
                    let name 
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn:scriptTask'][0]['$']['name']){
                        name = e['bpmn:scriptTask'][0]['$']['name']
                    }
                    if(e['bpmn:scriptTask'][0]['bpmn:incoming']){
                        incoming = e['bpmn:scriptTask'][0]['bpmn:incoming'].length
                    }
                    if(e['bpmn:scriptTask'][0]['bpmn:outgoing']){
                        outgoing = e['bpmn:scriptTask'][0]['bpmn:outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:userTask']){
                let i = 0;
                e['bpmn:userTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'UserTask'+i
                    let name 
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn:userTask'][0]['$']['name']){
                        name = e['bpmn:userTask'][0]['$']['name']
                    }
                    if(e['bpmn:userTask'][0]['bpmn:incoming']){
                            incoming = e['bpmn:userTask'][0]['bpmn:incoming'].length
                    }
                    if(e['bpmn:userTask'][0]['bpmn:outgoing']){
                            outgoing = e['bpmn:userTask'][0]['bpmn:outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:businessRuleTask']){
                let i = 0;
                e['bpmn:businessRuleTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'BusinessRuleTask'+i
                    let name
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn:businessRuleTask'][0]['$']['name']){
                        name = e['bpmn:businessRuleTask'][0]['$']['name']
                    }
                    if(e['bpmn:businessRuleTask'][0]['bpmn:incoming']){
                        incoming = e['bpmn:businessRuleTask'][0]['bpmn:incoming'].length
                    }
                    if(e['bpmn:businessRuleTask'][0]['bpmn:outgoing']){
                        outgoing = e['bpmn:businessRuleTask'][0]['bpmn:outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:serviceTask']){
                let i = 0;
                e['bpmn:serviceTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ServiceTask'+i
                    let name
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn:serviceTask'][0]['$']['name']){
                        name = e['bpmn:serviceTask'][0]['$']['name']
                    }
                    if(e['bpmn:serviceTask'][0]['bpmn:incoming']){
                        incoming = e['bpmn:serviceTask'][0]['bpmn:incoming'].length
                    }
                    if(e['bpmn:serviceTask'][0]['bpmn:outgoing']){
                        outgoing = e['bpmn:serviceTask'][0]['bpmn:outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:dataObject']){
                let i = 0;
                e['bpmn:dataObject'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'DataObject'+i
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:dataObjectReference']){
                let i = 0;
                e['bpmn:dataObjectReference'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name
                    if(e['bpmn:dataObjectReference'][0]['$']['name']){
                        name = e['bpmn:dataObjectReference'][0]['$']['name']
                    }
                    let eventName = 'DataObjectReference'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:dataStoreReference']){
                let i = 0;
                e['bpmn:dataStoreReference'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name
                    if(e['bpmn:dataStoreReference'][0]['$']['name']){
                        name = e['bpmn:dataStoreReference'][0]['$']['name']
                    }
                    let eventName = 'DataStoreReference'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
        })
        return parse
    }
    public getXML(){
        return this.result
    }
}