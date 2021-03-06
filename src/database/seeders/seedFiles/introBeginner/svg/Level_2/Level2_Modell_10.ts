import { Abstract_Modell } from "../Abstract_Modell"

export class Level2_Modell_10 extends Abstract_Modell{

    
    constructor(){
        let xml_en =`<?xml version="1.0" encoding="UTF-8"?>
        <bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="Definitions_0y02472" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="2.2.4">
          <bpmn:collaboration id="Collaboration_1mlb42i">
            <bpmn:participant id="Participant_1twvqsq" name="PC Build GmbH" processRef="Process_1" />
          </bpmn:collaboration>
          <bpmn:process id="Process_1" isExecutable="true">
            <bpmn:laneSet id="LaneSet_0mm3ia6">
              <bpmn:lane id="Lane_0i7vm35">
                <bpmn:flowNodeRef>Task_00y73li</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_12z27n9</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_11i3w8w</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_0ubjyvm</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_09akz5y</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>EndEvent_1v0o34u</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_1ghyxij</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_1kwlnxh</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_0tvu7l9</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>StartEvent_0wn4vq6</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_0s5s2ny</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>BoundaryEvent_08zegsk</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>EndEvent_16n2mev</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_0lgtkvq</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_06wzq5b</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_0dcgpub</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_09d8gd0</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_051nubq</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>SubProcess_0md6qdy</bpmn:flowNodeRef>
              </bpmn:lane>
            </bpmn:laneSet>
            <bpmn:sequenceFlow id="SequenceFlow_1ayt3ps" sourceRef="StartEvent_0wn4vq6" targetRef="ExclusiveGateway_1kwlnxh" />
            <bpmn:userTask id="Task_00y73li" name="Notify customer of missing information">
              <bpmn:incoming>SequenceFlow_0nign7a</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0e3aakl</bpmn:outgoing>
            </bpmn:userTask>
            <bpmn:userTask id="Task_12z27n9" name="Handle complaint">
              <bpmn:incoming>SequenceFlow_0qkc3lf</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0e9jx1f</bpmn:outgoing>
            </bpmn:userTask>
            <bpmn:businessRuleTask id="Task_11i3w8w" name="Categorize complaint">
              <bpmn:incoming>SequenceFlow_0i1t8vi</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0qkc3lf</bpmn:outgoing>
            </bpmn:businessRuleTask>
            <bpmn:userTask id="Task_0ubjyvm" name="Take up the complaint">
              <bpmn:incoming>SequenceFlow_1iwh22f</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0i1t8vi</bpmn:outgoing>
              <bpmn:property id="Property_067h89s" name="__targetRef_placeholder" />
              <bpmn:dataInputAssociation id="DataInputAssociation_0a2u388">
                <bpmn:sourceRef>DataObjectReference_0zs0d6q</bpmn:sourceRef>
                <bpmn:targetRef>Property_067h89s</bpmn:targetRef>
              </bpmn:dataInputAssociation>
              <bpmn:dataInputAssociation id="DataInputAssociation_1hdmnob">
                <bpmn:sourceRef>DataStoreReference_03wzn1g</bpmn:sourceRef>
                <bpmn:targetRef>Property_067h89s</bpmn:targetRef>
              </bpmn:dataInputAssociation>
            </bpmn:userTask>
            <bpmn:dataObjectReference id="DataObjectReference_0zs0d6q" name="Complaint" dataObjectRef="DataObject_0sbugtj" />
            <bpmn:dataObject id="DataObject_0sbugtj" />
            <bpmn:dataStoreReference id="DataStoreReference_03wzn1g" name="Complaints database" />
            <bpmn:intermediateCatchEvent id="IntermediateThrowEvent_09akz5y" name="Waiting for response from customer">
              <bpmn:incoming>SequenceFlow_0e3aakl</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_02mm3kz</bpmn:outgoing>
              <bpmn:timerEventDefinition />
            </bpmn:intermediateCatchEvent>
            <bpmn:endEvent id="EndEvent_1v0o34u" name="Archive customer complaint">
              <bpmn:incoming>SequenceFlow_16xhdmc</bpmn:incoming>
              <bpmn:terminateEventDefinition />
            </bpmn:endEvent>
            <bpmn:boundaryEvent id="BoundaryEvent_08zegsk" name="Complaint cannot be handled" attachedToRef="Task_12z27n9">
              <bpmn:outgoing>SequenceFlow_0nign7a</bpmn:outgoing>
              <bpmn:errorEventDefinition />
            </bpmn:boundaryEvent>
            <bpmn:sequenceFlow id="SequenceFlow_0t8vx4y" sourceRef="IntermediateThrowEvent_0lgtkvq" targetRef="EndEvent_16n2mev" />
            <bpmn:sequenceFlow id="SequenceFlow_0xwrrma" sourceRef="Task_06wzq5b" targetRef="IntermediateThrowEvent_0lgtkvq" />
            <bpmn:sequenceFlow id="SequenceFlow_0yl3p2d" sourceRef="Task_0dcgpub" targetRef="Task_06wzq5b" />
            <bpmn:sequenceFlow id="SequenceFlow_1grxk5x" sourceRef="ExclusiveGateway_09d8gd0" targetRef="Task_0dcgpub" />
            <bpmn:sequenceFlow id="SequenceFlow_1hw276h" sourceRef="Task_051nubq" targetRef="ExclusiveGateway_09d8gd0" />
            <bpmn:sequenceFlow id="SequenceFlow_1sg9m4n" sourceRef="ExclusiveGateway_0s5s2ny" targetRef="ExclusiveGateway_09d8gd0" />
            <bpmn:sequenceFlow id="SequenceFlow_1xy3bwy" name="Customer already submitted a complaint, but we have not yet been able to handle it" sourceRef="ExclusiveGateway_0s5s2ny" targetRef="Task_051nubq" />
            <bpmn:sequenceFlow id="SequenceFlow_0e9jx1f" sourceRef="Task_12z27n9" targetRef="ExclusiveGateway_0s5s2ny" />
            <bpmn:sequenceFlow id="SequenceFlow_1sq8vux" name="Complaint has already been submitted and handled" sourceRef="ExclusiveGateway_0s5s2ny" targetRef="ExclusiveGateway_09d8gd0" />
            <bpmn:sequenceFlow id="SequenceFlow_0nign7a" sourceRef="BoundaryEvent_08zegsk" targetRef="Task_00y73li" />
            <bpmn:sequenceFlow id="SequenceFlow_0e3aakl" sourceRef="Task_00y73li" targetRef="IntermediateThrowEvent_09akz5y" />
            <bpmn:sequenceFlow id="SequenceFlow_0qkc3lf" sourceRef="Task_11i3w8w" targetRef="Task_12z27n9" />
            <bpmn:sequenceFlow id="SequenceFlow_0i1t8vi" sourceRef="Task_0ubjyvm" targetRef="Task_11i3w8w" />
            <bpmn:sequenceFlow id="SequenceFlow_02mm3kz" sourceRef="IntermediateThrowEvent_09akz5y" targetRef="ExclusiveGateway_0tvu7l9" />
            <bpmn:sequenceFlow id="SequenceFlow_19156jo" sourceRef="ExclusiveGateway_0tvu7l9" targetRef="ExclusiveGateway_1kwlnxh" />
            <bpmn:sequenceFlow id="SequenceFlow_16xhdmc" name="Response time &#62; 14 days" sourceRef="ExclusiveGateway_0tvu7l9" targetRef="EndEvent_1v0o34u" />
            <bpmn:serviceTask id="Task_1ghyxij" name="Record complaint electronically">
              <bpmn:incoming>SequenceFlow_132bs54</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1iwh22f</bpmn:outgoing>
            </bpmn:serviceTask>
            <bpmn:sequenceFlow id="SequenceFlow_132bs54" sourceRef="ExclusiveGateway_1kwlnxh" targetRef="Task_1ghyxij" />
            <bpmn:sequenceFlow id="SequenceFlow_1iwh22f" sourceRef="Task_1ghyxij" targetRef="Task_0ubjyvm" />
            <bpmn:exclusiveGateway id="ExclusiveGateway_1kwlnxh">
              <bpmn:incoming>SequenceFlow_1ayt3ps</bpmn:incoming>
              <bpmn:incoming>SequenceFlow_19156jo</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_132bs54</bpmn:outgoing>
            </bpmn:exclusiveGateway>
            <bpmn:exclusiveGateway id="ExclusiveGateway_0tvu7l9" name="Response time" default="SequenceFlow_19156jo">
              <bpmn:incoming>SequenceFlow_02mm3kz</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_19156jo</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_16xhdmc</bpmn:outgoing>
            </bpmn:exclusiveGateway>
            <bpmn:startEvent id="StartEvent_0wn4vq6" name="Customer complaint received">
              <bpmn:outgoing>SequenceFlow_1ayt3ps</bpmn:outgoing>
              <bpmn:messageEventDefinition />
            </bpmn:startEvent>
            <bpmn:inclusiveGateway id="ExclusiveGateway_0s5s2ny" default="SequenceFlow_1sg9m4n">
              <bpmn:incoming>SequenceFlow_0e9jx1f</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1xy3bwy</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_1sg9m4n</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_1sq8vux</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_1temwr3</bpmn:outgoing>
            </bpmn:inclusiveGateway>
            <bpmn:endEvent id="EndEvent_16n2mev" name="Close complaint">
              <bpmn:incoming>SequenceFlow_0t8vx4y</bpmn:incoming>
            </bpmn:endEvent>
            <bpmn:intermediateCatchEvent id="IntermediateThrowEvent_0lgtkvq" name="Waiting for response from customer">
              <bpmn:incoming>SequenceFlow_0xwrrma</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0t8vx4y</bpmn:outgoing>
              <bpmn:timerEventDefinition />
            </bpmn:intermediateCatchEvent>
            <bpmn:sendTask id="Task_06wzq5b" name="Send answer">
              <bpmn:incoming>SequenceFlow_0yl3p2d</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0xwrrma</bpmn:outgoing>
            </bpmn:sendTask>
            <bpmn:userTask id="Task_0dcgpub" name="Formulate Answer">
              <bpmn:incoming>SequenceFlow_1grxk5x</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0yl3p2d</bpmn:outgoing>
              <bpmn:property id="Property_005utnl" name="__targetRef_placeholder" />
              <bpmn:dataInputAssociation id="DataInputAssociation_1t0qwh9">
                <bpmn:sourceRef>DataObjectReference_0hlwwqb</bpmn:sourceRef>
                <bpmn:targetRef>Property_005utnl</bpmn:targetRef>
              </bpmn:dataInputAssociation>
            </bpmn:userTask>
            <bpmn:inclusiveGateway id="ExclusiveGateway_09d8gd0">
              <bpmn:incoming>SequenceFlow_1hw276h</bpmn:incoming>
              <bpmn:incoming>SequenceFlow_1sg9m4n</bpmn:incoming>
              <bpmn:incoming>SequenceFlow_1sq8vux</bpmn:incoming>
              <bpmn:incoming>SequenceFlow_1w7mauy</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1grxk5x</bpmn:outgoing>
            </bpmn:inclusiveGateway>
            <bpmn:task id="Task_051nubq" name="Note 10% discount voucher">
              <bpmn:incoming>SequenceFlow_1xy3bwy</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1hw276h</bpmn:outgoing>
            </bpmn:task>
            <bpmn:subProcess id="SubProcess_0md6qdy" name="Note giveaway">
              <bpmn:incoming>SequenceFlow_1temwr3</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1w7mauy</bpmn:outgoing>
              <bpmn:startEvent id="StartEvent_150vkkt" name="Giveaway needed">
                <bpmn:outgoing>SequenceFlow_1cilp7r</bpmn:outgoing>
              </bpmn:startEvent>
              <bpmn:task id="Task_1x5ulmx" name="Select giveaway">
                <bpmn:incoming>SequenceFlow_1cilp7r</bpmn:incoming>
                <bpmn:outgoing>SequenceFlow_0ljf2mm</bpmn:outgoing>
              </bpmn:task>
              <bpmn:task id="Task_0no3q4n" name="Send giveaway">
                <bpmn:incoming>SequenceFlow_0ljf2mm</bpmn:incoming>
                <bpmn:outgoing>SequenceFlow_1ws1c74</bpmn:outgoing>
              </bpmn:task>
              <bpmn:endEvent id="EndEvent_0qsmndt" name="Giveaway sent">
                <bpmn:incoming>SequenceFlow_1ws1c74</bpmn:incoming>
              </bpmn:endEvent>
              <bpmn:sequenceFlow id="SequenceFlow_1ws1c74" sourceRef="Task_0no3q4n" targetRef="EndEvent_0qsmndt" />
              <bpmn:sequenceFlow id="SequenceFlow_0ljf2mm" sourceRef="Task_1x5ulmx" targetRef="Task_0no3q4n" />
              <bpmn:sequenceFlow id="SequenceFlow_1cilp7r" sourceRef="StartEvent_150vkkt" targetRef="Task_1x5ulmx" />
            </bpmn:subProcess>
            <bpmn:sequenceFlow id="SequenceFlow_1temwr3" sourceRef="ExclusiveGateway_0s5s2ny" targetRef="SubProcess_0md6qdy" />
            <bpmn:sequenceFlow id="SequenceFlow_1w7mauy" sourceRef="SubProcess_0md6qdy" targetRef="ExclusiveGateway_09d8gd0" />
            <bpmn:dataObjectReference id="DataObjectReference_0hlwwqb" name="Answer" dataObjectRef="DataObject_1hool25" />
            <bpmn:dataObject id="DataObject_1hool25" />
          </bpmn:process>
          <bpmndi:BPMNDiagram id="BPMNDiagram_1">
            <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_1mlb42i">
              <bpmndi:BPMNShape id="Participant_1twvqsq_di" bpmnElement="Participant_1twvqsq">
                <dc:Bounds x="217" y="95" width="2293" height="551" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Lane_0i7vm35_di" bpmnElement="Lane_0i7vm35">
                <dc:Bounds x="247" y="95" width="2263" height="551" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="StartEvent_1g7p6xn_di" bpmnElement="StartEvent_0wn4vq6">
                <dc:Bounds x="282" y="275" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="278" y="319" width="49" height="40" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1ayt3ps_di" bpmnElement="SequenceFlow_1ayt3ps">
                <di:waypoint x="318" y="293" />
                <di:waypoint x="395" y="293" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="UserTask_0zws0v1_di" bpmnElement="Task_0ubjyvm">
                <dc:Bounds x="683" y="253" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="UserTask_030eseu_di" bpmnElement="Task_12z27n9">
                <dc:Bounds x="1035" y="253" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0e9jx1f_di" bpmnElement="SequenceFlow_0e9jx1f">
                <di:waypoint x="1135" y="293" />
                <di:waypoint x="1204" y="293" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="BusinessRuleTask_0e10mbm_di" bpmnElement="Task_11i3w8w">
                <dc:Bounds x="861" y="253" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0qkc3lf_di" bpmnElement="SequenceFlow_0qkc3lf">
                <di:waypoint x="961" y="293" />
                <di:waypoint x="1035" y="293" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="DataObjectReference_0zs0d6q_di" bpmnElement="DataObjectReference_0zs0d6q">
                <dc:Bounds x="715" y="145" width="36" height="50" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="708" y="115" width="51" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="DataInputAssociation_0a2u388_di" bpmnElement="DataInputAssociation_0a2u388">
                <di:waypoint x="733" y="195" />
                <di:waypoint x="733" y="253" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="DataObjectReference_0hlwwqb_di" bpmnElement="DataObjectReference_0hlwwqb">
                <dc:Bounds x="1982" y="145" width="36" height="50" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1978" y="123" width="38" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="DataInputAssociation_1t0qwh9_di" bpmnElement="DataInputAssociation_1t0qwh9">
                <di:waypoint x="2000" y="195" />
                <di:waypoint x="2000" y="253" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="SendTask_0xath3a_di" bpmnElement="Task_06wzq5b">
                <dc:Bounds x="2118" y="253" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0xwrrma_di" bpmnElement="SequenceFlow_0xwrrma">
                <di:waypoint x="2218" y="293" />
                <di:waypoint x="2313" y="293" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="IntermediateCatchEvent_0uvvw89_di" bpmnElement="IntermediateThrowEvent_0lgtkvq">
                <dc:Bounds x="2313" y="275" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="2296" y="318" width="71" height="40" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EndEvent_16n2mev_di" bpmnElement="EndEvent_16n2mev">
                <dc:Bounds x="2425" y="275" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="2403" y="318" width="80" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0t8vx4y_di" bpmnElement="SequenceFlow_0t8vx4y">
                <di:waypoint x="2349" y="293" />
                <di:waypoint x="2425" y="293" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="BoundaryEvent_0ty69eh_di" bpmnElement="BoundaryEvent_08zegsk">
                <dc:Bounds x="1065" y="315" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="993" y="348" width="87" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="ExclusiveGateway_1kwlnxh_di" bpmnElement="ExclusiveGateway_1kwlnxh" isMarkerVisible="true">
                <dc:Bounds x="395" y="268" width="50" height="50" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0i1t8vi_di" bpmnElement="SequenceFlow_0i1t8vi">
                <di:waypoint x="783" y="293" />
                <di:waypoint x="861" y="293" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="IntermediateCatchEvent_1f6kjtn_di" bpmnElement="IntermediateThrowEvent_09akz5y">
                <dc:Bounds x="821" y="461" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="804" y="504" width="71" height="40" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="InclusiveGateway_1x844ff_di" bpmnElement="ExclusiveGateway_0s5s2ny">
                <dc:Bounds x="1204" y="268" width="50" height="50" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Task_051nubq_di" bpmnElement="Task_051nubq">
                <dc:Bounds x="1488" y="130" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1xy3bwy_di" bpmnElement="SequenceFlow_1xy3bwy">
                <di:waypoint x="1229" y="268" />
                <di:waypoint x="1229" y="170" />
                <di:waypoint x="1488" y="170" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1135" y="112" width="88" height="66" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1sg9m4n_di" bpmnElement="SequenceFlow_1sg9m4n">
                <di:waypoint x="1254" y="293" />
                <di:waypoint x="1814" y="293" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="993" y="251" width="87" height="40" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="UserTask_00rweyt_di" bpmnElement="Task_0dcgpub">
                <dc:Bounds x="1950" y="253" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0yl3p2d_di" bpmnElement="SequenceFlow_0yl3p2d">
                <di:waypoint x="2050" y="293" />
                <di:waypoint x="2118" y="293" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1sq8vux_di" bpmnElement="SequenceFlow_1sq8vux">
                <di:waypoint x="1254" y="293" />
                <di:waypoint x="1814" y="293" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1206" y="428" width="71" height="53" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="InclusiveGateway_1n61x46_di" bpmnElement="ExclusiveGateway_09d8gd0">
                <dc:Bounds x="1814" y="268" width="50" height="50" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1hw276h_di" bpmnElement="SequenceFlow_1hw276h">
                <di:waypoint x="1588" y="170" />
                <di:waypoint x="1839" y="170" />
                <di:waypoint x="1839" y="268" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1grxk5x_di" bpmnElement="SequenceFlow_1grxk5x">
                <di:waypoint x="1864" y="293" />
                <di:waypoint x="1950" y="293" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ExclusiveGateway_0tvu7l9_di" bpmnElement="ExclusiveGateway_0tvu7l9" isMarkerVisible="true">
                <dc:Bounds x="395" y="454" width="50" height="50" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="304" y="469" width="74" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_02mm3kz_di" bpmnElement="SequenceFlow_02mm3kz">
                <di:waypoint x="821" y="479" />
                <di:waypoint x="445" y="479" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_19156jo_di" bpmnElement="SequenceFlow_19156jo">
                <di:waypoint x="420" y="454" />
                <di:waypoint x="420" y="318" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_16xhdmc_di" bpmnElement="SequenceFlow_16xhdmc">
                <di:waypoint x="420" y="504" />
                <di:waypoint x="420" y="561" />
                <di:waypoint x="677" y="561" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="378" y="569" width="83" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="EndEvent_17q6rtm_di" bpmnElement="EndEvent_1v0o34u">
                <dc:Bounds x="677" y="543" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="653" y="586" width="86" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="DataStoreReference_03wzn1g_di" bpmnElement="DataStoreReference_03wzn1g">
                <dc:Bounds x="708" y="378" width="50" height="50" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="706" y="435" width="56" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="DataInputAssociation_1hdmnob_di" bpmnElement="DataInputAssociation_1hdmnob">
                <di:waypoint x="733" y="378" />
                <di:waypoint x="733" y="333" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0nign7a_di" bpmnElement="SequenceFlow_0nign7a">
                <di:waypoint x="1083" y="351" />
                <di:waypoint x="1083" y="439" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="UserTask_079wgas_di" bpmnElement="Task_00y73li">
                <dc:Bounds x="1033" y="439" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0e3aakl_di" bpmnElement="SequenceFlow_0e3aakl">
                <di:waypoint x="1033" y="479" />
                <di:waypoint x="857" y="479" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ServiceTask_0dyf26p_di" bpmnElement="Task_1ghyxij">
                <dc:Bounds x="504" y="253" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_132bs54_di" bpmnElement="SequenceFlow_132bs54">
                <di:waypoint x="445" y="293" />
                <di:waypoint x="504" y="293" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1iwh22f_di" bpmnElement="SequenceFlow_1iwh22f">
                <di:waypoint x="604" y="293" />
                <di:waypoint x="683" y="293" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="SubProcess_0md6qdy_di" bpmnElement="SubProcess_0md6qdy" isExpanded="true">
                <dc:Bounds x="1317" y="355" width="441" height="139" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="StartEvent_150vkkt_di" bpmnElement="StartEvent_150vkkt">
                <dc:Bounds x="1339" y="416" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1313" y="459" width="89" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Task_1x5ulmx_di" bpmnElement="Task_1x5ulmx">
                <dc:Bounds x="1424" y="394" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Task_0no3q4n_di" bpmnElement="Task_0no3q4n">
                <dc:Bounds x="1562" y="394" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EndEvent_0qsmndt_di" bpmnElement="EndEvent_0qsmndt">
                <dc:Bounds x="1702" y="416" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1683" y="459" width="74" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1ws1c74_di" bpmnElement="SequenceFlow_1ws1c74">
                <di:waypoint x="1662" y="434" />
                <di:waypoint x="1702" y="434" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0ljf2mm_di" bpmnElement="SequenceFlow_0ljf2mm">
                <di:waypoint x="1524" y="434" />
                <di:waypoint x="1562" y="434" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1cilp7r_di" bpmnElement="SequenceFlow_1cilp7r">
                <di:waypoint x="1375" y="434" />
                <di:waypoint x="1424" y="434" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1temwr3_di" bpmnElement="SequenceFlow_1temwr3">
                <di:waypoint x="1229" y="318" />
                <di:waypoint x="1229" y="425" />
                <di:waypoint x="1317" y="425" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1w7mauy_di" bpmnElement="SequenceFlow_1w7mauy">
                <di:waypoint x="1758" y="425" />
                <di:waypoint x="1839" y="425" />
                <di:waypoint x="1839" y="318" />
              </bpmndi:BPMNEdge>
            </bpmndi:BPMNPlane>
          </bpmndi:BPMNDiagram>
        </bpmn:definitions>`
        let xml_de = `<?xml version="1.0" encoding="UTF-8"?>
        <bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="Definitions_0y02472" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="2.2.4">
          <bpmn:collaboration id="Collaboration_1mlb42i">
            <bpmn:participant id="Participant_1twvqsq" name="PC Build GmbH" processRef="Process_1" />
          </bpmn:collaboration>
          <bpmn:process id="Process_1" isExecutable="true">
            <bpmn:laneSet id="LaneSet_0mm3ia6">
              <bpmn:lane id="Lane_0i7vm35">
                <bpmn:flowNodeRef>Task_00y73li</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_12z27n9</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_11i3w8w</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_0ubjyvm</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_09akz5y</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>EndEvent_1v0o34u</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_1ghyxij</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_1kwlnxh</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_0tvu7l9</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>StartEvent_0wn4vq6</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_0s5s2ny</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>BoundaryEvent_08zegsk</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>EndEvent_16n2mev</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_0lgtkvq</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_06wzq5b</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_0dcgpub</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_09d8gd0</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_051nubq</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>SubProcess_0md6qdy</bpmn:flowNodeRef>
              </bpmn:lane>
            </bpmn:laneSet>
            <bpmn:sequenceFlow id="SequenceFlow_1ayt3ps" sourceRef="StartEvent_0wn4vq6" targetRef="ExclusiveGateway_1kwlnxh" />
            <bpmn:userTask id="Task_00y73li" name="Kunde über fehlende Information benachrichtigen">
              <bpmn:incoming>SequenceFlow_0nign7a</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0e3aakl</bpmn:outgoing>
            </bpmn:userTask>
            <bpmn:userTask id="Task_12z27n9" name="Beschwerde bearbeiten">
              <bpmn:incoming>SequenceFlow_0qkc3lf</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0e9jx1f</bpmn:outgoing>
            </bpmn:userTask>
            <bpmn:businessRuleTask id="Task_11i3w8w" name="Beschwerde kategorisieren">
              <bpmn:incoming>SequenceFlow_0i1t8vi</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0qkc3lf</bpmn:outgoing>
            </bpmn:businessRuleTask>
            <bpmn:userTask id="Task_0ubjyvm" name="Beschwerde aufnehmen">
              <bpmn:incoming>SequenceFlow_1iwh22f</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0i1t8vi</bpmn:outgoing>
              <bpmn:property id="Property_067h89s" name="__targetRef_placeholder" />
              <bpmn:dataInputAssociation id="DataInputAssociation_0a2u388">
                <bpmn:sourceRef>DataObjectReference_0zs0d6q</bpmn:sourceRef>
                <bpmn:targetRef>Property_067h89s</bpmn:targetRef>
              </bpmn:dataInputAssociation>
              <bpmn:dataInputAssociation id="DataInputAssociation_1hdmnob">
                <bpmn:sourceRef>DataStoreReference_03wzn1g</bpmn:sourceRef>
                <bpmn:targetRef>Property_067h89s</bpmn:targetRef>
              </bpmn:dataInputAssociation>
            </bpmn:userTask>
            <bpmn:dataObjectReference id="DataObjectReference_0zs0d6q" name="Beschwerde" dataObjectRef="DataObject_0sbugtj" />
            <bpmn:dataObject id="DataObject_0sbugtj" />
            <bpmn:dataStoreReference id="DataStoreReference_03wzn1g" name="Beschwerde-Datenbank" />
            <bpmn:intermediateCatchEvent id="IntermediateThrowEvent_09akz5y" name="Auf Antwort des Kunden warten">
              <bpmn:incoming>SequenceFlow_0e3aakl</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_02mm3kz</bpmn:outgoing>
              <bpmn:timerEventDefinition />
            </bpmn:intermediateCatchEvent>
            <bpmn:endEvent id="EndEvent_1v0o34u" name="Kunden-beschwerde archivieren">
              <bpmn:incoming>SequenceFlow_16xhdmc</bpmn:incoming>
              <bpmn:terminateEventDefinition />
            </bpmn:endEvent>
            <bpmn:boundaryEvent id="BoundaryEvent_08zegsk" name="Beschwerde kann nicht bearbeitet werden" attachedToRef="Task_12z27n9">
              <bpmn:outgoing>SequenceFlow_0nign7a</bpmn:outgoing>
              <bpmn:errorEventDefinition />
            </bpmn:boundaryEvent>
            <bpmn:sequenceFlow id="SequenceFlow_0t8vx4y" sourceRef="IntermediateThrowEvent_0lgtkvq" targetRef="EndEvent_16n2mev" />
            <bpmn:sequenceFlow id="SequenceFlow_0xwrrma" sourceRef="Task_06wzq5b" targetRef="IntermediateThrowEvent_0lgtkvq" />
            <bpmn:sequenceFlow id="SequenceFlow_0yl3p2d" sourceRef="Task_0dcgpub" targetRef="Task_06wzq5b" />
            <bpmn:sequenceFlow id="SequenceFlow_1grxk5x" sourceRef="ExclusiveGateway_09d8gd0" targetRef="Task_0dcgpub" />
            <bpmn:sequenceFlow id="SequenceFlow_1hw276h" sourceRef="Task_051nubq" targetRef="ExclusiveGateway_09d8gd0" />
            <bpmn:sequenceFlow id="SequenceFlow_1sg9m4n" sourceRef="ExclusiveGateway_0s5s2ny" targetRef="ExclusiveGateway_09d8gd0" />
            <bpmn:sequenceFlow id="SequenceFlow_1xy3bwy" name="Kunde hat bereits eine Beschwerde eingereicht, welche noch nicht bearbeitet wurde" sourceRef="ExclusiveGateway_0s5s2ny" targetRef="Task_051nubq" />
            <bpmn:sequenceFlow id="SequenceFlow_0e9jx1f" sourceRef="Task_12z27n9" targetRef="ExclusiveGateway_0s5s2ny" />
            <bpmn:sequenceFlow id="SequenceFlow_1sq8vux" name="Eine Beschwerde wurde bereits eingereicht und bearbeitet" sourceRef="ExclusiveGateway_0s5s2ny" targetRef="ExclusiveGateway_09d8gd0" />
            <bpmn:sequenceFlow id="SequenceFlow_0nign7a" sourceRef="BoundaryEvent_08zegsk" targetRef="Task_00y73li" />
            <bpmn:sequenceFlow id="SequenceFlow_0e3aakl" sourceRef="Task_00y73li" targetRef="IntermediateThrowEvent_09akz5y" />
            <bpmn:sequenceFlow id="SequenceFlow_0qkc3lf" sourceRef="Task_11i3w8w" targetRef="Task_12z27n9" />
            <bpmn:sequenceFlow id="SequenceFlow_0i1t8vi" sourceRef="Task_0ubjyvm" targetRef="Task_11i3w8w" />
            <bpmn:sequenceFlow id="SequenceFlow_02mm3kz" sourceRef="IntermediateThrowEvent_09akz5y" targetRef="ExclusiveGateway_0tvu7l9" />
            <bpmn:sequenceFlow id="SequenceFlow_19156jo" sourceRef="ExclusiveGateway_0tvu7l9" targetRef="ExclusiveGateway_1kwlnxh" />
            <bpmn:sequenceFlow id="SequenceFlow_16xhdmc" name="Antwortzeit &#62; 14 Tage" sourceRef="ExclusiveGateway_0tvu7l9" targetRef="EndEvent_1v0o34u" />
            <bpmn:serviceTask id="Task_1ghyxij" name="Beschwerde elektronisch erfassen">
              <bpmn:incoming>SequenceFlow_132bs54</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1iwh22f</bpmn:outgoing>
            </bpmn:serviceTask>
            <bpmn:sequenceFlow id="SequenceFlow_132bs54" sourceRef="ExclusiveGateway_1kwlnxh" targetRef="Task_1ghyxij" />
            <bpmn:sequenceFlow id="SequenceFlow_1iwh22f" sourceRef="Task_1ghyxij" targetRef="Task_0ubjyvm" />
            <bpmn:exclusiveGateway id="ExclusiveGateway_1kwlnxh">
              <bpmn:incoming>SequenceFlow_1ayt3ps</bpmn:incoming>
              <bpmn:incoming>SequenceFlow_19156jo</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_132bs54</bpmn:outgoing>
            </bpmn:exclusiveGateway>
            <bpmn:exclusiveGateway id="ExclusiveGateway_0tvu7l9" name="Antwortzeit" default="SequenceFlow_19156jo">
              <bpmn:incoming>SequenceFlow_02mm3kz</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_19156jo</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_16xhdmc</bpmn:outgoing>
            </bpmn:exclusiveGateway>
            <bpmn:startEvent id="StartEvent_0wn4vq6" name="Kundenreklamation geht ein">
              <bpmn:outgoing>SequenceFlow_1ayt3ps</bpmn:outgoing>
              <bpmn:messageEventDefinition />
            </bpmn:startEvent>
            <bpmn:inclusiveGateway id="ExclusiveGateway_0s5s2ny" default="SequenceFlow_1sg9m4n">
              <bpmn:incoming>SequenceFlow_0e9jx1f</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1xy3bwy</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_1sg9m4n</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_1sq8vux</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_1temwr3</bpmn:outgoing>
            </bpmn:inclusiveGateway>
            <bpmn:endEvent id="EndEvent_16n2mev" name="Reklamation abschließen">
              <bpmn:incoming>SequenceFlow_0t8vx4y</bpmn:incoming>
            </bpmn:endEvent>
            <bpmn:intermediateCatchEvent id="IntermediateThrowEvent_0lgtkvq" name="Auf Antwort des Kunden warten">
              <bpmn:incoming>SequenceFlow_0xwrrma</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0t8vx4y</bpmn:outgoing>
              <bpmn:timerEventDefinition />
            </bpmn:intermediateCatchEvent>
            <bpmn:sendTask id="Task_06wzq5b" name="Antwort versenden">
              <bpmn:incoming>SequenceFlow_0yl3p2d</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0xwrrma</bpmn:outgoing>
            </bpmn:sendTask>
            <bpmn:userTask id="Task_0dcgpub" name="Antwort formulieren">
              <bpmn:incoming>SequenceFlow_1grxk5x</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0yl3p2d</bpmn:outgoing>
              <bpmn:property id="Property_1o07d7v" name="__targetRef_placeholder" />
              <bpmn:dataInputAssociation id="DataInputAssociation_1t0qwh9">
                <bpmn:sourceRef>DataObjectReference_0hlwwqb</bpmn:sourceRef>
                <bpmn:targetRef>Property_1o07d7v</bpmn:targetRef>
              </bpmn:dataInputAssociation>
            </bpmn:userTask>
            <bpmn:inclusiveGateway id="ExclusiveGateway_09d8gd0">
              <bpmn:incoming>SequenceFlow_1hw276h</bpmn:incoming>
              <bpmn:incoming>SequenceFlow_1sg9m4n</bpmn:incoming>
              <bpmn:incoming>SequenceFlow_1sq8vux</bpmn:incoming>
              <bpmn:incoming>SequenceFlow_1w7mauy</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1grxk5x</bpmn:outgoing>
            </bpmn:inclusiveGateway>
            <bpmn:task id="Task_051nubq" name="10%-Rabattgutschein vermerken">
              <bpmn:incoming>SequenceFlow_1xy3bwy</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1hw276h</bpmn:outgoing>
            </bpmn:task>
            <bpmn:subProcess id="SubProcess_0md6qdy" name="Giveaway vermerken">
              <bpmn:incoming>SequenceFlow_1temwr3</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1w7mauy</bpmn:outgoing>
              <bpmn:startEvent id="StartEvent_150vkkt" name="Giveaway benötigt">
                <bpmn:outgoing>SequenceFlow_1cilp7r</bpmn:outgoing>
              </bpmn:startEvent>
              <bpmn:task id="Task_1x5ulmx" name="Giveaway auswählen">
                <bpmn:incoming>SequenceFlow_1cilp7r</bpmn:incoming>
                <bpmn:outgoing>SequenceFlow_0ljf2mm</bpmn:outgoing>
              </bpmn:task>
              <bpmn:task id="Task_0no3q4n" name="Giveaway versenden">
                <bpmn:incoming>SequenceFlow_0ljf2mm</bpmn:incoming>
                <bpmn:outgoing>SequenceFlow_1ws1c74</bpmn:outgoing>
              </bpmn:task>
              <bpmn:endEvent id="EndEvent_0qsmndt" name="Giveaway verschickt">
                <bpmn:incoming>SequenceFlow_1ws1c74</bpmn:incoming>
              </bpmn:endEvent>
              <bpmn:sequenceFlow id="SequenceFlow_1ws1c74" sourceRef="Task_0no3q4n" targetRef="EndEvent_0qsmndt" />
              <bpmn:sequenceFlow id="SequenceFlow_0ljf2mm" sourceRef="Task_1x5ulmx" targetRef="Task_0no3q4n" />
              <bpmn:sequenceFlow id="SequenceFlow_1cilp7r" sourceRef="StartEvent_150vkkt" targetRef="Task_1x5ulmx" />
            </bpmn:subProcess>
            <bpmn:sequenceFlow id="SequenceFlow_1temwr3" sourceRef="ExclusiveGateway_0s5s2ny" targetRef="SubProcess_0md6qdy" />
            <bpmn:sequenceFlow id="SequenceFlow_1w7mauy" sourceRef="SubProcess_0md6qdy" targetRef="ExclusiveGateway_09d8gd0" />
            <bpmn:dataObjectReference id="DataObjectReference_0hlwwqb" name="Antwort" dataObjectRef="DataObject_1hool25" />
            <bpmn:dataObject id="DataObject_1hool25" />
          </bpmn:process>
          <bpmndi:BPMNDiagram id="BPMNDiagram_1">
            <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_1mlb42i">
              <bpmndi:BPMNShape id="Participant_1twvqsq_di" bpmnElement="Participant_1twvqsq">
                <dc:Bounds x="217" y="95" width="2293" height="551" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Lane_0i7vm35_di" bpmnElement="Lane_0i7vm35">
                <dc:Bounds x="247" y="95" width="2263" height="551" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="StartEvent_1g7p6xn_di" bpmnElement="StartEvent_0wn4vq6">
                <dc:Bounds x="282" y="275" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="261" y="319" width="83" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1ayt3ps_di" bpmnElement="SequenceFlow_1ayt3ps">
                <di:waypoint x="318" y="293" />
                <di:waypoint x="395" y="293" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="UserTask_0zws0v1_di" bpmnElement="Task_0ubjyvm">
                <dc:Bounds x="683" y="253" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="UserTask_030eseu_di" bpmnElement="Task_12z27n9">
                <dc:Bounds x="1035" y="253" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0e9jx1f_di" bpmnElement="SequenceFlow_0e9jx1f">
                <di:waypoint x="1135" y="293" />
                <di:waypoint x="1204" y="293" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="BusinessRuleTask_0e10mbm_di" bpmnElement="Task_11i3w8w">
                <dc:Bounds x="861" y="253" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0qkc3lf_di" bpmnElement="SequenceFlow_0qkc3lf">
                <di:waypoint x="961" y="293" />
                <di:waypoint x="1035" y="293" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="DataObjectReference_0zs0d6q_di" bpmnElement="DataObjectReference_0zs0d6q">
                <dc:Bounds x="715" y="145" width="36" height="50" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="703" y="115" width="61" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="DataInputAssociation_0a2u388_di" bpmnElement="DataInputAssociation_0a2u388">
                <di:waypoint x="733" y="195" />
                <di:waypoint x="733" y="253" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="DataObjectReference_0hlwwqb_di" bpmnElement="DataObjectReference_0hlwwqb">
                <dc:Bounds x="1982" y="145" width="36" height="50" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1978" y="123" width="38" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="DataInputAssociation_1t0qwh9_di" bpmnElement="DataInputAssociation_1t0qwh9">
                <di:waypoint x="2000" y="195" />
                <di:waypoint x="2000" y="253" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="SendTask_0xath3a_di" bpmnElement="Task_06wzq5b">
                <dc:Bounds x="2118" y="253" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0xwrrma_di" bpmnElement="SequenceFlow_0xwrrma">
                <di:waypoint x="2218" y="293" />
                <di:waypoint x="2313" y="293" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="IntermediateCatchEvent_0uvvw89_di" bpmnElement="IntermediateThrowEvent_0lgtkvq">
                <dc:Bounds x="2313" y="275" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="2293" y="318" width="77" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EndEvent_16n2mev_di" bpmnElement="EndEvent_16n2mev">
                <dc:Bounds x="2425" y="275" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="2412" y="318" width="62" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0t8vx4y_di" bpmnElement="SequenceFlow_0t8vx4y">
                <di:waypoint x="2349" y="293" />
                <di:waypoint x="2425" y="293" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="BoundaryEvent_0ty69eh_di" bpmnElement="BoundaryEvent_08zegsk">
                <dc:Bounds x="1065" y="315" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="992" y="348" width="88" height="40" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="ExclusiveGateway_1kwlnxh_di" bpmnElement="ExclusiveGateway_1kwlnxh" isMarkerVisible="true">
                <dc:Bounds x="395" y="268" width="50" height="50" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0i1t8vi_di" bpmnElement="SequenceFlow_0i1t8vi">
                <di:waypoint x="783" y="293" />
                <di:waypoint x="861" y="293" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="IntermediateCatchEvent_1f6kjtn_di" bpmnElement="IntermediateThrowEvent_09akz5y">
                <dc:Bounds x="821" y="461" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="801" y="504" width="77" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="InclusiveGateway_1x844ff_di" bpmnElement="ExclusiveGateway_0s5s2ny">
                <dc:Bounds x="1204" y="268" width="50" height="50" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Task_051nubq_di" bpmnElement="Task_051nubq">
                <dc:Bounds x="1488" y="130" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1xy3bwy_di" bpmnElement="SequenceFlow_1xy3bwy">
                <di:waypoint x="1229" y="268" />
                <di:waypoint x="1229" y="170" />
                <di:waypoint x="1488" y="170" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1134" y="112" width="88" height="66" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1sg9m4n_di" bpmnElement="SequenceFlow_1sg9m4n">
                <di:waypoint x="1254" y="293" />
                <di:waypoint x="1814" y="293" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="993" y="251" width="87" height="40" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="UserTask_00rweyt_di" bpmnElement="Task_0dcgpub">
                <dc:Bounds x="1950" y="253" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0yl3p2d_di" bpmnElement="SequenceFlow_0yl3p2d">
                <di:waypoint x="2050" y="293" />
                <di:waypoint x="2118" y="293" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1sq8vux_di" bpmnElement="SequenceFlow_1sq8vux">
                <di:waypoint x="1254" y="293" />
                <di:waypoint x="1814" y="293" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1199" y="428" width="86" height="53" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="InclusiveGateway_1n61x46_di" bpmnElement="ExclusiveGateway_09d8gd0">
                <dc:Bounds x="1814" y="268" width="50" height="50" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1hw276h_di" bpmnElement="SequenceFlow_1hw276h">
                <di:waypoint x="1588" y="170" />
                <di:waypoint x="1839" y="170" />
                <di:waypoint x="1839" y="268" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1grxk5x_di" bpmnElement="SequenceFlow_1grxk5x">
                <di:waypoint x="1864" y="293" />
                <di:waypoint x="1950" y="293" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ExclusiveGateway_0tvu7l9_di" bpmnElement="ExclusiveGateway_0tvu7l9" isMarkerVisible="true">
                <dc:Bounds x="395" y="454" width="50" height="50" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="313" y="469" width="55" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_02mm3kz_di" bpmnElement="SequenceFlow_02mm3kz">
                <di:waypoint x="821" y="479" />
                <di:waypoint x="445" y="479" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_19156jo_di" bpmnElement="SequenceFlow_19156jo">
                <di:waypoint x="420" y="454" />
                <di:waypoint x="420" y="318" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_16xhdmc_di" bpmnElement="SequenceFlow_16xhdmc">
                <di:waypoint x="420" y="504" />
                <di:waypoint x="420" y="561" />
                <di:waypoint x="677" y="561" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="380" y="569" width="79" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="EndEvent_17q6rtm_di" bpmnElement="EndEvent_1v0o34u">
                <dc:Bounds x="677" y="543" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="666" y="586" width="60" height="40" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="DataStoreReference_03wzn1g_di" bpmnElement="DataStoreReference_03wzn1g">
                <dc:Bounds x="708" y="378" width="50" height="50" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="701" y="435" width="65" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="DataInputAssociation_1hdmnob_di" bpmnElement="DataInputAssociation_1hdmnob">
                <di:waypoint x="733" y="378" />
                <di:waypoint x="733" y="333" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0nign7a_di" bpmnElement="SequenceFlow_0nign7a">
                <di:waypoint x="1083" y="351" />
                <di:waypoint x="1083" y="439" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="UserTask_079wgas_di" bpmnElement="Task_00y73li">
                <dc:Bounds x="1033" y="439" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0e3aakl_di" bpmnElement="SequenceFlow_0e3aakl">
                <di:waypoint x="1033" y="479" />
                <di:waypoint x="857" y="479" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ServiceTask_0dyf26p_di" bpmnElement="Task_1ghyxij">
                <dc:Bounds x="504" y="253" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_132bs54_di" bpmnElement="SequenceFlow_132bs54">
                <di:waypoint x="445" y="293" />
                <di:waypoint x="504" y="293" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1iwh22f_di" bpmnElement="SequenceFlow_1iwh22f">
                <di:waypoint x="604" y="293" />
                <di:waypoint x="683" y="293" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="SubProcess_0md6qdy_di" bpmnElement="SubProcess_0md6qdy" isExpanded="true">
                <dc:Bounds x="1317" y="355" width="441" height="139" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="StartEvent_150vkkt_di" bpmnElement="StartEvent_150vkkt">
                <dc:Bounds x="1339" y="416" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1333" y="459" width="49" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Task_1x5ulmx_di" bpmnElement="Task_1x5ulmx">
                <dc:Bounds x="1424" y="394" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Task_0no3q4n_di" bpmnElement="Task_0no3q4n">
                <dc:Bounds x="1562" y="394" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EndEvent_0qsmndt_di" bpmnElement="EndEvent_0qsmndt">
                <dc:Bounds x="1702" y="416" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1695" y="459" width="50" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1ws1c74_di" bpmnElement="SequenceFlow_1ws1c74">
                <di:waypoint x="1662" y="434" />
                <di:waypoint x="1702" y="434" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0ljf2mm_di" bpmnElement="SequenceFlow_0ljf2mm">
                <di:waypoint x="1524" y="434" />
                <di:waypoint x="1562" y="434" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1cilp7r_di" bpmnElement="SequenceFlow_1cilp7r">
                <di:waypoint x="1375" y="434" />
                <di:waypoint x="1424" y="434" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1temwr3_di" bpmnElement="SequenceFlow_1temwr3">
                <di:waypoint x="1229" y="318" />
                <di:waypoint x="1229" y="425" />
                <di:waypoint x="1317" y="425" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1w7mauy_di" bpmnElement="SequenceFlow_1w7mauy">
                <di:waypoint x="1758" y="425" />
                <di:waypoint x="1839" y="425" />
                <di:waypoint x="1839" y="318" />
              </bpmndi:BPMNEdge>
            </bpmndi:BPMNPlane>
          </bpmndi:BPMNDiagram>
        </bpmn:definitions>`
        let svg_en =`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="211 89 2305 563" version="1.1"><defs><marker id="sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker><marker id="association-end-white-black-9303h9lh80eybihvz7a2l95qg" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker><marker id="conditional-default-flow-marker-white-black-9303h9lh80eybihvz7a2l95qg" viewBox="0 0 20 20" refX="0" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 6 4 L 10 16" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Participant_1twvqsq" style="display: block;" transform="translate(217 95)"><g class="djs-visual"><rect x="0" y="0" width="2293" height="551" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><polyline points="30,0 30,551 " style="fill: none; stroke: black; stroke-width: 2px;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 551)"><tspan x="233.15625" y="18.6">PC Build GmbH</tspan></text></g><rect x="0" y="0" width="2293" height="551" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="2305" height="563" class="djs-outline" style="fill: none;"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_0i7vm35" style="display: block;" transform="translate(247 95)"><g class="djs-visual"><rect x="0" y="0" width="2263" height="551" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 551)"><tspan x="275.5" y="18.6"/></text></g><rect x="0" y="0" width="2263" height="551" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="2275" height="563" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1w7mauy" style="display: block;"><g class="djs-visual"><path d="m  1758,425L1839,425 L1839,318 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="1758,425 1839,425 1839,318 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1752" y="312" width="93" height="119" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1temwr3" style="display: block;"><g class="djs-visual"><path d="m  1229,318L1229,425 L1317,425 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="1229,318 1229,425 1317,425 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1223" y="312" width="100" height="119" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1iwh22f" style="display: block;"><g class="djs-visual"><path d="m  604,293L683,293 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="604,293 683,293 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="598" y="287" width="91" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_132bs54" style="display: block;"><g class="djs-visual"><path d="m  445,293L504,293 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="445,293 504,293 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="439" y="287" width="71" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_16xhdmc" style="display: block;"><g class="djs-visual"><path d="m  420,504L420,561 L677,561 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="420,504 420,561 677,561 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="414" y="498" width="269" height="69" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_19156jo" style="display: block;"><g class="djs-visual"><path d="m  420,454L420,318 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg'); marker-start: url('#conditional-default-flow-marker-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="420,454 420,318 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="414" y="312" width="12" height="148" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_02mm3kz" style="display: block;"><g class="djs-visual"><path d="m  821,479L445,479 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="821,479 445,479 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="439" y="473" width="388" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0i1t8vi" style="display: block;"><g class="djs-visual"><path d="m  783,293L861,293 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="783,293 861,293 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="777" y="287" width="90" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0qkc3lf" style="display: block;"><g class="djs-visual"><path d="m  961,293L1035,293 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="961,293 1035,293 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="955" y="287" width="86" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0e3aakl" style="display: block;"><g class="djs-visual"><path d="m  1033,479L857,479 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="1033,479 857,479 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="851" y="473" width="188" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0nign7a" style="display: block;"><g class="djs-visual"><path d="m  1083,351L1083,439 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="1083,351 1083,439 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1077" y="345" width="12" height="100" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1sq8vux" style="display: block;"><g class="djs-visual"><path d="m  1254,293L1814,293 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="1254,293 1814,293 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1248" y="287" width="572" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0e9jx1f" style="display: block;"><g class="djs-visual"><path d="m  1135,293L1204,293 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="1135,293 1204,293 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1129" y="287" width="81" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1xy3bwy" style="display: block;"><g class="djs-visual"><path d="m  1229,268L1229,170 L1488,170 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="1229,268 1229,170 1488,170 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1223" y="164" width="271" height="110" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1sg9m4n" style="display: block;"><g class="djs-visual"><path d="m  1254,293L1814,293 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg'); marker-start: url('#conditional-default-flow-marker-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="1254,293 1814,293 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1248" y="287" width="572" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1hw276h" style="display: block;"><g class="djs-visual"><path d="m  1588,170L1839,170 L1839,268 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="1588,170 1839,170 1839,268 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1582" y="164" width="263" height="110" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1grxk5x" style="display: block;"><g class="djs-visual"><path d="m  1864,293L1950,293 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="1864,293 1950,293 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1858" y="287" width="98" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0yl3p2d" style="display: block;"><g class="djs-visual"><path d="m  2050,293L2118,293 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="2050,293 2118,293 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2044" y="287" width="80" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0xwrrma" style="display: block;"><g class="djs-visual"><path d="m  2218,293L2313,293 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="2218,293 2313,293 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2212" y="287" width="107" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0t8vx4y" style="display: block;"><g class="djs-visual"><path d="m  2349,293L2425,293 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="2349,293 2425,293 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2343" y="287" width="88" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1ayt3ps" style="display: block;"><g class="djs-visual"><path d="m  318,293L395,293 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="318,293 395,293 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="312" y="287" width="89" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_00y73li" style="display: block;" transform="translate(1033 439)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="7.921875" y="29.200000000000003">Notify customer </tspan><tspan x="22.9921875" y="43.6">of missing </tspan><tspan x="20.3203125" y="58">information</tspan></text><path d="m 15,12 c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5" style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 " style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z" style="fill: black; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_12z27n9" style="display: block;" transform="translate(1035 253)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="30.7265625" y="36.4">Handle </tspan><tspan x="23.9921875" y="50.8">complaint</tspan></text><path d="m 15,12 c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5" style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 " style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z" style="fill: black; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_11i3w8w" style="display: block;" transform="translate(861 253)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="20.7265625" y="36.4">Categorize </tspan><tspan x="23.9921875" y="50.8">complaint</tspan></text><path d="m 8,8 0,4 20,0 0,-4 z" style="fill: rgb(170, 170, 170); stroke-width: 1px; stroke: black;"/><path d="m 8,8 0,12 20,0 0,-12 zm 0,8 l 20,0 m -13,-4 l 0,8" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0ubjyvm" style="display: block;" transform="translate(683 253)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="18.71875" y="36.4">Take up the </tspan><tspan x="23.9921875" y="50.8">complaint</tspan></text><path d="m 15,12 c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5" style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 " style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z" style="fill: black; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="DataObjectReference_0zs0d6q" style="display: block;" transform="translate(715 145)"><g class="djs-visual"><path d="m 0,0 28.23529411764706,0 7.058823529411765,8.196721311475411 0,40.98360655737705 -35.294117647058826,0 0,-49.18032786885246 28.23529411764706,0 0,8.196721311475411 7.058823529411765,0" style="fill: white; stroke-width: 2px; stroke: black; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="DataObjectReference_0zs0d6q_label" style="display: block;" transform="translate(708 115)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Complaint</tspan></text></g><rect x="0" y="0" width="51" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="63" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="DataStoreReference_03wzn1g" style="display: block;" transform="translate(708 378)"><g class="djs-visual"><path d="m  0,6.65 l  0,36.885245901639344 c  1.639344262295082,8.196721311475411 47.540983606557376,8.196721311475411  49.18032786885246,0 l  0,-36.885245901639344 c -1.639344262295082,-8.196721311475411 -47.540983606557376,-8.196721311475411 -49.18032786885246,0c  1.639344262295082,8.196721311475411 47.540983606557376,8.196721311475411  49.18032786885246,0 m  -49.18032786885246,5.737704918032787c  1.639344262295082,8.196721311475411 47.540983606557376,8.196721311475411 49.18032786885246,0m  -49.18032786885246,5.737704918032787c  1.639344262295082,8.196721311475411 47.540983606557376,8.196721311475411  49.18032786885246,0" style="fill: white; stroke-width: 2px; stroke: black; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="DataStoreReference_03wzn1g_label" style="display: block;" transform="translate(706 435)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Complaints </tspan><tspan x="4.7890625" y="23.099999999999998">database</tspan></text></g><rect x="0" y="0" width="56" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="68" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_09akz5y" style="display: block;" transform="translate(821 461)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><circle cx="18" cy="18" r="11" style="stroke: black; stroke-width: 2px; fill: white;"/><path d="M 18,18 l 2.25,-7.5 m -2.25,7.5 l 5.25,1.5 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(0,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(30,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(60,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(90,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(120,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(150,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(180,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(210,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(240,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(270,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(300,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(330,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_09akz5y_label" style="display: block;" transform="translate(804 504)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="9.1171875" y="9.899999999999999">Waiting for </tspan><tspan x="0" y="23.099999999999998">response from </tspan><tspan x="12.1875" y="36.3">customer</tspan></text></g><rect x="0" y="0" width="71" height="40" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="83" height="52" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1v0o34u" style="display: block;" transform="translate(677 543)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="10" style="stroke: black; stroke-width: 4px; fill: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1v0o34u_label" style="display: block;" transform="translate(653 586)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Archive customer </tspan><tspan x="18.6484375" y="23.099999999999998">complaint</tspan></text></g><rect x="0" y="0" width="86" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="98" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_1ghyxij" style="display: block;" transform="translate(504 253)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="30.6640625" y="29.200000000000003">Record </tspan><tspan x="23.9921875" y="43.6">complaint </tspan><tspan x="15.125" y="58">electronically</tspan></text><path d="m 12,18 v -1.71335 c 0.352326,-0.0705 0.703932,-0.17838 1.047628,-0.32133 0.344416,-0.14465 0.665822,-0.32133 0.966377,-0.52145 l 1.19431,1.18005 1.567487,-1.57688 -1.195028,-1.18014 c 0.403376,-0.61394 0.683079,-1.29908 0.825447,-2.01824 l 1.622133,-0.01 v -2.2196 l -1.636514,0.01 c -0.07333,-0.35153 -0.178319,-0.70024 -0.323564,-1.04372 -0.145244,-0.34406 -0.321407,-0.6644 -0.522735,-0.96217 l 1.131035,-1.13631 -1.583305,-1.56293 -1.129598,1.13589 c -0.614052,-0.40108 -1.302883,-0.68093 -2.022633,-0.82247 l 0.0093,-1.61852 h -2.241173 l 0.0042,1.63124 c -0.353763,0.0736 -0.705369,0.17977 -1.049785,0.32371 -0.344415,0.14437 -0.665102,0.32092 -0.9635006,0.52046 l -1.1698628,-1.15823 -1.5667691,1.5792 1.1684265,1.15669 c -0.4026573,0.61283 -0.68308,1.29797 -0.8247287,2.01713 l -1.6588041,0.003 v 2.22174 l 1.6724648,-0.006 c 0.073327,0.35077 0.1797598,0.70243 0.3242851,1.04472 0.1452428,0.34448 0.3214064,0.6644 0.5227339,0.96066 l -1.1993431,1.19723 1.5840256,1.56011 1.1964668,-1.19348 c 0.6140517,0.40346 1.3028827,0.68232 2.0233517,0.82331 l 7.19e-4,1.69892 h 2.226848 z m 0.221462,-3.9957 c -1.788948,0.7502 -3.8576,-0.0928 -4.6097055,-1.87438 -0.7521065,-1.78321 0.090598,-3.84627 1.8802645,-4.59604 1.78823,-0.74936 3.856881,0.0929 4.608987,1.87437 0.752106,1.78165 -0.0906,3.84612 -1.879546,4.59605 z" style="fill: white; stroke-width: 1px; stroke: black;"/><path d="m 17.2,18 c -1.788948,0.7502 -3.8576,-0.0928 -4.6097055,-1.87438 -0.7521065,-1.78321 0.090598,-3.84627 1.8802645,-4.59604 1.78823,-0.74936 3.856881,0.0929 4.608987,1.87437 0.752106,1.78165 -0.0906,3.84612 -1.879546,4.59605 z" style="fill: white; stroke-width: 0px; stroke: black;"/><path d="m 17,22 v -1.71335 c 0.352326,-0.0705 0.703932,-0.17838 1.047628,-0.32133 0.344416,-0.14465 0.665822,-0.32133 0.966377,-0.52145 l 1.19431,1.18005 1.567487,-1.57688 -1.195028,-1.18014 c 0.403376,-0.61394 0.683079,-1.29908 0.825447,-2.01824 l 1.622133,-0.01 v -2.2196 l -1.636514,0.01 c -0.07333,-0.35153 -0.178319,-0.70024 -0.323564,-1.04372 -0.145244,-0.34406 -0.321407,-0.6644 -0.522735,-0.96217 l 1.131035,-1.13631 -1.583305,-1.56293 -1.129598,1.13589 c -0.614052,-0.40108 -1.302883,-0.68093 -2.022633,-0.82247 l 0.0093,-1.61852 h -2.241173 l 0.0042,1.63124 c -0.353763,0.0736 -0.705369,0.17977 -1.049785,0.32371 -0.344415,0.14437 -0.665102,0.32092 -0.9635006,0.52046 l -1.1698628,-1.15823 -1.5667691,1.5792 1.1684265,1.15669 c -0.4026573,0.61283 -0.68308,1.29797 -0.8247287,2.01713 l -1.6588041,0.003 v 2.22174 l 1.6724648,-0.006 c 0.073327,0.35077 0.1797598,0.70243 0.3242851,1.04472 0.1452428,0.34448 0.3214064,0.6644 0.5227339,0.96066 l -1.1993431,1.19723 1.5840256,1.56011 1.1964668,-1.19348 c 0.6140517,0.40346 1.3028827,0.68232 2.0233517,0.82331 l 7.19e-4,1.69892 h 2.226848 z m 0.221462,-3.9957 c -1.788948,0.7502 -3.8576,-0.0928 -4.6097055,-1.87438 -0.7521065,-1.78321 0.090598,-3.84627 1.8802645,-4.59604 1.78823,-0.74936 3.856881,0.0929 4.608987,1.87437 0.752106,1.78165 -0.0906,3.84612 -1.879546,4.59605 z" style="fill: white; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1kwlnxh" style="display: block;" transform="translate(395 268)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 16,15 7.42857142857143,9.714285714285715 -7.42857142857143,9.714285714285715 3.428571428571429,0 5.714285714285715,-7.464228571428572 5.714285714285715,7.464228571428572 3.428571428571429,0 -7.42857142857143,-9.714285714285715 7.42857142857143,-9.714285714285715 -3.428571428571429,0 -5.714285714285715,7.464228571428572 -5.714285714285715,-7.464228571428572 -3.428571428571429,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_0tvu7l9" style="display: block;" transform="translate(395 454)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 16,15 7.42857142857143,9.714285714285715 -7.42857142857143,9.714285714285715 3.428571428571429,0 5.714285714285715,-7.464228571428572 5.714285714285715,7.464228571428572 3.428571428571429,0 -7.42857142857143,-9.714285714285715 7.42857142857143,-9.714285714285715 -3.428571428571429,0 -5.714285714285715,7.464228571428572 -5.714285714285715,-7.464228571428572 -3.428571428571429,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_0tvu7l9_label" style="display: block;" transform="translate(304 469)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Response time</tspan></text></g><rect x="0" y="0" width="74" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="86" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_0wn4vq6" style="display: block;" transform="translate(282 275)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 8.459999999999999,11.34 l 0,12.6 l 18.900000000000002,0 l 0,-12.6 z l 9.450000000000001,5.4 l 9.450000000000001,-5.4" style="fill: white; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_0wn4vq6_label" style="display: block;" transform="translate(278 319)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Customer </tspan><tspan x="0.3984375" y="23.099999999999998">complaint </tspan><tspan x="3.4765625" y="36.3">received</tspan></text></g><rect x="0" y="0" width="49" height="40" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="61" height="52" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_0s5s2ny" style="display: block;" transform="translate(1204 268)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><circle cx="25" cy="25" r="13" style="stroke: black; stroke-width: 2.5px; fill: white;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_16n2mev" style="display: block;" transform="translate(2425 275)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_16n2mev_label" style="display: block;" transform="translate(2403 318)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Close complaint</tspan></text></g><rect x="0" y="0" width="80" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="92" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_0lgtkvq" style="display: block;" transform="translate(2313 275)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><circle cx="18" cy="18" r="11" style="stroke: black; stroke-width: 2px; fill: white;"/><path d="M 18,18 l 2.25,-7.5 m -2.25,7.5 l 5.25,1.5 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(0,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(30,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(60,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(90,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(120,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(150,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(180,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(210,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(240,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(270,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(300,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(330,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_0lgtkvq_label" style="display: block;" transform="translate(2296 318)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="9.1171875" y="9.899999999999999">Waiting for </tspan><tspan x="0" y="23.099999999999998">response from </tspan><tspan x="12.1875" y="36.3">customer</tspan></text></g><rect x="0" y="0" width="71" height="40" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="83" height="52" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_06wzq5b" style="display: block;" transform="translate(2118 253)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="14.578125" y="43.599999999999994">Send answer</tspan></text><path d="m 5.984999999999999,4.997999999999999 l 0,14 l 21,0 l 0,-14 z l 10.5,6 l 10.5,-6" style="fill: black; stroke-width: 1px; stroke: white;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0dcgpub" style="display: block;" transform="translate(1950 253)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="22.734375" y="36.4">Formulate </tspan><tspan x="29.9921875" y="50.8">Answer</tspan></text><path d="m 15,12 c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5" style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 " style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z" style="fill: black; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_09d8gd0" style="display: block;" transform="translate(1814 268)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><circle cx="25" cy="25" r="13" style="stroke: black; stroke-width: 2.5px; fill: white;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_051nubq" style="display: block;" transform="translate(1488 130)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="23.65625" y="29.200000000000003">Note 10% </tspan><tspan x="27.3203125" y="43.6">discount </tspan><tspan x="28.65625" y="58">voucher</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="SubProcess_0md6qdy" style="display: block;" transform="translate(1317 355)"><g class="djs-visual"><rect x="0" y="0" width="441" height="139" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="180.953125" y="15.799999999999999">Note giveaway</tspan></text></g><rect x="0" y="0" width="441" height="139" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="453" height="151" class="djs-outline" style="fill: none;"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1cilp7r" style="display: block;"><g class="djs-visual"><path d="m  1375,434L1424,434 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="1375,434 1424,434 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1369" y="428" width="61" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0ljf2mm" style="display: block;"><g class="djs-visual"><path d="m  1524,434L1562,434 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="1524,434 1562,434 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1518" y="428" width="50" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1ws1c74" style="display: block;"><g class="djs-visual"><path d="m  1662,434L1702,434 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="1662,434 1702,434 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1656" y="428" width="52" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_150vkkt" style="display: block;" transform="translate(1339 416)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_150vkkt_label" style="display: block;" transform="translate(1313 459)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Giveaway needed</tspan></text></g><rect x="0" y="0" width="89" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="101" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_1x5ulmx" style="display: block;" transform="translate(1424 394)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="6.4453125" y="43.599999999999994">Select giveaway</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0no3q4n" style="display: block;" transform="translate(1562 394)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="9.109375" y="43.599999999999994">Send giveaway</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_0qsmndt" style="display: block;" transform="translate(1702 416)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_0qsmndt_label" style="display: block;" transform="translate(1683 459)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Giveaway sent</tspan></text></g><rect x="0" y="0" width="74" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="86" height="26" class="djs-outline" style="fill: none;"/></g></g></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="DataObjectReference_0hlwwqb" style="display: block;" transform="translate(1982 145)"><g class="djs-visual"><path d="m 0,0 28.23529411764706,0 7.058823529411765,8.196721311475411 0,40.98360655737705 -35.294117647058826,0 0,-49.18032786885246 28.23529411764706,0 0,8.196721311475411 7.058823529411765,0" style="fill: white; stroke-width: 2px; stroke: black; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="DataObjectReference_0hlwwqb_label" style="display: block;" transform="translate(1978 123)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Answer</tspan></text></g><rect x="0" y="0" width="38" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="50" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="BoundaryEvent_08zegsk" style="display: block;" transform="translate(1065 315)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 1;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="m 7.2,25.991999999999997 0.09350000000000001,-0.025300000000000003 7.3392,-9.610700000000001 7.667000000000001,8.9661 4.7003,-18.2204 -5.8707,11.6501 -7.299600000000001,-9.585400000000002 z" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="BoundaryEvent_08zegsk_label" style="display: block;" transform="translate(993 348)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Complaint cannot</tspan><tspan x="15.9140625" y="23.099999999999998">be handled</tspan></text></g><rect x="0" y="0" width="87" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="99" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="SequenceFlow_1xy3bwy_label" style="display: block;" transform="translate(1135 112)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0.4140625" y="9.899999999999999">Customer already </tspan><tspan x="15.296875" y="23.099999999999998">submitted a </tspan><tspan x="0.9296875" y="36.3">complaint, but we </tspan><tspan x="0" y="49.5">have not yet been </tspan><tspan x="4.5625" y="62.7">able to handle it</tspan></text></g><rect x="0" y="0" width="88" height="66" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="100" height="78" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="SequenceFlow_1sq8vux_label" style="display: block;" transform="translate(1206 428)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Complaint has </tspan><tspan x="3.265625" y="23.099999999999998">already been </tspan><tspan x="0.515625" y="36.3">submitted and </tspan><tspan x="15.4921875" y="49.5">handled</tspan></text></g><rect x="0" y="0" width="71" height="53" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="83" height="65" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="SequenceFlow_16xhdmc_label" style="display: block;" transform="translate(378 569)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Response time &gt; </tspan><tspan x="22.109375" y="23.099999999999998">14 days</tspan></text></g><rect x="0" y="0" width="83" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="95" height="39" class="djs-outline" style="fill: none;"/></g></g></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="DataInputAssociation_0a2u388" style="display: block;"><g class="djs-visual"><polyline points="733,195 733,253 " style="fill: none; stroke: black; stroke-width: 2px; stroke-dasharray: 0.5, 5; stroke-linecap: round; stroke-linejoin: round; marker-end: url('#association-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="733,195 733,253 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="727" y="189" width="12" height="70" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="DataInputAssociation_1hdmnob" style="display: block;"><g class="djs-visual"><polyline points="733,378 733,333 " style="fill: none; stroke: black; stroke-width: 2px; stroke-dasharray: 0.5, 5; stroke-linecap: round; stroke-linejoin: round; marker-end: url('#association-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="733,378 733,333 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="727" y="327" width="12" height="57" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="DataInputAssociation_1t0qwh9" style="display: block;"><g class="djs-visual"><polyline points="2000,195 2000,253 " style="fill: none; stroke: black; stroke-width: 2px; stroke-dasharray: 0.5, 5; stroke-linecap: round; stroke-linejoin: round; marker-end: url('#association-end-white-black-9303h9lh80eybihvz7a2l95qg');"/></g><polyline points="2000,195 2000,253 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1994" y="189" width="12" height="70" class="djs-outline" style="fill: none;"/></g></g></svg>`
        let svg_de =`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="211 89 2305 563" version="1.1"><defs><marker id="sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker><marker id="association-end-white-black-0p8lmtcz67ylbbwvh85gm80qy" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker><marker id="conditional-default-flow-marker-white-black-0p8lmtcz67ylbbwvh85gm80qy" viewBox="0 0 20 20" refX="0" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 6 4 L 10 16" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Participant_1twvqsq" style="display: block;" transform="translate(217 95)"><g class="djs-visual"><rect x="0" y="0" width="2293" height="551" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><polyline points="30,0 30,551 " style="fill: none; stroke: black; stroke-width: 2px;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 551)"><tspan x="233.15625" y="18.6">PC Build GmbH</tspan></text></g><rect x="0" y="0" width="2293" height="551" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="2305" height="563" class="djs-outline" style="fill: none;"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_0i7vm35" style="display: block;" transform="translate(247 95)"><g class="djs-visual"><rect x="0" y="0" width="2263" height="551" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 551)"><tspan x="275.5" y="18.6"/></text></g><rect x="0" y="0" width="2263" height="551" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="2275" height="563" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1w7mauy" style="display: block;"><g class="djs-visual"><path d="m  1758,425L1839,425 L1839,318 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="1758,425 1839,425 1839,318 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1752" y="312" width="93" height="119" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1temwr3" style="display: block;"><g class="djs-visual"><path d="m  1229,318L1229,425 L1317,425 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="1229,318 1229,425 1317,425 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1223" y="312" width="100" height="119" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1iwh22f" style="display: block;"><g class="djs-visual"><path d="m  604,293L683,293 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="604,293 683,293 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="598" y="287" width="91" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_132bs54" style="display: block;"><g class="djs-visual"><path d="m  445,293L504,293 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="445,293 504,293 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="439" y="287" width="71" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_16xhdmc" style="display: block;"><g class="djs-visual"><path d="m  420,504L420,561 L677,561 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="420,504 420,561 677,561 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="414" y="498" width="269" height="69" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_19156jo" style="display: block;"><g class="djs-visual"><path d="m  420,454L420,318 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy'); marker-start: url('#conditional-default-flow-marker-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="420,454 420,318 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="414" y="312" width="12" height="148" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_02mm3kz" style="display: block;"><g class="djs-visual"><path d="m  821,479L445,479 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="821,479 445,479 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="439" y="473" width="388" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0i1t8vi" style="display: block;"><g class="djs-visual"><path d="m  783,293L861,293 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="783,293 861,293 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="777" y="287" width="90" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0qkc3lf" style="display: block;"><g class="djs-visual"><path d="m  961,293L1035,293 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="961,293 1035,293 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="955" y="287" width="86" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0e3aakl" style="display: block;"><g class="djs-visual"><path d="m  1033,479L857,479 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="1033,479 857,479 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="851" y="473" width="188" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0nign7a" style="display: block;"><g class="djs-visual"><path d="m  1083,351L1083,439 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="1083,351 1083,439 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1077" y="345" width="12" height="100" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1sq8vux" style="display: block;"><g class="djs-visual"><path d="m  1254,293L1814,293 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="1254,293 1814,293 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1248" y="287" width="572" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0e9jx1f" style="display: block;"><g class="djs-visual"><path d="m  1135,293L1204,293 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="1135,293 1204,293 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1129" y="287" width="81" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1xy3bwy" style="display: block;"><g class="djs-visual"><path d="m  1229,268L1229,170 L1488,170 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="1229,268 1229,170 1488,170 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1223" y="164" width="271" height="110" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1sg9m4n" style="display: block;"><g class="djs-visual"><path d="m  1254,293L1814,293 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy'); marker-start: url('#conditional-default-flow-marker-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="1254,293 1814,293 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1248" y="287" width="572" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1hw276h" style="display: block;"><g class="djs-visual"><path d="m  1588,170L1839,170 L1839,268 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="1588,170 1839,170 1839,268 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1582" y="164" width="263" height="110" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1grxk5x" style="display: block;"><g class="djs-visual"><path d="m  1864,293L1950,293 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="1864,293 1950,293 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1858" y="287" width="98" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0yl3p2d" style="display: block;"><g class="djs-visual"><path d="m  2050,293L2118,293 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="2050,293 2118,293 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2044" y="287" width="80" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0xwrrma" style="display: block;"><g class="djs-visual"><path d="m  2218,293L2313,293 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="2218,293 2313,293 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2212" y="287" width="107" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0t8vx4y" style="display: block;"><g class="djs-visual"><path d="m  2349,293L2425,293 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="2349,293 2425,293 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2343" y="287" width="88" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1ayt3ps" style="display: block;"><g class="djs-visual"><path d="m  318,293L395,293 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="318,293 395,293 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="312" y="287" width="89" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_00y73li" style="display: block;" transform="translate(1033 439)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="18.578125" y="22">Kunde über </tspan><tspan x="27.1171875" y="36.4">fehlende </tspan><tspan x="19.9921875" y="50.8">Information </tspan><tspan x="7.640625" y="65.19999999999999">benachrichtigen</tspan></text><path d="m 15,12 c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5" style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 " style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z" style="fill: black; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_12z27n9" style="display: block;" transform="translate(1035 253)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="16.7265625" y="36.4">Beschwerde </tspan><tspan x="21.6484375" y="50.8">bearbeiten</tspan></text><path d="m 15,12 c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5" style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 " style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z" style="fill: black; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_11i3w8w" style="display: block;" transform="translate(861 253)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="16.7265625" y="36.4">Beschwerde </tspan><tspan x="12.3125" y="50.8">kategorisieren</tspan></text><path d="m 8,8 0,4 20,0 0,-4 z" style="fill: rgb(170, 170, 170); stroke-width: 1px; stroke: black;"/><path d="m 8,8 0,12 20,0 0,-12 zm 0,8 l 20,0 m -13,-4 l 0,8" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0ubjyvm" style="display: block;" transform="translate(683 253)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="16.7265625" y="36.4">Beschwerde </tspan><tspan x="19.9765625" y="50.8">aufnehmen</tspan></text><path d="m 15,12 c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5" style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 " style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z" style="fill: black; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="DataObjectReference_0zs0d6q" style="display: block;" transform="translate(715 145)"><g class="djs-visual"><path d="m 0,0 28.23529411764706,0 7.058823529411765,8.196721311475411 0,40.98360655737705 -35.294117647058826,0 0,-49.18032786885246 28.23529411764706,0 0,8.196721311475411 7.058823529411765,0" style="fill: white; stroke-width: 2px; stroke: black; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="DataObjectReference_0zs0d6q_label" style="display: block;" transform="translate(703 115)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Beschwerde</tspan></text></g><rect x="0" y="0" width="61" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="73" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="DataStoreReference_03wzn1g" style="display: block;" transform="translate(708 378)"><g class="djs-visual"><path d="m  0,6.65 l  0,36.885245901639344 c  1.639344262295082,8.196721311475411 47.540983606557376,8.196721311475411  49.18032786885246,0 l  0,-36.885245901639344 c -1.639344262295082,-8.196721311475411 -47.540983606557376,-8.196721311475411 -49.18032786885246,0c  1.639344262295082,8.196721311475411 47.540983606557376,8.196721311475411  49.18032786885246,0 m  -49.18032786885246,5.737704918032787c  1.639344262295082,8.196721311475411 47.540983606557376,8.196721311475411 49.18032786885246,0m  -49.18032786885246,5.737704918032787c  1.639344262295082,8.196721311475411 47.540983606557376,8.196721311475411  49.18032786885246,0" style="fill: white; stroke-width: 2px; stroke: black; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="DataStoreReference_03wzn1g_label" style="display: block;" transform="translate(701 435)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Beschwerde-</tspan><tspan x="5.21875" y="23.099999999999998">Datenbank</tspan></text></g><rect x="0" y="0" width="65" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="77" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_09akz5y" style="display: block;" transform="translate(821 461)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><circle cx="18" cy="18" r="11" style="stroke: black; stroke-width: 2px; fill: white;"/><path d="M 18,18 l 2.25,-7.5 m -2.25,7.5 l 5.25,1.5 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(0,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(30,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(60,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(90,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(120,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(150,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(180,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(210,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(240,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(270,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(300,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(330,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_09akz5y_label" style="display: block;" transform="translate(801 504)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Auf Antwort des </tspan><tspan x="1.34375" y="23.099999999999998">Kunden warten</tspan></text></g><rect x="0" y="0" width="77" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="89" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1v0o34u" style="display: block;" transform="translate(677 543)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="10" style="stroke: black; stroke-width: 4px; fill: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1v0o34u_label" style="display: block;" transform="translate(666 586)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="8.8359375" y="9.899999999999999">Kunden-</tspan><tspan x="0" y="23.099999999999998">beschwerde </tspan><tspan x="2.7578125" y="36.3">archivieren</tspan></text></g><rect x="0" y="0" width="60" height="40" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="72" height="52" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_1ghyxij" style="display: block;" transform="translate(504 253)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="16.7265625" y="29.200000000000003">Beschwerde </tspan><tspan x="17.984375" y="43.6">elektronisch </tspan><tspan x="26.9921875" y="58">erfassen</tspan></text><path d="m 12,18 v -1.71335 c 0.352326,-0.0705 0.703932,-0.17838 1.047628,-0.32133 0.344416,-0.14465 0.665822,-0.32133 0.966377,-0.52145 l 1.19431,1.18005 1.567487,-1.57688 -1.195028,-1.18014 c 0.403376,-0.61394 0.683079,-1.29908 0.825447,-2.01824 l 1.622133,-0.01 v -2.2196 l -1.636514,0.01 c -0.07333,-0.35153 -0.178319,-0.70024 -0.323564,-1.04372 -0.145244,-0.34406 -0.321407,-0.6644 -0.522735,-0.96217 l 1.131035,-1.13631 -1.583305,-1.56293 -1.129598,1.13589 c -0.614052,-0.40108 -1.302883,-0.68093 -2.022633,-0.82247 l 0.0093,-1.61852 h -2.241173 l 0.0042,1.63124 c -0.353763,0.0736 -0.705369,0.17977 -1.049785,0.32371 -0.344415,0.14437 -0.665102,0.32092 -0.9635006,0.52046 l -1.1698628,-1.15823 -1.5667691,1.5792 1.1684265,1.15669 c -0.4026573,0.61283 -0.68308,1.29797 -0.8247287,2.01713 l -1.6588041,0.003 v 2.22174 l 1.6724648,-0.006 c 0.073327,0.35077 0.1797598,0.70243 0.3242851,1.04472 0.1452428,0.34448 0.3214064,0.6644 0.5227339,0.96066 l -1.1993431,1.19723 1.5840256,1.56011 1.1964668,-1.19348 c 0.6140517,0.40346 1.3028827,0.68232 2.0233517,0.82331 l 7.19e-4,1.69892 h 2.226848 z m 0.221462,-3.9957 c -1.788948,0.7502 -3.8576,-0.0928 -4.6097055,-1.87438 -0.7521065,-1.78321 0.090598,-3.84627 1.8802645,-4.59604 1.78823,-0.74936 3.856881,0.0929 4.608987,1.87437 0.752106,1.78165 -0.0906,3.84612 -1.879546,4.59605 z" style="fill: white; stroke-width: 1px; stroke: black;"/><path d="m 17.2,18 c -1.788948,0.7502 -3.8576,-0.0928 -4.6097055,-1.87438 -0.7521065,-1.78321 0.090598,-3.84627 1.8802645,-4.59604 1.78823,-0.74936 3.856881,0.0929 4.608987,1.87437 0.752106,1.78165 -0.0906,3.84612 -1.879546,4.59605 z" style="fill: white; stroke-width: 0px; stroke: black;"/><path d="m 17,22 v -1.71335 c 0.352326,-0.0705 0.703932,-0.17838 1.047628,-0.32133 0.344416,-0.14465 0.665822,-0.32133 0.966377,-0.52145 l 1.19431,1.18005 1.567487,-1.57688 -1.195028,-1.18014 c 0.403376,-0.61394 0.683079,-1.29908 0.825447,-2.01824 l 1.622133,-0.01 v -2.2196 l -1.636514,0.01 c -0.07333,-0.35153 -0.178319,-0.70024 -0.323564,-1.04372 -0.145244,-0.34406 -0.321407,-0.6644 -0.522735,-0.96217 l 1.131035,-1.13631 -1.583305,-1.56293 -1.129598,1.13589 c -0.614052,-0.40108 -1.302883,-0.68093 -2.022633,-0.82247 l 0.0093,-1.61852 h -2.241173 l 0.0042,1.63124 c -0.353763,0.0736 -0.705369,0.17977 -1.049785,0.32371 -0.344415,0.14437 -0.665102,0.32092 -0.9635006,0.52046 l -1.1698628,-1.15823 -1.5667691,1.5792 1.1684265,1.15669 c -0.4026573,0.61283 -0.68308,1.29797 -0.8247287,2.01713 l -1.6588041,0.003 v 2.22174 l 1.6724648,-0.006 c 0.073327,0.35077 0.1797598,0.70243 0.3242851,1.04472 0.1452428,0.34448 0.3214064,0.6644 0.5227339,0.96066 l -1.1993431,1.19723 1.5840256,1.56011 1.1964668,-1.19348 c 0.6140517,0.40346 1.3028827,0.68232 2.0233517,0.82331 l 7.19e-4,1.69892 h 2.226848 z m 0.221462,-3.9957 c -1.788948,0.7502 -3.8576,-0.0928 -4.6097055,-1.87438 -0.7521065,-1.78321 0.090598,-3.84627 1.8802645,-4.59604 1.78823,-0.74936 3.856881,0.0929 4.608987,1.87437 0.752106,1.78165 -0.0906,3.84612 -1.879546,4.59605 z" style="fill: white; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1kwlnxh" style="display: block;" transform="translate(395 268)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 16,15 7.42857142857143,9.714285714285715 -7.42857142857143,9.714285714285715 3.428571428571429,0 5.714285714285715,-7.464228571428572 5.714285714285715,7.464228571428572 3.428571428571429,0 -7.42857142857143,-9.714285714285715 7.42857142857143,-9.714285714285715 -3.428571428571429,0 -5.714285714285715,7.464228571428572 -5.714285714285715,-7.464228571428572 -3.428571428571429,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_0tvu7l9" style="display: block;" transform="translate(395 454)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 16,15 7.42857142857143,9.714285714285715 -7.42857142857143,9.714285714285715 3.428571428571429,0 5.714285714285715,-7.464228571428572 5.714285714285715,7.464228571428572 3.428571428571429,0 -7.42857142857143,-9.714285714285715 7.42857142857143,-9.714285714285715 -3.428571428571429,0 -5.714285714285715,7.464228571428572 -5.714285714285715,-7.464228571428572 -3.428571428571429,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_0tvu7l9_label" style="display: block;" transform="translate(313 469)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Antwortzeit</tspan></text></g><rect x="0" y="0" width="55" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="67" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_0wn4vq6" style="display: block;" transform="translate(282 275)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 8.459999999999999,11.34 l 0,12.6 l 18.900000000000002,0 l 0,-12.6 z l 9.450000000000001,5.4 l 9.450000000000001,-5.4" style="fill: white; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_0wn4vq6_label" style="display: block;" transform="translate(261 319)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Kundenreklamati</tspan><tspan x="13.921875" y="23.099999999999998">on geht ein</tspan></text></g><rect x="0" y="0" width="83" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="95" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_0s5s2ny" style="display: block;" transform="translate(1204 268)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><circle cx="25" cy="25" r="13" style="stroke: black; stroke-width: 2.5px; fill: white;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_16n2mev" style="display: block;" transform="translate(2425 275)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_16n2mev_label" style="display: block;" transform="translate(2412 318)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Reklamation </tspan><tspan x="0.90625" y="23.099999999999998">abschließen</tspan></text></g><rect x="0" y="0" width="62" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="74" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_0lgtkvq" style="display: block;" transform="translate(2313 275)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><circle cx="18" cy="18" r="11" style="stroke: black; stroke-width: 2px; fill: white;"/><path d="M 18,18 l 2.25,-7.5 m -2.25,7.5 l 5.25,1.5 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(0,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(30,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(60,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(90,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(120,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(150,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(180,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(210,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(240,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(270,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(300,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(330,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_0lgtkvq_label" style="display: block;" transform="translate(2293 318)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Auf Antwort des </tspan><tspan x="1.34375" y="23.099999999999998">Kunden warten</tspan></text></g><rect x="0" y="0" width="77" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="89" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_06wzq5b" style="display: block;" transform="translate(2118 253)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="29.7265625" y="36.4">Antwort </tspan><tspan x="22.3828125" y="50.8">versenden</tspan></text><path d="m 5.984999999999999,4.997999999999999 l 0,14 l 21,0 l 0,-14 z l 10.5,6 l 10.5,-6" style="fill: black; stroke-width: 1px; stroke: white;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0dcgpub" style="display: block;" transform="translate(1950 253)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="29.7265625" y="36.4">Antwort </tspan><tspan x="20.390625" y="50.8">formulieren</tspan></text><path d="m 15,12 c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5" style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 " style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z" style="fill: black; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_09d8gd0" style="display: block;" transform="translate(1814 268)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><circle cx="25" cy="25" r="13" style="stroke: black; stroke-width: 2.5px; fill: white;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_051nubq" style="display: block;" transform="translate(1488 130)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="35.9921875" y="29.200000000000003">10%-</tspan><tspan x="6.640625" y="43.6">Rabattgutschein</tspan><tspan x="22.0625" y="58">vermerken</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="SubProcess_0md6qdy" style="display: block;" transform="translate(1317 355)"><g class="djs-visual"><rect x="0" y="0" width="441" height="139" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="164.1484375" y="15.799999999999999">Giveaway vermerken</tspan></text></g><rect x="0" y="0" width="441" height="139" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="453" height="151" class="djs-outline" style="fill: none;"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1cilp7r" style="display: block;"><g class="djs-visual"><path d="m  1375,434L1424,434 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="1375,434 1424,434 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1369" y="428" width="61" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0ljf2mm" style="display: block;"><g class="djs-visual"><path d="m  1524,434L1562,434 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="1524,434 1562,434 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1518" y="428" width="50" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1ws1c74" style="display: block;"><g class="djs-visual"><path d="m  1662,434L1702,434 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="1662,434 1702,434 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1656" y="428" width="52" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_150vkkt" style="display: block;" transform="translate(1339 416)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_150vkkt_label" style="display: block;" transform="translate(1333 459)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Giveaway </tspan><tspan x="4.15625" y="23.099999999999998">benötigt</tspan></text></g><rect x="0" y="0" width="49" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="61" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_1x5ulmx" style="display: block;" transform="translate(1424 394)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="23.4609375" y="36.4">Giveaway </tspan><tspan x="21.3125" y="50.8">auswählen</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0no3q4n" style="display: block;" transform="translate(1562 394)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="23.4609375" y="36.4">Giveaway </tspan><tspan x="22.3828125" y="50.8">versenden</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_0qsmndt" style="display: block;" transform="translate(1702 416)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_0qsmndt_label" style="display: block;" transform="translate(1695 459)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0.328125" y="9.899999999999999">Giveaway </tspan><tspan x="0" y="23.099999999999998">verschickt</tspan></text></g><rect x="0" y="0" width="50" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="39" class="djs-outline" style="fill: none;"/></g></g></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="DataObjectReference_0hlwwqb" style="display: block;" transform="translate(1982 145)"><g class="djs-visual"><path d="m 0,0 28.23529411764706,0 7.058823529411765,8.196721311475411 0,40.98360655737705 -35.294117647058826,0 0,-49.18032786885246 28.23529411764706,0 0,8.196721311475411 7.058823529411765,0" style="fill: white; stroke-width: 2px; stroke: black; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="DataObjectReference_0hlwwqb_label" style="display: block;" transform="translate(1978 123)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Antwort</tspan></text></g><rect x="0" y="0" width="38" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="50" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="BoundaryEvent_08zegsk" style="display: block;" transform="translate(1065 315)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 1;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="m 7.2,25.991999999999997 0.09350000000000001,-0.025300000000000003 7.3392,-9.610700000000001 7.667000000000001,8.9661 4.7003,-18.2204 -5.8707,11.6501 -7.299600000000001,-9.585400000000002 z" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="BoundaryEvent_08zegsk_label" style="display: block;" transform="translate(992 348)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Beschwerde kann </tspan><tspan x="5.78125" y="23.099999999999998">nicht bearbeitet </tspan><tspan x="26.078125" y="36.3">werden</tspan></text></g><rect x="0" y="0" width="88" height="40" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="100" height="52" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="SequenceFlow_1xy3bwy_label" style="display: block;" transform="translate(1134 112)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0.6328125" y="9.899999999999999">Kunde hat bereits</tspan><tspan x="1.4609375" y="23.099999999999998">eine Beschwerde </tspan><tspan x="15.359375" y="36.3">eingereicht, </tspan><tspan x="0" y="49.5">welche noch nicht</tspan><tspan x="2.6796875" y="62.7">bearbeitet wurde</tspan></text></g><rect x="0" y="0" width="88" height="66" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="100" height="78" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="SequenceFlow_1sq8vux_label" style="display: block;" transform="translate(1199 428)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Eine Beschwerde </tspan><tspan x="10.2734375" y="23.099999999999998">wurde bereits </tspan><tspan x="5.1875" y="36.3">eingereicht und </tspan><tspan x="18.0078125" y="49.5">bearbeitet</tspan></text></g><rect x="0" y="0" width="86" height="53" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="98" height="65" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="SequenceFlow_16xhdmc_label" style="display: block;" transform="translate(380 569)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Antwortzeit &gt; 14 </tspan><tspan x="27.265625" y="23.099999999999998">Tage</tspan></text></g><rect x="0" y="0" width="79" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="91" height="39" class="djs-outline" style="fill: none;"/></g></g></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="DataInputAssociation_0a2u388" style="display: block;"><g class="djs-visual"><polyline points="733,195 733,253 " style="fill: none; stroke: black; stroke-width: 2px; stroke-dasharray: 0.5, 5; stroke-linecap: round; stroke-linejoin: round; marker-end: url('#association-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="733,195 733,253 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="727" y="189" width="12" height="70" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="DataInputAssociation_1hdmnob" style="display: block;"><g class="djs-visual"><polyline points="733,378 733,333 " style="fill: none; stroke: black; stroke-width: 2px; stroke-dasharray: 0.5, 5; stroke-linecap: round; stroke-linejoin: round; marker-end: url('#association-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="733,378 733,333 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="727" y="327" width="12" height="57" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="DataInputAssociation_1t0qwh9" style="display: block;"><g class="djs-visual"><polyline points="2000,195 2000,253 " style="fill: none; stroke: black; stroke-width: 2px; stroke-dasharray: 0.5, 5; stroke-linecap: round; stroke-linejoin: round; marker-end: url('#association-end-white-black-0p8lmtcz67ylbbwvh85gm80qy');"/></g><polyline points="2000,195 2000,253 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1994" y="189" width="12" height="70" class="djs-outline" style="fill: none;"/></g></g></svg>`

        super (xml_de,xml_en,svg_de, svg_en)

    }
}

