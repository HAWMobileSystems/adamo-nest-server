export class BPMNIOParser{
    private xml
    private result
    constructor(xml_input){
        this.xml = xml_input
        this.result = this.createComparisonMapForBPMNIO(this.xml)
    }
        /**
     * Parse BPMNIO XMl file to Comparison Map
     * @param bpmn_from_user_lvl2 
     */
    createComparisonMapForBPMNIO(bpmn_from_user_lvl2){
        let parse: Map<string,Map<string,any>> = new Map()
        bpmn_from_user_lvl2.forEach(e=>{
            if(e['bpmn2:startEvent']){
                let i = 0
                e['bpmn2:startEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name = e['bpmn2:startEvent'][0]['$']['name']
                    let eventName = 'Startevent'+i
                    let outgoing = 0
                    if(e['bpmn2:startEvent'][0]['bpmn2:outgoing']){
                        outgoing = e['bpmn2:startEvent'][0]['bpmn2:outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    parse.set(eventName,res)
                    i++
                })
                
            }
            if(e['bpmn2:endEvent']){
                let i = 0
                e['bpmn2:endEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name = e['bpmn2:endEvent'][0]['$']['name']
                    let eventName = 'Endevent'+i
                    let incoming = 0
                    if(e['bpmn2:endEvent'][0]['bpmn2:incoming']){
                        incoming = e['bpmn2:endEvent'][0]['bpmn2:incoming'].length
                    }
                    res.set("name",name)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:exclusiveGateway']){
                let i = 0
                e['bpmn2:exclusiveGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name = e['bpmn2:exclusiveGateway'][0]['$']['name']
                    let eventName = 'ExclusiveGateway'+i
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn2:exclusiveGateway'][0]['bpmn2:incoming']){
                        incoming = e['bpmn2:exclusiveGateway'][0]['bpmn2:incoming'].length
                    }
                    if(e['bpmn2:exclusiveGateway'][0]['bpmn2:outgoing']){
                        outgoing = e['bpmn2:exclusiveGateway'][0]['bpmn2:outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:participant']){
                let i = 0
                e['bpmn2:participant'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name
                    if(e['bpmn2:participant'][0]['$']['name']){
                        name = e['bpmn2:participant'][0]['$']['name']
                    }
                    let eventName = 'Participant'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:lane']){
                let i = 0
                e['bpmn2:lane'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name = e['bpmn2:lane'][0]['$']['name']
                    let eventName = 'Lane'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:flowNodeRef']){
                let i = 0
                e['bpmn2:flowNodeRef'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'FlowNodeRef'+i
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:sequenceFlow']){
                let i = 0
                e['bpmn2:sequenceFlow'].forEach(ele=>{
                    console.log()
                    let res: Map<string,any> = new Map()
                    let name
                    if(e['bpmn2:sequenceFlow'][0]['$']['name']){
                        name = e['bpmn2:sequenceFlow'][0]['$']['name']
                    }
                    let eventName = 'SequenceFlow'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:subProcess']){
                let i = 0
                e['bpmn2:subProcess'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name
                    if(e['bpmn2:subProcess'][0]['$']['name']){
                        name = e['bpmn2:subProcess'][0]['$']['name']
                    }
                    let eventName = 'subProcess'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:parallelGateway']){
                let i = 0
                e['bpmn2:parallelGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ParallelGateway'+i
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn2:parallelGateway'][0]['bpmn2:incoming']){
                        incoming = e['bpmn2:parallelGateway'][0]['bpmn2:incoming'].length
                    }
                    if(e['bpmn2:parallelGateway'][0]['bpmn2:outgoing']){
                        outgoing = e['bpmn2:parallelGateway'][0]['bpmn2:outgoing'].length
                    }
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:exclusiveGateway']){
                let i = 0
                e['bpmn2:exclusiveGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ExclusiveGateway'+i
                    let name
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn2:exclusiveGateway'][0]['$']['name']){
                        name = e['bpmn2:exclusiveGateway'][0]['$']['name']
                    }
                    if(e['bpmn2:exclusiveGateway'][0]['bpmn2:outgoing']){
                        outgoing = e['bpmn2:exclusiveGateway'][0]['bpmn2:outgoing'].length
                    }
                    if(e['bpmn2:exclusiveGateway'][0]['bpmn2:incoming']){
                        incoming = e['bpmn2:exclusiveGateway'][0]['bpmn2:incoming'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:complexGateway']){
                let i = 0
                e['bpmn2:complexGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ComplexGateway'+i
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn2:complexGateway'][0]['bpmn2:incoming']){
                        incoming = e['bpmn2:complexGateway'][0]['bpmn2:incoming'].length
                    }
                    if(e['bpmn2:complexGateway'][0]['bpmn2:outgoing']){
                        outgoing = e['bpmn2:complexGateway'][0]['bpmn2:outgoing'].length
                    }
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:inclusiveGateway']){
                let i = 0
                e['bpmn2:inclusiveGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'InclusiveGateway'+i
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn2:inclusiveGateway'][0]['bpmn2:incoming']){
                        incoming = e['bpmn2:inclusiveGateway'][0]['bpmn2:incoming'].length
                    }
                    if(e['bpmn2:inclusiveGateway'][0]['bpmn2:outgoing']){
                        outgoing = e['bpmn2:inclusiveGateway'][0]['bpmn2:outgoing'].length
                    }
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:eventBasedGateway']){
                let i = 0
                e['bpmn2:eventBasedGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'EventBasedGateway'+i
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn2:eventBasedGateway'][0]['bpmn2:incoming']){
                        incoming = e['bpmn2:eventBasedGateway'][0]['bpmn2:incoming'].length
                    }
                    if(e['bpmn2:eventBasedGateway'][0]['bpmn2:outgoing']){
                        outgoing = e['bpmn2:eventBasedGateway'][0]['bpmn2:outgoing'].length
                    }
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:intermediateCatchEvent']){
                let i = 0
                e['bpmn2:intermediateCatchEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'IntermediateCatchEvent'+i
                    let name 
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn2:intermediateCatchEvent'][0]['$']['name']){
                        name = e['bpmn2:intermediateCatchEvent'][0]['$']['name']
                    }
                    if(e['bpmn2:intermediateCatchEvent'][0]['bpmn2:incoming']){
                        incoming = e['bpmn2:intermediateCatchEvent'][0]['bpmn2:incoming'].length
                    }
                    if(e['bpmn2:intermediateCatchEvent'][0]['bpmn2:outgoing']){
                        outgoing = e['bpmn2:intermediateCatchEvent'][0]['bpmn2:outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:intermediateThrowEvent']){
                let i = 0
                e['bpmn2:intermediateThrowEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'IntermediateThrowEvent'+i
                    let name 
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn2:intermediateThrowEvent'][0]['$']['name']){
                        name = e['bpmn2:intermediateThrowEvent'][0]['$']['name']
                    }
                    if(e['bpmn2:intermediateThrowEvent'][0]['bpmn2:incoming']){
                        incoming = e['bpmn2:intermediateThrowEvent'][0]['bpmn2:incoming'].length
                    }
                    if(e['bpmn2:intermediateThrowEvent'][0]['bpmn2:outgoing']){
                        outgoing = e['bpmn2:intermediateThrowEvent'][0]['bpmn2:outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:boundaryEvent']){
                let i = 0
                e['bpmn2:boundaryEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'BoundaryEvent'+i
                    let name 
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn2:boundaryEvent'][0]['$']['name']){
                        name = e['bpmn2:boundaryEvent'][0]['$']['name']
                    }
                    if(e['bpmn2:boundaryEvent'][0]['bpmn2:incoming']){
                        incoming = e['bpmn2:boundaryEvent'][0]['bpmn2:incoming'].length
                    }
                    if(e['bpmn2:boundaryEvent'][0]['bpmn2:outgoing']){
                        outgoing = e['bpmn2:boundaryEvent'][0]['bpmn2:outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:task']){
                let i = 0;
                e['bpmn2:task'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'Task'+i
                    let name
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn2:task'][0]['$']['name']){
                        name = e['bpmn2:task'][0]['$']['name']
                    }
                    if(e['bpmn2:task'][0]['bpmn2:incoming']){
                     incoming = e['bpmn2:task'][0]['bpmn2:incoming'].length   
                    }
                    if(e['bpmn2:task'][0]['bpmn2:outgoing']){
                        outgoing = e['bpmn2:task'][0]['bpmn2:outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
                
            }
            if(e['bpmn2:manualTask']){
                let i = 0;
                e['bpmn2:manualTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ManualTask'+i
                    let name 
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn2:manualTask'][0]['$']['name']){
                        name = e['bpmn2:manualTask'][0]['$']['name']
                    }
                    if(e['bpmn2:manualTask'][0]['bpmn2:incoming']){
                        incoming = e['bpmn2:manualTask'][0]['bpmn2:incoming'].length
                    }
                    if(e['bpmn2:manualTask'][0]['bpmn2:outgoing']){
                        outgoing = e['bpmn2:manualTask'][0]['bpmn2:outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:sendTask']){
                let i = 0;
                e['bpmn2:sendTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'SendTask'+i
                    let name 
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn2:sendTask'][0]['$']['name']){
                        name = e['bpmn2:sendTask'][0]['$']['name']
                    }
                    if(e['bpmn2:sendTask'][0]['bpmn2:incoming']){
                        incoming = e['bpmn2:sendTask'][0]['bpmn2:incoming'].length
                    }
                    if(e['bpmn2:sendTask'][0]['bpmn2:outgoing']){
                        outgoing = e['bpmn2:sendTask'][0]['bpmn2:outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:receiveTask']){
                let i = 0;
                e['bpmn2:receiveTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ReceiveTask'+i
                    let name 
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn2:receiveTask'][0]['$']['name']){
                        name = e['bpmn2:receiveTask'][0]['$']['name']
                    }
                    if(e['bpmn2:receiveTask'][0]['bpmn2:incoming']){
                        incoming = e['bpmn2:receiveTask'][0]['bpmn2:incoming'].length
                    }
                    if(e['bpmn2:receiveTask'][0]['bpmn2:outgoing']){
                        outgoing = e['bpmn2:receiveTask'][0]['bpmn2:outgoing'].length
                    } 
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:scriptTask']){
                let i = 0;
                e['bpmn2:scriptTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ScriptTask'+i
                    let name 
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn2:scriptTask'][0]['$']['name']){
                        name = e['bpmn2:scriptTask'][0]['$']['name']
                    }
                    if(e['bpmn2:scriptTask'][0]['bpmn2:incoming']){
                        incoming = e['bpmn2:scriptTask'][0]['bpmn2:incoming'].length
                    }
                    if(e['bpmn2:scriptTask'][0]['bpmn2:outgoing']){
                        outgoing = e['bpmn2:scriptTask'][0]['bpmn2:outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:userTask']){
                let i = 0;
                e['bpmn2:userTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'UserTask'+i
                    let name 
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn2:userTask'][0]['$']['name']){
                        name = e['bpmn2:userTask'][0]['$']['name']
                    }
                    if(e['bpmn2:userTask'][0]['bpmn2:incoming']){
                        incoming = e['bpmn2:userTask'][0]['bpmn2:incoming'].length
                    }
                    if(e['bpmn2:userTask'][0]['bpmn2:outgoing']){
                        outgoing = e['bpmn2:userTask'][0]['bpmn2:outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:businessRuleTask']){
                let i = 0;
                e['bpmn2:businessRuleTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'BusinessRuleTask'+i
                    let name 
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn2:businessRuleTask'][0]['$']['name']){
                        name = e['bpmn2:businessRuleTask'][0]['$']['name']
                    }
                    if(e['bpmn2:businessRuleTask'][0]['bpmn2:incoming']){
                        incoming = e['bpmn2:businessRuleTask'][0]['bpmn2:incoming'].length
                    }
                    if(e['bpmn2:businessRuleTask'][0]['bpmn2:outgoing']){
                        outgoing = e['bpmn2:businessRuleTask'][0]['bpmn2:outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:serviceTask']){
                let i = 0;
                e['bpmn2:serviceTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ServiceTask'+i
                    let name 
                    let incoming = 0
                    let outgoing = 0
                    if(e['bpmn2:serviceTask'][0]['$']['name']){
                        name = e['bpmn2:serviceTask'][0]['$']['name']
                    }
                    if(e['bpmn2:serviceTask'][0]['bpmn2:incoming']){
                        incoming = e['bpmn2:serviceTask'][0]['bpmn2:incoming'].length
                    }
                    if(e['bpmn2:serviceTask'][0]['bpmn2:outgoing']){
                        outgoing = e['bpmn2:serviceTask'][0]['bpmn2:outgoing'].length
                    }
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:dataObject']){
                let i = 0;
                e['bpmn2:dataObject'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'DataObject'+i
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:dataObjectReference']){
                let i = 0;
                e['bpmn2:dataObjectReference'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name
                    if(e['bpmn2:dataObjectReference'][0]['$']['name']){
                        name = e['bpmn2:dataObjectReference'][0]['$']['name']
                    }
                    
                    let eventName = 'DataObjectReference'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:dataStoreReference']){
                let i = 0;
                e['bpmn2:dataStoreReference'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name
                    if(e['bpmn2:dataStoreReference'][0]['$']['name']){
                        name = e['bpmn2:dataStoreReference'][0]['$']['name']
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