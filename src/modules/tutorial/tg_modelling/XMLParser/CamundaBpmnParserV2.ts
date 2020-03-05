export class CamundaBpmnParserV2{
    private result;
    private xml;
    constructor(xml_inp){
        this.xml = xml_inp
        this.result = this.createComparisonMapForCAMUNDAV2(this.xml)
        
    }
    /**
     * Parse Camunda XML file to Comparison Map
     * for camunda bpmn v2
     * @param bpmn_from_user_lvl2 
     */
    
     createComparisonMapForCAMUNDAV2(bpmn_from_user_lvl2){
        let parse: Map<string,Map<string,any>> = new Map()
        bpmn_from_user_lvl2.forEach(e=>{
            
            if(e['startEvent']){
                let i = 0
                e['startEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name 
                    let eventName = 'Startevent'+i
                    let outgoing = 0
                    if(e['startEvent'][0]['$']['name']){
                        name = e['startEvent'][0]['$']['name']
                    }
                    if(e['startEvent'][0]['outgoing']){
                        outgoing = e['startEvent'][0]['outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    parse.set(eventName,res)
                    i++
                })
                
            }
            if(e['endEvent']){
                let i = 0
                e['endEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name 
                    let eventName = 'Endevent'+i
                    let incoming = 0
                    if(e['endEvent'][0]['$']['name']){
                        name = e['endEvent'][0]['$']['name']
                    }
                    if(e['endEvent'][0]['incoming']){
                        incoming = e['endEvent'][0]['incoming'].length
                    }
                   
                    res.set("name",name)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['exclusiveGateway']){
                let i = 0
                e['exclusiveGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name 
                    let eventName = 'ExclusiveGateway'+i
                    let incoming = 0
                    let outgoing = 0
                    if(e['exclusiveGateway'][0]['$']['name']){
                        name = e['exclusiveGateway'][0]['$']['name']
                    }
                    if(e['exclusiveGateway'][0]['incoming']){
                        incoming = e['exclusiveGateway'][0]['incoming'].length
                    }
                    if(e['exclusiveGateway'][0]['outgoing']){
                        outgoing = e['exclusiveGateway'][0]['outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['participant']){
                let i = 0
                e['participant'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name 
                    let eventName = 'participant'+i
                    if(e['participant'][0]['$']['name']){
                        name = e['participant'][0]['$']['name']
                    }
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['lane']){
                let i = 0
                e['lane'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name
                    if(e['lane'][0]['$']['name']){
                        name = e['lane'][0]['$']['name']
                    }
                    let eventName = 'Lane'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['flowNodeRef']){
                let i = 0
                e['flowNodeRef'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'FlowNodeRef'+i
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['sequenceFlow']){
                let i = 0
                e['sequenceFlow'].forEach(ele=>{
                    console.log()
                    let res: Map<string,any> = new Map()
                    let name
                    if(e['sequenceFlow'][0]['$']['name']){
                        name = e['sequenceFlow'][0]['$']['name']
                    }
                    let eventName = 'SequenceFlow'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['subProcess']){
                let i = 0
                e['subProcess'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name
                    if(e['subProcess'][0]['$']['name']){
                        name = e['subProcess'][0]['$']['name']
                    }
                    let eventName = 'subProcess'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['parallelGateway']){
                let i = 0
                e['parallelGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ParallelGateway'+i
                    let incoming = 0
                    let outgoing = 0
                    if(e['parallelGateway'][0]['incoming']){
                        incoming = e['parallelGateway'][0]['incoming'].length
                    }
                    if(e['parallelGateway'][0]['outgoing']){
                        outgoing = e['parallelGateway'][0]['outgoing'].length
                    }
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['exclusiveGateway']){
                let i = 0
                e['exclusiveGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ExclusiveGateway'+i
                    let name 
                    let incoming = 0
                    let outgoing = 0
                    if(e['exclusiveGateway'][0]['$']['name']){
                        name = e['exclusiveGateway'][0]['$']['name']
                    }
                    if(e['exclusiveGateway'][0]['incoming']){
                        incoming = e['exclusiveGateway'][0]['incoming'].length
                    }
                    if(e['exclusiveGateway'][0]['outgoing']){
                        outgoing = e['exclusiveGateway'][0]['outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['complexGateway']){
                let i = 0
                e['complexGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ComplexGateway'+i
                    let incoming = 0
                    let outgoing = 0
                    if(e['complexGateway'][0]['incoming']){
                        incoming = e['complexGateway'][0]['incoming'].length
                    }
                    if(e['complexGateway'][0]['outgoing']){
                        outgoing = e['complexGateway'][0]['outgoing'].length
                    }
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['inclusiveGateway']){
                let i = 0
                e['inclusiveGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'InclusiveGateway'+i
                    let incoming = 0
                    let outgoing = 0
                    if(e['inclusiveGateway'][0]['incoming']){
                        incoming = e['inclusiveGateway'][0]['incoming'].length
                    }
                    if(e['inclusiveGateway'][0]['outgoing']){
                        outgoing = e['inclusiveGateway'][0]['outgoing'].length
                    }
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['eventBasedGateway']){
                let i = 0
                e['eventBasedGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'EventBasedGateway'+i
                    let incoming = 0
                    let outgoing = 0
                    if(e['eventBasedGateway'][0]['incoming']){
                        incoming = e['eventBasedGateway'][0]['incoming'].length
                    }
                    if(e['eventBasedGateway'][0]['outgoing']){
                        outgoing = e['eventBasedGateway'][0]['outgoing'].length
                    }
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['intermediateCatchEvent']){
                let i = 0
                e['intermediateCatchEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'IntermediateCatchEvent'+i
                    let name
                    let incoming = 0
                    let outgoing = 0
                    if(e['intermediateCatchEvent'][0]['$']['name']){
                        name = e['intermediateCatchEvent'][0]['$']['name']
                    }
                    if(e['intermediateCatchEvent'][0]['incoming']){
                        incoming = e['intermediateCatchEvent'][0]['incoming'].length
                    }
                    if(e['intermediateCatchEvent'][0]['outgoing']){
                        outgoing = e['intermediateCatchEvent'][0]['outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['intermediateThrowEvent']){
                let i = 0
                e['intermediateThrowEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'IntermediateThrowEvent'+i
                    let name 
                    let incoming = 0
                    let outgoing = 0
                    if(e['intermediateThrowEvent'][0]['$']['name']){
                        name = e['intermediateThrowEvent'][0]['$']['name']
                    }
                    if(e['intermediateThrowEvent'][0]['incoming']){
                        incoming = e['intermediateThrowEvent'][0]['incoming'].length
                    }
                    if(e['intermediateThrowEvent'][0]['outgoing']){
                        outgoing = e['intermediateThrowEvent'][0]['outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['boundaryEvent']){
                let i = 0
                e['boundaryEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'BoundaryEvent'+i
                    let name
                    let incoming = 0
                    let outgoing = 0
                    if(e['boundaryEvent'][0]['$']['name']){
                        name = e['boundaryEvent'][0]['$']['name']
                    }
                    if(e['boundaryEvent'][0]['bincoming']){
                        incoming = e['boundaryEvent'][0]['bincoming'].length
                    }
                    if(e['boundaryEvent'][0]['outgoing']){
                        outgoing = e['boundaryEvent'][0]['outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['task']){
                let i = 0;
                e['task'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'Task'+i
                    let name 
                    let incoming = 0
                    let outgoing = 0
                    if(e['task'][0]['$']['name']){
                        name = e['task'][0]['$']['name']
                    }
                    if(e['task'][0]['incoming']){
                        incoming = e['task'][0]['incoming'].length
                    }
                    if(e['task'][0]['outgoing']){
                        outgoing = e['task'][0]['outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
                
            }
            if(e['manualTask']){
                let i = 0;
                e['manualTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ManualTask'+i
                    let name
                    let incoming = 0
                    let outgoing = 0
                    if(e['manualTask'][0]['$']['name']){
                        name = e['manualTask'][0]['$']['name']
                    }
                    if(e['manualTask'][0]['incoming']){
                        incoming = e['manualTask'][0]['incoming'].length
                    }
                    if(e['manualTask'][0]['outgoing']){
                        outgoing = e['manualTask'][0]['outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['sendTask']){
                let i = 0;
                e['sendTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'SendTask'+i
                    let name 
                    let incoming = 0
                    let outgoing = 0
                    if(e['sendTask'][0]['$']['name']){
                        name = e['sendTask'][0]['$']['name']
                    }
                    if(e['sendTask'][0]['incoming']){
                        incoming = e['sendTask'][0]['incoming'].length
                    }
                    if(e['sendTask'][0]['outgoing']){
                        outgoing = e['sendTask'][0]['outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['receiveTask']){
                let i = 0;
                e['receiveTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ReceiveTask'+i
                    let name
                    let incoming = 0
                    let outgoing = 0
                    if(e['receiveTask'][0]['$']['name']){
                        name = e['receiveTask'][0]['$']['name']
                    }
                    if(e['receiveTask'][0]['incoming']){
                        incoming = e['receiveTask'][0]['incoming'].length
                    }
                    if(e['receiveTask'][0]['outgoing']){
                        outgoing = e['receiveTask'][0]['outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['scriptTask']){
                let i = 0;
                e['scriptTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ScriptTask'+i
                    let name
                    let incoming = 0
                    let outgoing = 0
                    if(e['scriptTask'][0]['$']['name']){
                        name = e['scriptTask'][0]['$']['name']
                    }
                    if(e['scriptTask'][0]['incoming']){
                        incoming = e['scriptTask'][0]['incoming'].length
                    }
                    if(e['scriptTask'][0]['outgoing']){
                        outgoing = e['scriptTask'][0]['outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['userTask']){
                let i = 0;
                e['userTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'UserTask'+i
                    let name
                    let incoming = 0
                    let outgoing = 0
                    if(e['userTask'][0]['$']['name']){
                        name = e['userTask'][0]['$']['name']
                    }
                    if(e['userTask'][0]['incoming']){
                        incoming = e['userTask'][0]['incoming'].length
                    }
                    if(e['userTask'][0]['outgoing']){
                        outgoing = e['userTask'][0]['outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['businessRuleTask']){
                let i = 0;
                e['businessRuleTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'BusinessRuleTask'+i
                    let name 
                    let incoming = 0
                    let outgoing = 0
                    if(e['businessRuleTask'][0]['$']['name']){
                        name = e['businessRuleTask'][0]['$']['name']
                    }
                    if(e['businessRuleTask'][0]['incoming']){
                        incoming = e['businessRuleTask'][0]['incoming'].length
                    }
                    if(e['businessRuleTask'][0]['outgoing']){
                        outgoing = e['businessRuleTask'][0]['outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['serviceTask']){
                let i = 0;
                e['serviceTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ServiceTask'+i
                    let name 
                    let incoming = 0
                    let outgoing = 0
                    if(e['serviceTask'][0]['$']['name']){
                        name = e['serviceTask'][0]['$']['name']
                    }
                    if(e['serviceTask'][0]['incoming']){
                        incoming = e['serviceTask'][0]['incoming'].length
                    }
                    if(e['serviceTask'][0]['outgoing']){
                        outgoing = e['serviceTask'][0]['outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['dataObject']){
                let i = 0;
                e['dataObject'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'DataObject'+i
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['dataObjectReference']){
                let i = 0;
                e['dataObjectReference'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name
                    if(e['dataObjectReference'][0]['$']['name']){
                        name = e['dataObjectReference'][0]['$']['name']
                    }
                    let eventName = 'DataObjectReference'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['dataStoreReference']){
                let i = 0;
                e['dataStoreReference'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name 
                    if(e['dataStoreReference'][0]['$']['name']){
                        name = e['dataStoreReference'][0]['$']['name']
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