import { Abstract_Modell } from "../Abstract_Modell"

export class Level3_Modell_5 extends Abstract_Modell{

    
    constructor(){
        let xml_en =`<?xml version="1.0" encoding="UTF-8"?>
        <bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="Definitions_0my7xzj" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="2.2.4">
          <bpmn:collaboration id="Collaboration_1rsvusk">
            <bpmn:participant id="Participant_0t18keu" name="PC Build GmbH" processRef="Process_1" />
          </bpmn:collaboration>
          <bpmn:process id="Process_1" isExecutable="true">
            <bpmn:laneSet id="LaneSet_0pxb912">
              <bpmn:lane id="Lane_1jx5o3q" name="Order processing">
                <bpmn:flowNodeRef>StartEvent_1</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_1ydvkkn</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_1c7ol8g</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_0se57ht</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_1anf4b1</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_1jg9g5a</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_0k2az84</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_0hqcq5y</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_029qami</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_06oc8as</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>EndEvent_1av8h1g</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_1g79lt0</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_0x1yj54</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_1ex2tql</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>BoundaryEvent_1b66u6z</bpmn:flowNodeRef>
                <bpmn:childLaneSet id="LaneSet_0ab1ad7" />
              </bpmn:lane>
              <bpmn:lane id="Lane_0e2krhp" name="Sales">
                <bpmn:flowNodeRef>Task_0eir53l</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_0865w6t</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>EndEvent_09mbo43</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_03chpya</bpmn:flowNodeRef>
              </bpmn:lane>
              <bpmn:lane id="Lane_0sfi6ra" name="Finance">
                <bpmn:flowNodeRef>Task_065u6lo</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_17uu1uf</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_0o1adt8</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateCatchEvent_1t3ck6c</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ReceiveTask_1h4cizl</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>EndEvent_1h6y824</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_1xgk1v4</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_1i5i7pu</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_0c7ryf7</bpmn:flowNodeRef>
              </bpmn:lane>
              <bpmn:lane id="Lane_1g1yyc3" name="CEO">
                <bpmn:flowNodeRef>Task_1yxb835</bpmn:flowNodeRef>
              </bpmn:lane>
            </bpmn:laneSet>
            <bpmn:startEvent id="StartEvent_1" name="Order received">
              <bpmn:outgoing>SequenceFlow_0zda5jx</bpmn:outgoing>
              <bpmn:messageEventDefinition />
            </bpmn:startEvent>
            <bpmn:task id="Task_1ydvkkn" name="Check order">
              <bpmn:incoming>SequenceFlow_0zda5jx</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1eyrb38</bpmn:outgoing>
            </bpmn:task>
            <bpmn:sequenceFlow id="SequenceFlow_0zda5jx" sourceRef="StartEvent_1" targetRef="Task_1ydvkkn" />
            <bpmn:exclusiveGateway id="ExclusiveGateway_1c7ol8g" name="Greater than 10k?">
              <bpmn:incoming>SequenceFlow_1eyrb38</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1cu3i9f</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_16d7ejn</bpmn:outgoing>
            </bpmn:exclusiveGateway>
            <bpmn:sequenceFlow id="SequenceFlow_1eyrb38" sourceRef="Task_1ydvkkn" targetRef="ExclusiveGateway_1c7ol8g" />
            <bpmn:sequenceFlow id="SequenceFlow_1cu3i9f" name="No" sourceRef="ExclusiveGateway_1c7ol8g" targetRef="Task_1anf4b1" />
            <bpmn:sequenceFlow id="SequenceFlow_16d7ejn" name="Yes" sourceRef="ExclusiveGateway_1c7ol8g" targetRef="Task_0se57ht" />
            <bpmn:task id="Task_0se57ht" name="Get approval">
              <bpmn:incoming>SequenceFlow_16d7ejn</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0u388lk</bpmn:outgoing>
            </bpmn:task>
            <bpmn:sequenceFlow id="SequenceFlow_0u388lk" sourceRef="Task_0se57ht" targetRef="ExclusiveGateway_0hqcq5y" />
            <bpmn:manualTask id="Task_1anf4b1" name="Assign picker">
              <bpmn:incoming>SequenceFlow_1cu3i9f</bpmn:incoming>
              <bpmn:incoming>SequenceFlow_0ujoqli</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1wj3ufv</bpmn:outgoing>
            </bpmn:manualTask>
            <bpmn:intermediateCatchEvent id="IntermediateThrowEvent_1jg9g5a" name="Product available?">
              <bpmn:incoming>SequenceFlow_1wj3ufv</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_04dfqfo</bpmn:outgoing>
              <bpmn:conditionalEventDefinition>
                <bpmn:condition xsi:type="bpmn:tFormalExpression" />
              </bpmn:conditionalEventDefinition>
            </bpmn:intermediateCatchEvent>
            <bpmn:manualTask id="Task_0k2az84" name="Pick product">
              <bpmn:incoming>SequenceFlow_04dfqfo</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1d2jttr</bpmn:outgoing>
            </bpmn:manualTask>
            <bpmn:boundaryEvent id="BoundaryEvent_1b66u6z" attachedToRef="Task_0k2az84">
              <bpmn:compensateEventDefinition />
            </bpmn:boundaryEvent>
            <bpmn:sequenceFlow id="SequenceFlow_1wj3ufv" sourceRef="Task_1anf4b1" targetRef="IntermediateThrowEvent_1jg9g5a" />
            <bpmn:sequenceFlow id="SequenceFlow_04dfqfo" sourceRef="IntermediateThrowEvent_1jg9g5a" targetRef="Task_0k2az84" />
            <bpmn:sequenceFlow id="SequenceFlow_0ujoqli" sourceRef="ExclusiveGateway_029qami" targetRef="Task_1anf4b1" />
            <bpmn:parallelGateway id="ExclusiveGateway_0hqcq5y">
              <bpmn:incoming>SequenceFlow_0u388lk</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1vmbe2q</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_01p7tux</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_0uaoe37</bpmn:outgoing>
            </bpmn:parallelGateway>
            <bpmn:complexGateway id="ExclusiveGateway_029qami" name="2 of 3 approve">
              <bpmn:incoming>SequenceFlow_04vn9ek</bpmn:incoming>
              <bpmn:incoming>SequenceFlow_0y8py6x</bpmn:incoming>
              <bpmn:incoming>SequenceFlow_0cqxm2v</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0ujoqli</bpmn:outgoing>
            </bpmn:complexGateway>
            <bpmn:sequenceFlow id="SequenceFlow_1vmbe2q" sourceRef="ExclusiveGateway_0hqcq5y" targetRef="Task_0eir53l" />
            <bpmn:sequenceFlow id="SequenceFlow_01p7tux" sourceRef="ExclusiveGateway_0hqcq5y" targetRef="Task_065u6lo" />
            <bpmn:sequenceFlow id="SequenceFlow_0uaoe37" sourceRef="ExclusiveGateway_0hqcq5y" targetRef="Task_1yxb835" />
            <bpmn:sequenceFlow id="SequenceFlow_04vn9ek" sourceRef="Task_065u6lo" targetRef="ExclusiveGateway_029qami" />
            <bpmn:sequenceFlow id="SequenceFlow_0y8py6x" sourceRef="Task_0eir53l" targetRef="ExclusiveGateway_029qami" />
            <bpmn:sequenceFlow id="SequenceFlow_0cqxm2v" sourceRef="Task_1yxb835" targetRef="ExclusiveGateway_029qami" />
            <bpmn:userTask id="Task_0eir53l" name="Approve order">
              <bpmn:incoming>SequenceFlow_1vmbe2q</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0y8py6x</bpmn:outgoing>
            </bpmn:userTask>
            <bpmn:task id="Task_06oc8as" name="Order canceled" isForCompensation="true" />
            <bpmn:endEvent id="EndEvent_1av8h1g" name="Order process completed">
              <bpmn:incoming>SequenceFlow_0sbomd1</bpmn:incoming>
            </bpmn:endEvent>
            <bpmn:sequenceFlow id="SequenceFlow_0sbomd1" sourceRef="Task_0x1yj54" targetRef="EndEvent_1av8h1g" />
            <bpmn:sequenceFlow id="SequenceFlow_1d2jttr" sourceRef="Task_0k2az84" targetRef="ExclusiveGateway_1g79lt0" />
            <bpmn:parallelGateway id="ExclusiveGateway_1g79lt0">
              <bpmn:incoming>SequenceFlow_1d2jttr</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1atc62j</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_0vrb9tf</bpmn:outgoing>
            </bpmn:parallelGateway>
            <bpmn:sequenceFlow id="SequenceFlow_1atc62j" sourceRef="ExclusiveGateway_1g79lt0" targetRef="IntermediateThrowEvent_1ex2tql" />
            <bpmn:sequenceFlow id="SequenceFlow_0vrb9tf" sourceRef="ExclusiveGateway_1g79lt0" targetRef="Task_0x1yj54" />
            <bpmn:manualTask id="Task_0x1yj54" name="Shipping product">
              <bpmn:incoming>SequenceFlow_0vrb9tf</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0sbomd1</bpmn:outgoing>
            </bpmn:manualTask>
            <bpmn:intermediateCatchEvent id="IntermediateThrowEvent_0865w6t">
              <bpmn:outgoing>SequenceFlow_1kvxir8</bpmn:outgoing>
              <bpmn:signalEventDefinition />
            </bpmn:intermediateCatchEvent>
            <bpmn:sequenceFlow id="SequenceFlow_1kvxir8" sourceRef="IntermediateThrowEvent_0865w6t" targetRef="Task_03chpya" />
            <bpmn:endEvent id="IntermediateThrowEvent_1ex2tql" name="Signal to Sales and Finance">
              <bpmn:incoming>SequenceFlow_1atc62j</bpmn:incoming>
              <bpmn:signalEventDefinition />
            </bpmn:endEvent>
            <bpmn:sequenceFlow id="SequenceFlow_1sngvcu" sourceRef="IntermediateThrowEvent_0c7ryf7" targetRef="Task_1i5i7pu" />
            <bpmn:userTask id="Task_1yxb835" name="Approve order">
              <bpmn:incoming>SequenceFlow_0uaoe37</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0cqxm2v</bpmn:outgoing>
            </bpmn:userTask>
            <bpmn:userTask id="Task_065u6lo" name="Approve order">
              <bpmn:incoming>SequenceFlow_01p7tux</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_04vn9ek</bpmn:outgoing>
            </bpmn:userTask>
            <bpmn:exclusiveGateway id="ExclusiveGateway_17uu1uf">
              <bpmn:incoming>SequenceFlow_03s535t</bpmn:incoming>
              <bpmn:incoming>SequenceFlow_0e8531z</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0kr29kp</bpmn:outgoing>
            </bpmn:exclusiveGateway>
            <bpmn:task id="Task_0o1adt8" name="Send reminder">
              <bpmn:incoming>SequenceFlow_0j5fc9w</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0e8531z</bpmn:outgoing>
            </bpmn:task>
            <bpmn:intermediateCatchEvent id="IntermediateCatchEvent_1t3ck6c" name="2 weeks">
              <bpmn:incoming>SequenceFlow_1ixxigw</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0j5fc9w</bpmn:outgoing>
              <bpmn:timerEventDefinition />
            </bpmn:intermediateCatchEvent>
            <bpmn:receiveTask id="ReceiveTask_1h4cizl" name="Payment received">
              <bpmn:incoming>SequenceFlow_00vubr7</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_03s535t</bpmn:outgoing>
            </bpmn:receiveTask>
            <bpmn:sequenceFlow id="SequenceFlow_1ixxigw" sourceRef="ExclusiveGateway_1xgk1v4" targetRef="IntermediateCatchEvent_1t3ck6c" />
            <bpmn:sequenceFlow id="SequenceFlow_00vubr7" sourceRef="ExclusiveGateway_1xgk1v4" targetRef="ReceiveTask_1h4cizl" />
            <bpmn:sequenceFlow id="SequenceFlow_03s535t" sourceRef="ReceiveTask_1h4cizl" targetRef="ExclusiveGateway_17uu1uf" />
            <bpmn:sequenceFlow id="SequenceFlow_0e8531z" sourceRef="Task_0o1adt8" targetRef="ExclusiveGateway_17uu1uf" />
            <bpmn:sequenceFlow id="SequenceFlow_0j5fc9w" sourceRef="IntermediateCatchEvent_1t3ck6c" targetRef="Task_0o1adt8" />
            <bpmn:sequenceFlow id="SequenceFlow_0kr29kp" sourceRef="ExclusiveGateway_17uu1uf" targetRef="EndEvent_1h6y824" />
            <bpmn:endEvent id="EndEvent_1h6y824" name="Payment completed">
              <bpmn:incoming>SequenceFlow_0kr29kp</bpmn:incoming>
            </bpmn:endEvent>
            <bpmn:sequenceFlow id="SequenceFlow_1v1t8o4" sourceRef="Task_03chpya" targetRef="EndEvent_09mbo43" />
            <bpmn:endEvent id="EndEvent_09mbo43" name="Shipping confirmation sent">
              <bpmn:incoming>SequenceFlow_1v1t8o4</bpmn:incoming>
            </bpmn:endEvent>
            <bpmn:sendTask id="Task_03chpya" name="Send shipping confirmation">
              <bpmn:incoming>SequenceFlow_1kvxir8</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1v1t8o4</bpmn:outgoing>
            </bpmn:sendTask>
            <bpmn:eventBasedGateway id="ExclusiveGateway_1xgk1v4" name="Payment received?">
              <bpmn:incoming>SequenceFlow_1jpc5fh</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1ixxigw</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_00vubr7</bpmn:outgoing>
            </bpmn:eventBasedGateway>
            <bpmn:sequenceFlow id="SequenceFlow_1jpc5fh" sourceRef="Task_1i5i7pu" targetRef="ExclusiveGateway_1xgk1v4" />
            <bpmn:sendTask id="Task_1i5i7pu" name="Send invoice">
              <bpmn:incoming>SequenceFlow_1sngvcu</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1jpc5fh</bpmn:outgoing>
            </bpmn:sendTask>
            <bpmn:intermediateCatchEvent id="IntermediateThrowEvent_0c7ryf7">
              <bpmn:outgoing>SequenceFlow_1sngvcu</bpmn:outgoing>
              <bpmn:signalEventDefinition />
            </bpmn:intermediateCatchEvent>
            <bpmn:association id="Association_1jko10h" associationDirection="One" sourceRef="BoundaryEvent_1b66u6z" targetRef="Task_06oc8as" />
          </bpmn:process>
          <bpmndi:BPMNDiagram id="BPMNDiagram_1">
            <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_1rsvusk">
              <bpmndi:BPMNShape id="Participant_0t18keu_di" bpmnElement="Participant_0t18keu">
                <dc:Bounds x="88" y="128" width="2390" height="1226" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="StartEvent_01xs35b_di" bpmnElement="StartEvent_1">
                <dc:Bounds x="188" y="220" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="170" y="263" width="74" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="ManualTask_1kq8yct_di" bpmnElement="Task_1anf4b1">
                <dc:Bounds x="870" y="198" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1wj3ufv_di" bpmnElement="SequenceFlow_1wj3ufv">
                <di:waypoint x="970" y="238" />
                <di:waypoint x="1044" y="238" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="IntermediateCatchEvent_0zwdt7g_di" bpmnElement="IntermediateThrowEvent_1jg9g5a">
                <dc:Bounds x="1044" y="220" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1037" y="183" width="50" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_04dfqfo_di" bpmnElement="SequenceFlow_04dfqfo">
                <di:waypoint x="1080" y="238" />
                <di:waypoint x="1143" y="238" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="505" y="223" width="9" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ManualTask_1go72er_di" bpmnElement="Task_0k2az84">
                <dc:Bounds x="1143" y="198" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EndEvent_1av8h1g_di" bpmnElement="EndEvent_1av8h1g">
                <dc:Bounds x="1644" y="220" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1628" y="263" width="70" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="BoundaryEvent_16tt3ea_di" bpmnElement="BoundaryEvent_1b66u6z">
                <dc:Bounds x="1175" y="260" width="36" height="36" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Task_06oc8as_di" bpmnElement="Task_06oc8as">
                <dc:Bounds x="1212" y="322" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="Association_1jko10h_di" bpmnElement="Association_1jko10h">
                <di:waypoint x="1193" y="296" />
                <di:waypoint x="1193" y="362" />
                <di:waypoint x="1212" y="362" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0sbomd1_di" bpmnElement="SequenceFlow_0sbomd1">
                <di:waypoint x="1559" y="238" />
                <di:waypoint x="1644" y="238" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ManualTask_0hmmeew_di" bpmnElement="Task_0x1yj54">
                <dc:Bounds x="1459" y="198" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Lane_1jx5o3q_di" bpmnElement="Lane_1jx5o3q">
                <dc:Bounds x="118" y="128" width="2360" height="370" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Task_1ydvkkn_di" bpmnElement="Task_1ydvkkn">
                <dc:Bounds x="274" y="198" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0zda5jx_di" bpmnElement="SequenceFlow_0zda5jx">
                <di:waypoint x="224" y="238" />
                <di:waypoint x="274" y="238" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ExclusiveGateway_1c7ol8g_di" bpmnElement="ExclusiveGateway_1c7ol8g" isMarkerVisible="true">
                <dc:Bounds x="424" y="213" width="50" height="50" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="405" y="189" width="89" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1eyrb38_di" bpmnElement="SequenceFlow_1eyrb38">
                <di:waypoint x="374" y="238" />
                <di:waypoint x="424" y="238" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1cu3i9f_di" bpmnElement="SequenceFlow_1cu3i9f">
                <di:waypoint x="474" y="238" />
                <di:waypoint x="870" y="238" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="533" y="236" width="15" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="Task_0se57ht_di" bpmnElement="Task_0se57ht">
                <dc:Bounds x="504" y="308" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_16d7ejn_di" bpmnElement="SequenceFlow_16d7ejn">
                <di:waypoint x="449" y="263" />
                <di:waypoint x="449" y="348" />
                <di:waypoint x="504" y="348" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="455" y="303" width="18" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0u388lk_di" bpmnElement="SequenceFlow_0u388lk">
                <di:waypoint x="554" y="388" />
                <di:waypoint x="554" y="411" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ParallelGateway_0fy7v90_di" bpmnElement="ExclusiveGateway_0hqcq5y">
                <dc:Bounds x="529" y="411" width="50" height="50" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1vmbe2q_di" bpmnElement="SequenceFlow_1vmbe2q">
                <di:waypoint x="554" y="461" />
                <di:waypoint x="554" y="573" />
                <di:waypoint x="682" y="573" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_01p7tux_di" bpmnElement="SequenceFlow_01p7tux">
                <di:waypoint x="554" y="461" />
                <di:waypoint x="554" y="861" />
                <di:waypoint x="682" y="861" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0uaoe37_di" bpmnElement="SequenceFlow_0uaoe37">
                <di:waypoint x="554" y="461" />
                <di:waypoint x="554" y="1245" />
                <di:waypoint x="682" y="1245" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_04vn9ek_di" bpmnElement="SequenceFlow_04vn9ek">
                <di:waypoint x="782" y="861" />
                <di:waypoint x="920" y="861" />
                <di:waypoint x="920" y="461" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ComplexGateway_17z4wcm_di" bpmnElement="ExclusiveGateway_029qami">
                <dc:Bounds x="895" y="411" width="50" height="50" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="965" y="426" width="71" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0y8py6x_di" bpmnElement="SequenceFlow_0y8py6x">
                <di:waypoint x="782" y="573" />
                <di:waypoint x="920" y="573" />
                <di:waypoint x="920" y="461" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0ujoqli_di" bpmnElement="SequenceFlow_0ujoqli">
                <di:waypoint x="920" y="411" />
                <di:waypoint x="920" y="278" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0cqxm2v_di" bpmnElement="SequenceFlow_0cqxm2v">
                <di:waypoint x="782" y="1245" />
                <di:waypoint x="920" y="1245" />
                <di:waypoint x="920" y="461" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="Lane_1g1yyc3_di" bpmnElement="Lane_1g1yyc3">
                <dc:Bounds x="118" y="1144" width="2360" height="210" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Lane_0sfi6ra_di" bpmnElement="Lane_0sfi6ra">
                <dc:Bounds x="118" y="744" width="2360" height="400" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Lane_0e2krhp_di" bpmnElement="Lane_0e2krhp">
                <dc:Bounds x="118" y="498" width="2360" height="246" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="UserTask_0vqtdhp_di" bpmnElement="Task_0eir53l">
                <dc:Bounds x="682" y="533" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="UserTask_1il0h7a_di" bpmnElement="Task_065u6lo">
                <dc:Bounds x="682" y="821" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="UserTask_0xulu4h_di" bpmnElement="Task_1yxb835">
                <dc:Bounds x="682" y="1205" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1d2jttr_di" bpmnElement="SequenceFlow_1d2jttr">
                <di:waypoint x="1243" y="238" />
                <di:waypoint x="1306" y="238" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ParallelGateway_0c3be9p_di" bpmnElement="ExclusiveGateway_1g79lt0">
                <dc:Bounds x="1306" y="213" width="50" height="50" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1atc62j_di" bpmnElement="SequenceFlow_1atc62j">
                <di:waypoint x="1331" y="263" />
                <di:waypoint x="1331" y="318" />
                <di:waypoint x="1425" y="318" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0vrb9tf_di" bpmnElement="SequenceFlow_0vrb9tf">
                <di:waypoint x="1356" y="238" />
                <di:waypoint x="1459" y="238" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="IntermediateCatchEvent_0a0aph9_di" bpmnElement="IntermediateThrowEvent_0865w6t">
                <dc:Bounds x="1425" y="547" width="36" height="36" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1kvxir8_di" bpmnElement="SequenceFlow_1kvxir8">
                <di:waypoint x="1461" y="565" />
                <di:waypoint x="1533" y="565" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="IntermediateCatchEvent_04pmhko_di" bpmnElement="IntermediateThrowEvent_0c7ryf7">
                <dc:Bounds x="1425" y="785" width="36" height="36" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1sngvcu_di" bpmnElement="SequenceFlow_1sngvcu">
                <di:waypoint x="1461" y="803" />
                <di:waypoint x="1505" y="803" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="SendTask_0z8p8rb_di" bpmnElement="Task_03chpya">
                <dc:Bounds x="1533" y="525" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="SendTask_0uqsykk_di" bpmnElement="Task_1i5i7pu">
                <dc:Bounds x="1505" y="763" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EndEvent_1qltzry_di" bpmnElement="EndEvent_1h6y824">
                <dc:Bounds x="2234" y="838" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="2227" y="881" width="52" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EndEvent_0dx65aa_di" bpmnElement="IntermediateThrowEvent_1ex2tql">
                <dc:Bounds x="1425" y="300" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1407" y="343" width="74" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EventBasedGateway_0p7fnyf_di" bpmnElement="ExclusiveGateway_1xgk1v4">
                <dc:Bounds x="1686" y="778" width="50" height="50" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1688" y="748" width="48" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="IntermediateCatchEvent_1t3ck6c_di" bpmnElement="IntermediateCatchEvent_1t3ck6c">
                <dc:Bounds x="1832" y="785" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1830" y="828" width="41" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1ixxigw_di" bpmnElement="SequenceFlow_1ixxigw">
                <di:waypoint x="1736" y="803" />
                <di:waypoint x="1832" y="803" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ReceiveTask_1h4cizl_di" bpmnElement="ReceiveTask_1h4cizl">
                <dc:Bounds x="1800" y="871" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_00vubr7_di" bpmnElement="SequenceFlow_00vubr7">
                <di:waypoint x="1711" y="828" />
                <di:waypoint x="1711" y="911" />
                <di:waypoint x="1800" y="911" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="Task_0o1adt8_di" bpmnElement="Task_0o1adt8">
                <dc:Bounds x="1964" y="763" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0j5fc9w_di" bpmnElement="SequenceFlow_0j5fc9w">
                <di:waypoint x="1868" y="803" />
                <di:waypoint x="1964" y="803" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ExclusiveGateway_17uu1uf_di" bpmnElement="ExclusiveGateway_17uu1uf" isMarkerVisible="true">
                <dc:Bounds x="2121" y="831" width="50" height="50" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_03s535t_di" bpmnElement="SequenceFlow_03s535t">
                <di:waypoint x="1900" y="911" />
                <di:waypoint x="2146" y="911" />
                <di:waypoint x="2146" y="881" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0e8531z_di" bpmnElement="SequenceFlow_0e8531z">
                <di:waypoint x="2064" y="803" />
                <di:waypoint x="2146" y="803" />
                <di:waypoint x="2146" y="831" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="EndEvent_09mbo43_di" bpmnElement="EndEvent_09mbo43">
                <dc:Bounds x="1724" y="547" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1700" y="590" width="85" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0kr29kp_di" bpmnElement="SequenceFlow_0kr29kp">
                <di:waypoint x="2171" y="856" />
                <di:waypoint x="2234" y="856" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1v1t8o4_di" bpmnElement="SequenceFlow_1v1t8o4">
                <di:waypoint x="1633" y="565" />
                <di:waypoint x="1724" y="565" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1jpc5fh_di" bpmnElement="SequenceFlow_1jpc5fh">
                <di:waypoint x="1605" y="803" />
                <di:waypoint x="1686" y="803" />
              </bpmndi:BPMNEdge>
            </bpmndi:BPMNPlane>
          </bpmndi:BPMNDiagram>
        </bpmn:definitions>`
        let xml_de =`<?xml version="1.0" encoding="UTF-8"?>
        <bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="Definitions_0my7xzj" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="2.2.4">
          <bpmn:collaboration id="Collaboration_1rsvusk">
            <bpmn:participant id="Participant_0t18keu" name="PC Build GmbH" processRef="Process_1" />
          </bpmn:collaboration>
          <bpmn:process id="Process_1" isExecutable="true">
            <bpmn:laneSet id="LaneSet_0pxb912">
              <bpmn:lane id="Lane_1jx5o3q" name="Auftragsbearbeitung">
                <bpmn:flowNodeRef>StartEvent_1</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_1ydvkkn</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_1c7ol8g</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_0se57ht</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_1anf4b1</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_1jg9g5a</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_0k2az84</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_0hqcq5y</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_029qami</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_06oc8as</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>EndEvent_1av8h1g</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_1g79lt0</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_0x1yj54</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_1ex2tql</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>BoundaryEvent_1b66u6z</bpmn:flowNodeRef>
                <bpmn:childLaneSet id="LaneSet_0ab1ad7" />
              </bpmn:lane>
              <bpmn:lane id="Lane_0e2krhp" name="Vertrieb">
                <bpmn:flowNodeRef>Task_0eir53l</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_0865w6t</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>EndEvent_09mbo43</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_03chpya</bpmn:flowNodeRef>
              </bpmn:lane>
              <bpmn:lane id="Lane_0sfi6ra" name="Finance">
                <bpmn:flowNodeRef>Task_065u6lo</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_17uu1uf</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_0o1adt8</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateCatchEvent_1t3ck6c</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ReceiveTask_1h4cizl</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>EndEvent_1h6y824</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_1xgk1v4</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_1i5i7pu</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_0c7ryf7</bpmn:flowNodeRef>
              </bpmn:lane>
              <bpmn:lane id="Lane_1g1yyc3" name="CEO">
                <bpmn:flowNodeRef>Task_1yxb835</bpmn:flowNodeRef>
              </bpmn:lane>
            </bpmn:laneSet>
            <bpmn:startEvent id="StartEvent_1" name="Bestellung geht ein">
              <bpmn:outgoing>SequenceFlow_0zda5jx</bpmn:outgoing>
              <bpmn:messageEventDefinition />
            </bpmn:startEvent>
            <bpmn:task id="Task_1ydvkkn" name="Bestellung prüfen">
              <bpmn:incoming>SequenceFlow_0zda5jx</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1eyrb38</bpmn:outgoing>
            </bpmn:task>
            <bpmn:sequenceFlow id="SequenceFlow_0zda5jx" sourceRef="StartEvent_1" targetRef="Task_1ydvkkn" />
            <bpmn:exclusiveGateway id="ExclusiveGateway_1c7ol8g" name="größer 10k?">
              <bpmn:incoming>SequenceFlow_1eyrb38</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1cu3i9f</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_16d7ejn</bpmn:outgoing>
            </bpmn:exclusiveGateway>
            <bpmn:sequenceFlow id="SequenceFlow_1eyrb38" sourceRef="Task_1ydvkkn" targetRef="ExclusiveGateway_1c7ol8g" />
            <bpmn:sequenceFlow id="SequenceFlow_1cu3i9f" name="nein" sourceRef="ExclusiveGateway_1c7ol8g" targetRef="Task_1anf4b1" />
            <bpmn:sequenceFlow id="SequenceFlow_16d7ejn" name="Ja" sourceRef="ExclusiveGateway_1c7ol8g" targetRef="Task_0se57ht" />
            <bpmn:task id="Task_0se57ht" name="Freigeben lassen">
              <bpmn:incoming>SequenceFlow_16d7ejn</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0u388lk</bpmn:outgoing>
            </bpmn:task>
            <bpmn:sequenceFlow id="SequenceFlow_0u388lk" sourceRef="Task_0se57ht" targetRef="ExclusiveGateway_0hqcq5y" />
            <bpmn:manualTask id="Task_1anf4b1" name="Weise Picker zu">
              <bpmn:incoming>SequenceFlow_1cu3i9f</bpmn:incoming>
              <bpmn:incoming>SequenceFlow_0ujoqli</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1wj3ufv</bpmn:outgoing>
            </bpmn:manualTask>
            <bpmn:intermediateCatchEvent id="IntermediateThrowEvent_1jg9g5a" name="Produkt verfügbar?">
              <bpmn:incoming>SequenceFlow_1wj3ufv</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_04dfqfo</bpmn:outgoing>
              <bpmn:conditionalEventDefinition>
                <bpmn:condition xsi:type="bpmn:tFormalExpression" />
              </bpmn:conditionalEventDefinition>
            </bpmn:intermediateCatchEvent>
            <bpmn:manualTask id="Task_0k2az84" name="Entnehme Produkt">
              <bpmn:incoming>SequenceFlow_04dfqfo</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1d2jttr</bpmn:outgoing>
            </bpmn:manualTask>
            <bpmn:boundaryEvent id="BoundaryEvent_1b66u6z" attachedToRef="Task_0k2az84">
              <bpmn:compensateEventDefinition />
            </bpmn:boundaryEvent>
            <bpmn:sequenceFlow id="SequenceFlow_1wj3ufv" sourceRef="Task_1anf4b1" targetRef="IntermediateThrowEvent_1jg9g5a" />
            <bpmn:sequenceFlow id="SequenceFlow_04dfqfo" sourceRef="IntermediateThrowEvent_1jg9g5a" targetRef="Task_0k2az84" />
            <bpmn:sequenceFlow id="SequenceFlow_0ujoqli" sourceRef="ExclusiveGateway_029qami" targetRef="Task_1anf4b1" />
            <bpmn:parallelGateway id="ExclusiveGateway_0hqcq5y">
              <bpmn:incoming>SequenceFlow_0u388lk</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1vmbe2q</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_01p7tux</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_0uaoe37</bpmn:outgoing>
            </bpmn:parallelGateway>
            <bpmn:complexGateway id="ExclusiveGateway_029qami" name="2 von 3 geben frei">
              <bpmn:incoming>SequenceFlow_04vn9ek</bpmn:incoming>
              <bpmn:incoming>SequenceFlow_0y8py6x</bpmn:incoming>
              <bpmn:incoming>SequenceFlow_0cqxm2v</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0ujoqli</bpmn:outgoing>
            </bpmn:complexGateway>
            <bpmn:sequenceFlow id="SequenceFlow_1vmbe2q" sourceRef="ExclusiveGateway_0hqcq5y" targetRef="Task_0eir53l" />
            <bpmn:sequenceFlow id="SequenceFlow_01p7tux" sourceRef="ExclusiveGateway_0hqcq5y" targetRef="Task_065u6lo" />
            <bpmn:sequenceFlow id="SequenceFlow_0uaoe37" sourceRef="ExclusiveGateway_0hqcq5y" targetRef="Task_1yxb835" />
            <bpmn:sequenceFlow id="SequenceFlow_04vn9ek" sourceRef="Task_065u6lo" targetRef="ExclusiveGateway_029qami" />
            <bpmn:sequenceFlow id="SequenceFlow_0y8py6x" sourceRef="Task_0eir53l" targetRef="ExclusiveGateway_029qami" />
            <bpmn:sequenceFlow id="SequenceFlow_0cqxm2v" sourceRef="Task_1yxb835" targetRef="ExclusiveGateway_029qami" />
            <bpmn:userTask id="Task_0eir53l" name="Bestellung freigeben">
              <bpmn:incoming>SequenceFlow_1vmbe2q</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0y8py6x</bpmn:outgoing>
            </bpmn:userTask>
            <bpmn:task id="Task_06oc8as" name="Auftrag abgebrochen" isForCompensation="true" />
            <bpmn:endEvent id="EndEvent_1av8h1g" name="Bestellungsvorgang abgeschlossen">
              <bpmn:incoming>SequenceFlow_0sbomd1</bpmn:incoming>
            </bpmn:endEvent>
            <bpmn:sequenceFlow id="SequenceFlow_0sbomd1" sourceRef="Task_0x1yj54" targetRef="EndEvent_1av8h1g" />
            <bpmn:sequenceFlow id="SequenceFlow_1d2jttr" sourceRef="Task_0k2az84" targetRef="ExclusiveGateway_1g79lt0" />
            <bpmn:parallelGateway id="ExclusiveGateway_1g79lt0">
              <bpmn:incoming>SequenceFlow_1d2jttr</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1atc62j</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_0vrb9tf</bpmn:outgoing>
            </bpmn:parallelGateway>
            <bpmn:sequenceFlow id="SequenceFlow_1atc62j" sourceRef="ExclusiveGateway_1g79lt0" targetRef="IntermediateThrowEvent_1ex2tql" />
            <bpmn:sequenceFlow id="SequenceFlow_0vrb9tf" sourceRef="ExclusiveGateway_1g79lt0" targetRef="Task_0x1yj54" />
            <bpmn:manualTask id="Task_0x1yj54" name="Versende Produkt">
              <bpmn:incoming>SequenceFlow_0vrb9tf</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0sbomd1</bpmn:outgoing>
            </bpmn:manualTask>
            <bpmn:intermediateCatchEvent id="IntermediateThrowEvent_0865w6t">
              <bpmn:outgoing>SequenceFlow_1kvxir8</bpmn:outgoing>
              <bpmn:signalEventDefinition />
            </bpmn:intermediateCatchEvent>
            <bpmn:sequenceFlow id="SequenceFlow_1kvxir8" sourceRef="IntermediateThrowEvent_0865w6t" targetRef="Task_03chpya" />
            <bpmn:endEvent id="IntermediateThrowEvent_1ex2tql" name="Signal an Vertrieb und Finance">
              <bpmn:incoming>SequenceFlow_1atc62j</bpmn:incoming>
              <bpmn:signalEventDefinition />
            </bpmn:endEvent>
            <bpmn:sequenceFlow id="SequenceFlow_1sngvcu" sourceRef="IntermediateThrowEvent_0c7ryf7" targetRef="Task_1i5i7pu" />
            <bpmn:userTask id="Task_1yxb835" name="Bestellung Freigeben">
              <bpmn:incoming>SequenceFlow_0uaoe37</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0cqxm2v</bpmn:outgoing>
            </bpmn:userTask>
            <bpmn:userTask id="Task_065u6lo" name="Bestellung freigeben">
              <bpmn:incoming>SequenceFlow_01p7tux</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_04vn9ek</bpmn:outgoing>
            </bpmn:userTask>
            <bpmn:exclusiveGateway id="ExclusiveGateway_17uu1uf">
              <bpmn:incoming>SequenceFlow_03s535t</bpmn:incoming>
              <bpmn:incoming>SequenceFlow_0e8531z</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0kr29kp</bpmn:outgoing>
            </bpmn:exclusiveGateway>
            <bpmn:task id="Task_0o1adt8" name="Mahnung verschicken">
              <bpmn:incoming>SequenceFlow_0j5fc9w</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0e8531z</bpmn:outgoing>
            </bpmn:task>
            <bpmn:intermediateCatchEvent id="IntermediateCatchEvent_1t3ck6c" name="2 Wochen">
              <bpmn:incoming>SequenceFlow_1ixxigw</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0j5fc9w</bpmn:outgoing>
              <bpmn:timerEventDefinition />
            </bpmn:intermediateCatchEvent>
            <bpmn:receiveTask id="ReceiveTask_1h4cizl" name="Zahlung eingegangen">
              <bpmn:incoming>SequenceFlow_00vubr7</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_03s535t</bpmn:outgoing>
            </bpmn:receiveTask>
            <bpmn:sequenceFlow id="SequenceFlow_1ixxigw" sourceRef="ExclusiveGateway_1xgk1v4" targetRef="IntermediateCatchEvent_1t3ck6c" />
            <bpmn:sequenceFlow id="SequenceFlow_00vubr7" sourceRef="ExclusiveGateway_1xgk1v4" targetRef="ReceiveTask_1h4cizl" />
            <bpmn:sequenceFlow id="SequenceFlow_03s535t" sourceRef="ReceiveTask_1h4cizl" targetRef="ExclusiveGateway_17uu1uf" />
            <bpmn:sequenceFlow id="SequenceFlow_0e8531z" sourceRef="Task_0o1adt8" targetRef="ExclusiveGateway_17uu1uf" />
            <bpmn:sequenceFlow id="SequenceFlow_0j5fc9w" sourceRef="IntermediateCatchEvent_1t3ck6c" targetRef="Task_0o1adt8" />
            <bpmn:sequenceFlow id="SequenceFlow_0kr29kp" sourceRef="ExclusiveGateway_17uu1uf" targetRef="EndEvent_1h6y824" />
            <bpmn:endEvent id="EndEvent_1h6y824" name="Zahlung abgeschlossen">
              <bpmn:incoming>SequenceFlow_0kr29kp</bpmn:incoming>
            </bpmn:endEvent>
            <bpmn:sequenceFlow id="SequenceFlow_1v1t8o4" sourceRef="Task_03chpya" targetRef="EndEvent_09mbo43" />
            <bpmn:endEvent id="EndEvent_09mbo43" name="Versandbestätigung verschickt">
              <bpmn:incoming>SequenceFlow_1v1t8o4</bpmn:incoming>
            </bpmn:endEvent>
            <bpmn:sendTask id="Task_03chpya" name="Verschicke Versandbestätigung">
              <bpmn:incoming>SequenceFlow_1kvxir8</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1v1t8o4</bpmn:outgoing>
            </bpmn:sendTask>
            <bpmn:eventBasedGateway id="ExclusiveGateway_1xgk1v4" name="Zahlung eingegangen?">
              <bpmn:incoming>SequenceFlow_1jpc5fh</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1ixxigw</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_00vubr7</bpmn:outgoing>
            </bpmn:eventBasedGateway>
            <bpmn:sequenceFlow id="SequenceFlow_1jpc5fh" sourceRef="Task_1i5i7pu" targetRef="ExclusiveGateway_1xgk1v4" />
            <bpmn:sendTask id="Task_1i5i7pu" name="Verschicke Rechnung">
              <bpmn:incoming>SequenceFlow_1sngvcu</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1jpc5fh</bpmn:outgoing>
            </bpmn:sendTask>
            <bpmn:intermediateCatchEvent id="IntermediateThrowEvent_0c7ryf7">
              <bpmn:outgoing>SequenceFlow_1sngvcu</bpmn:outgoing>
              <bpmn:signalEventDefinition />
            </bpmn:intermediateCatchEvent>
            <bpmn:association id="Association_1jko10h" associationDirection="One" sourceRef="BoundaryEvent_1b66u6z" targetRef="Task_06oc8as" />
          </bpmn:process>
          <bpmndi:BPMNDiagram id="BPMNDiagram_1">
            <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_1rsvusk">
              <bpmndi:BPMNShape id="Participant_0t18keu_di" bpmnElement="Participant_0t18keu">
                <dc:Bounds x="88" y="128" width="2390" height="1226" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="StartEvent_01xs35b_di" bpmnElement="StartEvent_1">
                <dc:Bounds x="188" y="220" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="168" y="263" width="77" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="ManualTask_1kq8yct_di" bpmnElement="Task_1anf4b1">
                <dc:Bounds x="870" y="198" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1wj3ufv_di" bpmnElement="SequenceFlow_1wj3ufv">
                <di:waypoint x="970" y="238" />
                <di:waypoint x="1044" y="238" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="IntermediateCatchEvent_0zwdt7g_di" bpmnElement="IntermediateThrowEvent_1jg9g5a">
                <dc:Bounds x="1044" y="220" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1035" y="182.5" width="53" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_04dfqfo_di" bpmnElement="SequenceFlow_04dfqfo">
                <di:waypoint x="1080" y="238" />
                <di:waypoint x="1143" y="238" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="505" y="223" width="9" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ManualTask_1go72er_di" bpmnElement="Task_0k2az84">
                <dc:Bounds x="1143" y="198" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EndEvent_1av8h1g_di" bpmnElement="EndEvent_1av8h1g">
                <dc:Bounds x="1644" y="220" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1618" y="263" width="89" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="BoundaryEvent_16tt3ea_di" bpmnElement="BoundaryEvent_1b66u6z">
                <dc:Bounds x="1175" y="260" width="36" height="36" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Task_06oc8as_di" bpmnElement="Task_06oc8as">
                <dc:Bounds x="1212" y="322" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="Association_1jko10h_di" bpmnElement="Association_1jko10h">
                <di:waypoint x="1193" y="296" />
                <di:waypoint x="1193" y="362" />
                <di:waypoint x="1212" y="362" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0sbomd1_di" bpmnElement="SequenceFlow_0sbomd1">
                <di:waypoint x="1559" y="238" />
                <di:waypoint x="1644" y="238" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ManualTask_0hmmeew_di" bpmnElement="Task_0x1yj54">
                <dc:Bounds x="1459" y="198" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Lane_1jx5o3q_di" bpmnElement="Lane_1jx5o3q">
                <dc:Bounds x="118" y="128" width="2360" height="370" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Task_1ydvkkn_di" bpmnElement="Task_1ydvkkn">
                <dc:Bounds x="274" y="198" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0zda5jx_di" bpmnElement="SequenceFlow_0zda5jx">
                <di:waypoint x="224" y="238" />
                <di:waypoint x="274" y="238" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ExclusiveGateway_1c7ol8g_di" bpmnElement="ExclusiveGateway_1c7ol8g" isMarkerVisible="true">
                <dc:Bounds x="424" y="213" width="50" height="50" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="419" y="189" width="60" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1eyrb38_di" bpmnElement="SequenceFlow_1eyrb38">
                <di:waypoint x="374" y="238" />
                <di:waypoint x="424" y="238" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1cu3i9f_di" bpmnElement="SequenceFlow_1cu3i9f">
                <di:waypoint x="474" y="238" />
                <di:waypoint x="870" y="238" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="529" y="236" width="22" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="Task_0se57ht_di" bpmnElement="Task_0se57ht">
                <dc:Bounds x="504" y="308" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_16d7ejn_di" bpmnElement="SequenceFlow_16d7ejn">
                <di:waypoint x="449" y="263" />
                <di:waypoint x="449" y="348" />
                <di:waypoint x="504" y="348" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="458" y="303" width="12" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0u388lk_di" bpmnElement="SequenceFlow_0u388lk">
                <di:waypoint x="554" y="388" />
                <di:waypoint x="554" y="411" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ParallelGateway_0fy7v90_di" bpmnElement="ExclusiveGateway_0hqcq5y">
                <dc:Bounds x="529" y="411" width="50" height="50" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1vmbe2q_di" bpmnElement="SequenceFlow_1vmbe2q">
                <di:waypoint x="554" y="461" />
                <di:waypoint x="554" y="573" />
                <di:waypoint x="682" y="573" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_01p7tux_di" bpmnElement="SequenceFlow_01p7tux">
                <di:waypoint x="554" y="461" />
                <di:waypoint x="554" y="861" />
                <di:waypoint x="682" y="861" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0uaoe37_di" bpmnElement="SequenceFlow_0uaoe37">
                <di:waypoint x="554" y="461" />
                <di:waypoint x="554" y="1245" />
                <di:waypoint x="682" y="1245" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_04vn9ek_di" bpmnElement="SequenceFlow_04vn9ek">
                <di:waypoint x="782" y="861" />
                <di:waypoint x="920" y="861" />
                <di:waypoint x="920" y="461" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ComplexGateway_17z4wcm_di" bpmnElement="ExclusiveGateway_029qami">
                <dc:Bounds x="895" y="411" width="50" height="50" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="956" y="426" width="89" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0y8py6x_di" bpmnElement="SequenceFlow_0y8py6x">
                <di:waypoint x="782" y="573" />
                <di:waypoint x="920" y="573" />
                <di:waypoint x="920" y="461" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0ujoqli_di" bpmnElement="SequenceFlow_0ujoqli">
                <di:waypoint x="920" y="411" />
                <di:waypoint x="920" y="278" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0cqxm2v_di" bpmnElement="SequenceFlow_0cqxm2v">
                <di:waypoint x="782" y="1245" />
                <di:waypoint x="920" y="1245" />
                <di:waypoint x="920" y="461" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="Lane_1g1yyc3_di" bpmnElement="Lane_1g1yyc3">
                <dc:Bounds x="118" y="1144" width="2360" height="210" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Lane_0sfi6ra_di" bpmnElement="Lane_0sfi6ra">
                <dc:Bounds x="118" y="744" width="2360" height="400" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Lane_0e2krhp_di" bpmnElement="Lane_0e2krhp">
                <dc:Bounds x="118" y="498" width="2360" height="246" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="UserTask_0vqtdhp_di" bpmnElement="Task_0eir53l">
                <dc:Bounds x="682" y="533" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="UserTask_1il0h7a_di" bpmnElement="Task_065u6lo">
                <dc:Bounds x="682" y="821" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="UserTask_0xulu4h_di" bpmnElement="Task_1yxb835">
                <dc:Bounds x="682" y="1205" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1d2jttr_di" bpmnElement="SequenceFlow_1d2jttr">
                <di:waypoint x="1243" y="238" />
                <di:waypoint x="1306" y="238" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ParallelGateway_0c3be9p_di" bpmnElement="ExclusiveGateway_1g79lt0">
                <dc:Bounds x="1306" y="213" width="50" height="50" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1atc62j_di" bpmnElement="SequenceFlow_1atc62j">
                <di:waypoint x="1331" y="263" />
                <di:waypoint x="1331" y="318" />
                <di:waypoint x="1425" y="318" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0vrb9tf_di" bpmnElement="SequenceFlow_0vrb9tf">
                <di:waypoint x="1356" y="238" />
                <di:waypoint x="1459" y="238" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="IntermediateCatchEvent_0a0aph9_di" bpmnElement="IntermediateThrowEvent_0865w6t">
                <dc:Bounds x="1425" y="547" width="36" height="36" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1kvxir8_di" bpmnElement="SequenceFlow_1kvxir8">
                <di:waypoint x="1461" y="565" />
                <di:waypoint x="1533" y="565" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="IntermediateCatchEvent_04pmhko_di" bpmnElement="IntermediateThrowEvent_0c7ryf7">
                <dc:Bounds x="1425" y="785" width="36" height="36" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1sngvcu_di" bpmnElement="SequenceFlow_1sngvcu">
                <di:waypoint x="1461" y="803" />
                <di:waypoint x="1505" y="803" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="SendTask_0z8p8rb_di" bpmnElement="Task_03chpya">
                <dc:Bounds x="1533" y="525" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="SendTask_0uqsykk_di" bpmnElement="Task_1i5i7pu">
                <dc:Bounds x="1505" y="763" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EndEvent_1qltzry_di" bpmnElement="EndEvent_1h6y824">
                <dc:Bounds x="2234" y="838" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="2216" y="881" width="74" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EndEvent_0dx65aa_di" bpmnElement="IntermediateThrowEvent_1ex2tql">
                <dc:Bounds x="1425" y="300" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1414" y="343" width="59" height="40" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EventBasedGateway_0p7fnyf_di" bpmnElement="ExclusiveGateway_1xgk1v4">
                <dc:Bounds x="1686" y="778" width="50" height="50" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1676" y="748" width="71" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="IntermediateCatchEvent_1t3ck6c_di" bpmnElement="IntermediateCatchEvent_1t3ck6c">
                <dc:Bounds x="1832" y="785" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1825" y="828" width="50" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1ixxigw_di" bpmnElement="SequenceFlow_1ixxigw">
                <di:waypoint x="1736" y="803" />
                <di:waypoint x="1832" y="803" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ReceiveTask_1h4cizl_di" bpmnElement="ReceiveTask_1h4cizl">
                <dc:Bounds x="1800" y="871" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_00vubr7_di" bpmnElement="SequenceFlow_00vubr7">
                <di:waypoint x="1711" y="828" />
                <di:waypoint x="1711" y="911" />
                <di:waypoint x="1800" y="911" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="Task_0o1adt8_di" bpmnElement="Task_0o1adt8">
                <dc:Bounds x="1964" y="763" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0j5fc9w_di" bpmnElement="SequenceFlow_0j5fc9w">
                <di:waypoint x="1868" y="803" />
                <di:waypoint x="1964" y="803" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ExclusiveGateway_17uu1uf_di" bpmnElement="ExclusiveGateway_17uu1uf" isMarkerVisible="true">
                <dc:Bounds x="2121" y="831" width="50" height="50" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_03s535t_di" bpmnElement="SequenceFlow_03s535t">
                <di:waypoint x="1900" y="911" />
                <di:waypoint x="2146" y="911" />
                <di:waypoint x="2146" y="881" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0e8531z_di" bpmnElement="SequenceFlow_0e8531z">
                <di:waypoint x="2064" y="803" />
                <di:waypoint x="2146" y="803" />
                <di:waypoint x="2146" y="831" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="EndEvent_09mbo43_di" bpmnElement="EndEvent_09mbo43">
                <dc:Bounds x="1724" y="547" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1700" y="590" width="85" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0kr29kp_di" bpmnElement="SequenceFlow_0kr29kp">
                <di:waypoint x="2171" y="856" />
                <di:waypoint x="2234" y="856" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1v1t8o4_di" bpmnElement="SequenceFlow_1v1t8o4">
                <di:waypoint x="1633" y="565" />
                <di:waypoint x="1724" y="565" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1jpc5fh_di" bpmnElement="SequenceFlow_1jpc5fh">
                <di:waypoint x="1605" y="803" />
                <di:waypoint x="1686" y="803" />
              </bpmndi:BPMNEdge>
            </bpmndi:BPMNPlane>
          </bpmndi:BPMNDiagram>
        </bpmn:definitions>`
        let svg_en = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="82 122 2402 1238" version="1.1"><defs><marker id="sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker><marker id="association-end-white-black-5v4iwyretzr4jj9xc0n51hdao" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Participant_0t18keu" style="display: block;" transform="translate(88 128)"><g class="djs-visual"><rect x="0" y="0" width="2390" height="1226" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><polyline points="30,0 30,1226 " style="fill: none; stroke: black; stroke-width: 2px;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 1226)"><tspan x="570.65625" y="18.6">PC Build GmbH</tspan></text></g><rect x="0" y="0" width="2390" height="1226" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="2402" height="1238" class="djs-outline" style="fill: none;"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_1g1yyc3" style="display: block;" transform="translate(118 1144)"><g class="djs-visual"><rect x="0" y="0" width="2360" height="210" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 210)"><tspan x="91.8671875" y="18.6">CEO</tspan></text></g><rect x="0" y="0" width="2360" height="210" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="2372" height="222" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_0sfi6ra" style="display: block;" transform="translate(118 744)"><g class="djs-visual"><rect x="0" y="0" width="2360" height="400" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 400)"><tspan x="178.3984375" y="18.6">Finance</tspan></text></g><rect x="0" y="0" width="2360" height="400" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="2372" height="412" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_0e2krhp" style="display: block;" transform="translate(118 498)"><g class="djs-visual"><rect x="0" y="0" width="2360" height="246" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 246)"><tspan x="107.796875" y="18.6">Sales</tspan></text></g><rect x="0" y="0" width="2360" height="246" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="2372" height="258" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_1jx5o3q" style="display: block;" transform="translate(118 128)"><g class="djs-visual"><rect x="0" y="0" width="2360" height="370" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 370)"><tspan x="138.984375" y="18.6">Order processing</tspan></text></g><rect x="0" y="0" width="2360" height="370" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="2372" height="382" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1jpc5fh" style="display: block;"><g class="djs-visual"><path d="m  1605,803L1686,803 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="1605,803 1686,803 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1599" y="797" width="93" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1v1t8o4" style="display: block;"><g class="djs-visual"><path d="m  1633,565L1724,565 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="1633,565 1724,565 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1627" y="559" width="103" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0kr29kp" style="display: block;"><g class="djs-visual"><path d="m  2171,856L2234,856 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="2171,856 2234,856 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2165" y="850" width="75" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0j5fc9w" style="display: block;"><g class="djs-visual"><path d="m  1868,803L1964,803 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="1868,803 1964,803 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1862" y="797" width="108" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0e8531z" style="display: block;"><g class="djs-visual"><path d="m  2064,803L2146,803 L2146,831 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="2064,803 2146,803 2146,831 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2058" y="797" width="94" height="40" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_03s535t" style="display: block;"><g class="djs-visual"><path d="m  1900,911L2146,911 L2146,881 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="1900,911 2146,911 2146,881 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1894" y="875" width="258" height="42" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_00vubr7" style="display: block;"><g class="djs-visual"><path d="m  1711,828L1711,911 L1800,911 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="1711,828 1711,911 1800,911 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1705" y="822" width="101" height="95" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1ixxigw" style="display: block;"><g class="djs-visual"><path d="m  1736,803L1832,803 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="1736,803 1832,803 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1730" y="797" width="108" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1sngvcu" style="display: block;"><g class="djs-visual"><path d="m  1461,803L1505,803 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="1461,803 1505,803 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1455" y="797" width="56" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1kvxir8" style="display: block;"><g class="djs-visual"><path d="m  1461,565L1533,565 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="1461,565 1533,565 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1455" y="559" width="84" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0vrb9tf" style="display: block;"><g class="djs-visual"><path d="m  1356,238L1459,238 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="1356,238 1459,238 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1350" y="232" width="115" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1atc62j" style="display: block;"><g class="djs-visual"><path d="m  1331,263L1331,318 L1425,318 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="1331,263 1331,318 1425,318 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1325" y="257" width="106" height="67" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1d2jttr" style="display: block;"><g class="djs-visual"><path d="m  1243,238L1306,238 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="1243,238 1306,238 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1237" y="232" width="75" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0sbomd1" style="display: block;"><g class="djs-visual"><path d="m  1559,238L1644,238 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="1559,238 1644,238 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1553" y="232" width="97" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0cqxm2v" style="display: block;"><g class="djs-visual"><path d="m  782,1245L920,1245 L920,461 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="782,1245 920,1245 920,461 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="776" y="455" width="150" height="796" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0y8py6x" style="display: block;"><g class="djs-visual"><path d="m  782,573L920,573 L920,461 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="782,573 920,573 920,461 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="776" y="455" width="150" height="124" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_04vn9ek" style="display: block;"><g class="djs-visual"><path d="m  782,861L920,861 L920,461 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="782,861 920,861 920,461 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="776" y="455" width="150" height="412" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0uaoe37" style="display: block;"><g class="djs-visual"><path d="m  554,461L554,1245 L682,1245 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="554,461 554,1245 682,1245 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="548" y="455" width="140" height="796" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_01p7tux" style="display: block;"><g class="djs-visual"><path d="m  554,461L554,861 L682,861 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="554,461 554,861 682,861 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="548" y="455" width="140" height="412" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1vmbe2q" style="display: block;"><g class="djs-visual"><path d="m  554,461L554,573 L682,573 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="554,461 554,573 682,573 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="548" y="455" width="140" height="124" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0ujoqli" style="display: block;"><g class="djs-visual"><path d="m  920,411L920,278 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="920,411 920,278 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="914" y="272" width="12" height="145" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_04dfqfo" style="display: block;"><g class="djs-visual"><path d="m  1080,238L1143,238 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="1080,238 1143,238 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1074" y="232" width="75" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1wj3ufv" style="display: block;"><g class="djs-visual"><path d="m  970,238L1044,238 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="970,238 1044,238 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="964" y="232" width="86" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0u388lk" style="display: block;"><g class="djs-visual"><path d="m  554,388L554,411 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="554,388 554,411 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="548" y="382" width="12" height="35" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_16d7ejn" style="display: block;"><g class="djs-visual"><path d="m  449,263L449,348 L504,348 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="449,263 449,348 504,348 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="443" y="257" width="67" height="97" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1cu3i9f" style="display: block;"><g class="djs-visual"><path d="m  474,238L870,238 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="474,238 870,238 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="468" y="232" width="408" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1eyrb38" style="display: block;"><g class="djs-visual"><path d="m  374,238L424,238 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="374,238 424,238 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="368" y="232" width="62" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0zda5jx" style="display: block;"><g class="djs-visual"><path d="m  224,238L274,238 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="224,238 274,238 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="218" y="232" width="62" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_1" style="display: block;" transform="translate(188 220)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 8.459999999999999,11.34 l 0,12.6 l 18.900000000000002,0 l 0,-12.6 z l 9.450000000000001,5.4 l 9.450000000000001,-5.4" style="fill: white; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_1_label" style="display: block;" transform="translate(170 263)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Order received</tspan></text></g><rect x="0" y="0" width="74" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="86" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_1ydvkkn" style="display: block;" transform="translate(274 198)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="16.921875" y="43.599999999999994">Check order</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1c7ol8g" style="display: block;" transform="translate(424 213)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 16,15 7.42857142857143,9.714285714285715 -7.42857142857143,9.714285714285715 3.428571428571429,0 5.714285714285715,-7.464228571428572 5.714285714285715,7.464228571428572 3.428571428571429,0 -7.42857142857143,-9.714285714285715 7.42857142857143,-9.714285714285715 -3.428571428571429,0 -5.714285714285715,7.464228571428572 -5.714285714285715,-7.464228571428572 -3.428571428571429,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1c7ol8g_label" style="display: block;" transform="translate(405 189)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Greater than 10k?</tspan></text></g><rect x="0" y="0" width="89" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="101" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0se57ht" style="display: block;" transform="translate(504 308)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="15.6484375" y="43.599999999999994">Get approval</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_1anf4b1" style="display: block;" transform="translate(870 198)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="14.3203125" y="43.599999999999994">Assign picker</tspan></text><path d="m 17,15 c 0.234,-0.01 5.604,0.008 8.029,0.004 0.808,0 1.271,-0.172 1.417,-0.752 0.227,-0.898 -0.334,-1.314 -1.338,-1.316 -2.467,-0.01 -7.886,-0.004 -8.108,-0.004 -0.014,-0.079 0.016,-0.533 0,-0.61 0.195,-0.042 8.507,0.006 9.616,0.002 0.877,-0.007 1.35,-0.438 1.353,-1.208 0.003,-0.768 -0.479,-1.09 -1.35,-1.091 -2.968,-0.002 -9.619,-0.013 -9.619,-0.013 v -0.591 c 0,0 5.052,-0.016 7.225,-0.016 0.888,-0.002 1.354,-0.416 1.351,-1.193 -0.006,-0.761 -0.492,-1.196 -1.361,-1.196 -3.473,-0.005 -10.86,-0.003 -11.0829995,-0.003 -0.022,-0.047 -0.045,-0.094 -0.069,-0.139 0.3939995,-0.319 2.0409995,-1.626 2.4149995,-2.017 0.469,-0.4870005 0.519,-1.1650005 0.162,-1.6040005 -0.414,-0.511 -0.973,-0.5 -1.48,-0.236 -1.4609995,0.764 -6.5999995,3.6430005 -7.7329995,4.2710005 -0.9,0.499 -1.516,1.253 -1.882,2.19 -0.37000002,0.95 -0.17,2.01 -0.166,2.979 0.004,0.718 -0.27300002,1.345 -0.055,2.063 0.629,2.087 2.425,3.312 4.859,3.318 4.6179995,0.014 9.2379995,-0.139 13.8569995,-0.158 0.755,-0.004 1.171,-0.301 1.182,-1.033 0.012,-0.754 -0.423,-0.969 -1.183,-0.973 -1.778,-0.01 -5.824,-0.004 -6.04,-0.004 10e-4,-0.084 0.003,-0.586 10e-4,-0.67 z" style="fill: white; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_1jg9g5a" style="display: block;" transform="translate(1044 220)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="M 10.5,8.5 l 14.5,0 l 0,18 l -14.5,0 Z M 12.5,11.5 l 10.5,0 M 12.5,14.5 l 10.5,0 M 12.5,17.5 l 10.5,0 M 12.5,20.5 l 10.5,0 M 12.5,23.5 l 10.5,0 M 12.5,26.5 l 10.5,0 " style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_1jg9g5a_label" style="display: block;" transform="translate(1037 183)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="5.484375" y="9.899999999999999">Product </tspan><tspan x="0" y="23.099999999999998">available?</tspan></text></g><rect x="0" y="0" width="50" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0k2az84" style="display: block;" transform="translate(1143 198)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="16.65625" y="43.599999999999994">Pick product</tspan></text><path d="m 17,15 c 0.234,-0.01 5.604,0.008 8.029,0.004 0.808,0 1.271,-0.172 1.417,-0.752 0.227,-0.898 -0.334,-1.314 -1.338,-1.316 -2.467,-0.01 -7.886,-0.004 -8.108,-0.004 -0.014,-0.079 0.016,-0.533 0,-0.61 0.195,-0.042 8.507,0.006 9.616,0.002 0.877,-0.007 1.35,-0.438 1.353,-1.208 0.003,-0.768 -0.479,-1.09 -1.35,-1.091 -2.968,-0.002 -9.619,-0.013 -9.619,-0.013 v -0.591 c 0,0 5.052,-0.016 7.225,-0.016 0.888,-0.002 1.354,-0.416 1.351,-1.193 -0.006,-0.761 -0.492,-1.196 -1.361,-1.196 -3.473,-0.005 -10.86,-0.003 -11.0829995,-0.003 -0.022,-0.047 -0.045,-0.094 -0.069,-0.139 0.3939995,-0.319 2.0409995,-1.626 2.4149995,-2.017 0.469,-0.4870005 0.519,-1.1650005 0.162,-1.6040005 -0.414,-0.511 -0.973,-0.5 -1.48,-0.236 -1.4609995,0.764 -6.5999995,3.6430005 -7.7329995,4.2710005 -0.9,0.499 -1.516,1.253 -1.882,2.19 -0.37000002,0.95 -0.17,2.01 -0.166,2.979 0.004,0.718 -0.27300002,1.345 -0.055,2.063 0.629,2.087 2.425,3.312 4.859,3.318 4.6179995,0.014 9.2379995,-0.139 13.8569995,-0.158 0.755,-0.004 1.171,-0.301 1.182,-1.033 0.012,-0.754 -0.423,-0.969 -1.183,-0.973 -1.778,-0.01 -5.824,-0.004 -6.04,-0.004 10e-4,-0.084 0.003,-0.586 10e-4,-0.67 z" style="fill: white; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_0hqcq5y" style="display: block;" transform="translate(529 411)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 23,10 0,12.5 -12.5,0 0,5 12.5,0 0,12.5 5,0 0,-12.5 12.5,0 0,-5 -12.5,0 0,-12.5 -5,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_029qami" style="display: block;" transform="translate(895 411)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 23,13 0,7.116788321167883 -5.018248175182482,-5.018248175182482 -3.102189781021898,3.102189781021898 5.018248175182482,5.018248175182482 -7.116788321167883,0 0,4.37956204379562 7.116788321167883,0  -5.018248175182482,5.018248175182482 l 3.102189781021898,3.102189781021898 5.018248175182482,-5.018248175182482 0,7.116788321167883 4.37956204379562,0 0,-7.116788321167883 5.018248175182482,5.018248175182482 3.102189781021898,-3.102189781021898 -5.018248175182482,-5.018248175182482 7.116788321167883,0 0,-4.37956204379562 -7.116788321167883,0 5.018248175182482,-5.018248175182482 -3.102189781021898,-3.102189781021898 -5.018248175182482,5.018248175182482 0,-7.116788321167883 -4.37956204379562,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_029qami_label" style="display: block;" transform="translate(965 426)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">2 of 3 approve</tspan></text></g><rect x="0" y="0" width="71" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="83" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0eir53l" style="display: block;" transform="translate(682 533)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="11.9765625" y="43.599999999999994">Approve order</tspan></text><path d="m 15,12 c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5" style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 " style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z" style="fill: black; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_06oc8as" style="display: block;" transform="translate(1212 322)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="8.984375" y="43.599999999999994">Order canceled</tspan></text><path d="m 23,67 7,-5 0,10 z m 7.1,-0.3 6.9,-4.7 0,10 -6.9,-4.7 z" data-marker="compensation" style="fill: white; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1av8h1g" style="display: block;" transform="translate(1644 220)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1av8h1g_label" style="display: block;" transform="translate(1628 263)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Order process </tspan><tspan x="9.375" y="23.099999999999998">completed</tspan></text></g><rect x="0" y="0" width="70" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="82" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1g79lt0" style="display: block;" transform="translate(1306 213)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 23,10 0,12.5 -12.5,0 0,5 12.5,0 0,12.5 5,0 0,-12.5 12.5,0 0,-5 -12.5,0 0,-12.5 -5,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0x1yj54" style="display: block;" transform="translate(1459 198)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="26.6484375" y="36.4">Shipping </tspan><tspan x="29.65625" y="50.8">product</tspan></text><path d="m 17,15 c 0.234,-0.01 5.604,0.008 8.029,0.004 0.808,0 1.271,-0.172 1.417,-0.752 0.227,-0.898 -0.334,-1.314 -1.338,-1.316 -2.467,-0.01 -7.886,-0.004 -8.108,-0.004 -0.014,-0.079 0.016,-0.533 0,-0.61 0.195,-0.042 8.507,0.006 9.616,0.002 0.877,-0.007 1.35,-0.438 1.353,-1.208 0.003,-0.768 -0.479,-1.09 -1.35,-1.091 -2.968,-0.002 -9.619,-0.013 -9.619,-0.013 v -0.591 c 0,0 5.052,-0.016 7.225,-0.016 0.888,-0.002 1.354,-0.416 1.351,-1.193 -0.006,-0.761 -0.492,-1.196 -1.361,-1.196 -3.473,-0.005 -10.86,-0.003 -11.0829995,-0.003 -0.022,-0.047 -0.045,-0.094 -0.069,-0.139 0.3939995,-0.319 2.0409995,-1.626 2.4149995,-2.017 0.469,-0.4870005 0.519,-1.1650005 0.162,-1.6040005 -0.414,-0.511 -0.973,-0.5 -1.48,-0.236 -1.4609995,0.764 -6.5999995,3.6430005 -7.7329995,4.2710005 -0.9,0.499 -1.516,1.253 -1.882,2.19 -0.37000002,0.95 -0.17,2.01 -0.166,2.979 0.004,0.718 -0.27300002,1.345 -0.055,2.063 0.629,2.087 2.425,3.312 4.859,3.318 4.6179995,0.014 9.2379995,-0.139 13.8569995,-0.158 0.755,-0.004 1.171,-0.301 1.182,-1.033 0.012,-0.754 -0.423,-0.969 -1.183,-0.973 -1.778,-0.01 -5.824,-0.004 -6.04,-0.004 10e-4,-0.084 0.003,-0.586 10e-4,-0.67 z" style="fill: white; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_0865w6t" style="display: block;" transform="translate(1425 547)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="M 18,7.2 l 9,16.2 l -18,0 Z" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_1ex2tql" style="display: block;" transform="translate(1425 300)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/><path d="M 18,7.2 l 9,16.2 l -18,0 Z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_1ex2tql_label" style="display: block;" transform="translate(1407 343)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Signal to Sales </tspan><tspan x="6.328125" y="23.099999999999998">and Finance</tspan></text></g><rect x="0" y="0" width="74" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="86" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_1yxb835" style="display: block;" transform="translate(682 1205)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="11.9765625" y="43.599999999999994">Approve order</tspan></text><path d="m 15,12 c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5" style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 " style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z" style="fill: black; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_065u6lo" style="display: block;" transform="translate(682 821)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="11.9765625" y="43.599999999999994">Approve order</tspan></text><path d="m 15,12 c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5" style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 " style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z" style="fill: black; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_17uu1uf" style="display: block;" transform="translate(2121 831)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 16,15 7.42857142857143,9.714285714285715 -7.42857142857143,9.714285714285715 3.428571428571429,0 5.714285714285715,-7.464228571428572 5.714285714285715,7.464228571428572 3.428571428571429,0 -7.42857142857143,-9.714285714285715 7.42857142857143,-9.714285714285715 -3.428571428571429,0 -5.714285714285715,7.464228571428572 -5.714285714285715,-7.464228571428572 -3.428571428571429,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0o1adt8" style="display: block;" transform="translate(1964 763)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="10.25" y="43.599999999999994">Send reminder</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateCatchEvent_1t3ck6c" style="display: block;" transform="translate(1832 785)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><circle cx="18" cy="18" r="11" style="stroke: black; stroke-width: 2px; fill: white;"/><path d="M 18,18 l 2.25,-7.5 m -2.25,7.5 l 5.25,1.5 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(0,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(30,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(60,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(90,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(120,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(150,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(180,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(210,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(240,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(270,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(300,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(330,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateCatchEvent_1t3ck6c_label" style="display: block;" transform="translate(1830 828)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">2 weeks</tspan></text></g><rect x="0" y="0" width="41" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="53" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ReceiveTask_1h4cizl" style="display: block;" transform="translate(1800 871)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="25.9921875" y="36.4">Payment </tspan><tspan x="27.328125" y="50.8">received</tspan></text><path d="m 6.3,5.6000000000000005 l 0,12.6 l 18.900000000000002,0 l 0,-12.6 z l 9.450000000000001,5.4 l 9.450000000000001,-5.4" style="fill: white; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1h6y824" style="display: block;" transform="translate(2234 838)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1h6y824_label" style="display: block;" transform="translate(2227 881)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="3.34375" y="9.899999999999999">Payment </tspan><tspan x="0" y="23.099999999999998">completed</tspan></text></g><rect x="0" y="0" width="52" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="64" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_09mbo43" style="display: block;" transform="translate(1724 547)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_09mbo43_label" style="display: block;" transform="translate(1700 590)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="20.8046875" y="9.899999999999999">Shipping </tspan><tspan x="0" y="23.099999999999998">confirmation sent</tspan></text></g><rect x="0" y="0" width="85" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="97" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_03chpya" style="display: block;" transform="translate(1533 525)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="11.9765625" y="36.4">Send shipping </tspan><tspan x="17.3203125" y="50.8">confirmation</tspan></text><path d="m 5.984999999999999,4.997999999999999 l 0,14 l 21,0 l 0,-14 z l 10.5,6 l 10.5,-6" style="fill: black; stroke-width: 1px; stroke: white;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1xgk1v4" style="display: block;" transform="translate(1686 778)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><circle cx="25" cy="25" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><circle cx="25" cy="25" r="12" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="m 18,22 7.363636363636364,-4.909090909090909 7.363636363636364,4.909090909090909 -2.4545454545454546,9.818181818181818 -9.818181818181818,0 z" style="fill: none; stroke-width: 2px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1xgk1v4_label" style="display: block;" transform="translate(1688 748)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="1.8125" y="9.899999999999999">Payment </tspan><tspan x="0" y="23.099999999999998">received?</tspan></text></g><rect x="0" y="0" width="48" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="60" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_1i5i7pu" style="display: block;" transform="translate(1505 763)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="15.3828125" y="43.599999999999994">Send invoice</tspan></text><path d="m 5.984999999999999,4.997999999999999 l 0,14 l 21,0 l 0,-14 z l 10.5,6 l 10.5,-6" style="fill: black; stroke-width: 1px; stroke: white;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_0c7ryf7" style="display: block;" transform="translate(1425 785)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="M 18,7.2 l 9,16.2 l -18,0 Z" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="BoundaryEvent_1b66u6z" style="display: block;" transform="translate(1175 260)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 1;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="m 7.92,18 9,-6.5 0,13 z m 9.3,-0.4 8.7,-6.1 0,13 -8.7,-6.1 z" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="SequenceFlow_1cu3i9f_label" style="display: block;" transform="translate(533 236)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">No</tspan></text></g><rect x="0" y="0" width="15" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="27" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="SequenceFlow_16d7ejn_label" style="display: block;" transform="translate(455 303)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Yes</tspan></text></g><rect x="0" y="0" width="18" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="30" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Association_1jko10h" style="display: block;"><g class="djs-visual"><polyline points="1193,296 1193,362 1212,362 " style="fill: none; stroke: black; stroke-width: 2px; stroke-dasharray: 0.5, 5; stroke-linecap: round; stroke-linejoin: round; marker-end: url('#association-end-white-black-5v4iwyretzr4jj9xc0n51hdao');"/></g><polyline points="1193,296 1193,362 1212,362 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1187" y="290" width="31" height="78" class="djs-outline" style="fill: none;"/></g></g></g></g></svg>`
        let svg_de =`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="82 122 2402 1238" version="1.1"><defs><marker id="sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker><marker id="association-end-white-black-3ilri4kd1cyopr75qyhoyy7dp" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Participant_0t18keu" style="display: block;" transform="translate(88 128)"><g class="djs-visual"><rect x="0" y="0" width="2390" height="1226" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><polyline points="30,0 30,1226 " style="fill: none; stroke: black; stroke-width: 2px;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 1226)"><tspan x="570.65625" y="18.6">PC Build GmbH</tspan></text></g><rect x="0" y="0" width="2390" height="1226" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="2402" height="1238" class="djs-outline" style="fill: none;"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_1g1yyc3" style="display: block;" transform="translate(118 1144)"><g class="djs-visual"><rect x="0" y="0" width="2360" height="210" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 210)"><tspan x="91.8671875" y="18.6">CEO</tspan></text></g><rect x="0" y="0" width="2360" height="210" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="2372" height="222" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_0sfi6ra" style="display: block;" transform="translate(118 744)"><g class="djs-visual"><rect x="0" y="0" width="2360" height="400" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 400)"><tspan x="178.3984375" y="18.6">Finance</tspan></text></g><rect x="0" y="0" width="2360" height="400" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="2372" height="412" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_0e2krhp" style="display: block;" transform="translate(118 498)"><g class="djs-visual"><rect x="0" y="0" width="2360" height="246" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 246)"><tspan x="102.4609375" y="18.6">Vertrieb</tspan></text></g><rect x="0" y="0" width="2360" height="246" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="2372" height="258" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_1jx5o3q" style="display: block;" transform="translate(118 128)"><g class="djs-visual"><rect x="0" y="0" width="2360" height="370" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 370)"><tspan x="131.359375" y="18.6">Auftragsbearbeitung</tspan></text></g><rect x="0" y="0" width="2360" height="370" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="2372" height="382" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1jpc5fh" style="display: block;"><g class="djs-visual"><path d="m  1605,803L1686,803 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="1605,803 1686,803 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1599" y="797" width="93" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1v1t8o4" style="display: block;"><g class="djs-visual"><path d="m  1633,565L1724,565 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="1633,565 1724,565 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1627" y="559" width="103" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0kr29kp" style="display: block;"><g class="djs-visual"><path d="m  2171,856L2234,856 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="2171,856 2234,856 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2165" y="850" width="75" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0j5fc9w" style="display: block;"><g class="djs-visual"><path d="m  1868,803L1964,803 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="1868,803 1964,803 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1862" y="797" width="108" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0e8531z" style="display: block;"><g class="djs-visual"><path d="m  2064,803L2146,803 L2146,831 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="2064,803 2146,803 2146,831 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2058" y="797" width="94" height="40" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_03s535t" style="display: block;"><g class="djs-visual"><path d="m  1900,911L2146,911 L2146,881 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="1900,911 2146,911 2146,881 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1894" y="875" width="258" height="42" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_00vubr7" style="display: block;"><g class="djs-visual"><path d="m  1711,828L1711,911 L1800,911 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="1711,828 1711,911 1800,911 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1705" y="822" width="101" height="95" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1ixxigw" style="display: block;"><g class="djs-visual"><path d="m  1736,803L1832,803 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="1736,803 1832,803 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1730" y="797" width="108" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1sngvcu" style="display: block;"><g class="djs-visual"><path d="m  1461,803L1505,803 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="1461,803 1505,803 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1455" y="797" width="56" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1kvxir8" style="display: block;"><g class="djs-visual"><path d="m  1461,565L1533,565 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="1461,565 1533,565 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1455" y="559" width="84" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0vrb9tf" style="display: block;"><g class="djs-visual"><path d="m  1356,238L1459,238 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="1356,238 1459,238 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1350" y="232" width="115" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1atc62j" style="display: block;"><g class="djs-visual"><path d="m  1331,263L1331,318 L1425,318 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="1331,263 1331,318 1425,318 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1325" y="257" width="106" height="67" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1d2jttr" style="display: block;"><g class="djs-visual"><path d="m  1243,238L1306,238 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="1243,238 1306,238 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1237" y="232" width="75" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0sbomd1" style="display: block;"><g class="djs-visual"><path d="m  1559,238L1644,238 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="1559,238 1644,238 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1553" y="232" width="97" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0cqxm2v" style="display: block;"><g class="djs-visual"><path d="m  782,1245L920,1245 L920,461 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="782,1245 920,1245 920,461 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="776" y="455" width="150" height="796" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0y8py6x" style="display: block;"><g class="djs-visual"><path d="m  782,573L920,573 L920,461 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="782,573 920,573 920,461 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="776" y="455" width="150" height="124" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_04vn9ek" style="display: block;"><g class="djs-visual"><path d="m  782,861L920,861 L920,461 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="782,861 920,861 920,461 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="776" y="455" width="150" height="412" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0uaoe37" style="display: block;"><g class="djs-visual"><path d="m  554,461L554,1245 L682,1245 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="554,461 554,1245 682,1245 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="548" y="455" width="140" height="796" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_01p7tux" style="display: block;"><g class="djs-visual"><path d="m  554,461L554,861 L682,861 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="554,461 554,861 682,861 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="548" y="455" width="140" height="412" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1vmbe2q" style="display: block;"><g class="djs-visual"><path d="m  554,461L554,573 L682,573 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="554,461 554,573 682,573 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="548" y="455" width="140" height="124" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0ujoqli" style="display: block;"><g class="djs-visual"><path d="m  920,411L920,278 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="920,411 920,278 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="914" y="272" width="12" height="145" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_04dfqfo" style="display: block;"><g class="djs-visual"><path d="m  1080,238L1143,238 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="1080,238 1143,238 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1074" y="232" width="75" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1wj3ufv" style="display: block;"><g class="djs-visual"><path d="m  970,238L1044,238 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="970,238 1044,238 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="964" y="232" width="86" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0u388lk" style="display: block;"><g class="djs-visual"><path d="m  554,388L554,411 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="554,388 554,411 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="548" y="382" width="12" height="35" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_16d7ejn" style="display: block;"><g class="djs-visual"><path d="m  449,263L449,348 L504,348 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="449,263 449,348 504,348 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="443" y="257" width="67" height="97" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1cu3i9f" style="display: block;"><g class="djs-visual"><path d="m  474,238L870,238 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="474,238 870,238 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="468" y="232" width="408" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1eyrb38" style="display: block;"><g class="djs-visual"><path d="m  374,238L424,238 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="374,238 424,238 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="368" y="232" width="62" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0zda5jx" style="display: block;"><g class="djs-visual"><path d="m  224,238L274,238 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="224,238 274,238 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="218" y="232" width="62" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_1" style="display: block;" transform="translate(188 220)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 8.459999999999999,11.34 l 0,12.6 l 18.900000000000002,0 l 0,-12.6 z l 9.450000000000001,5.4 l 9.450000000000001,-5.4" style="fill: white; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_1_label" style="display: block;" transform="translate(168 263)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Bestellung geht </tspan><tspan x="30.90625" y="23.099999999999998">ein</tspan></text></g><rect x="0" y="0" width="77" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="89" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_1ydvkkn" style="display: block;" transform="translate(274 198)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="21.984375" y="36.4">Bestellung </tspan><tspan x="32.9921875" y="50.8">prüfen</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1c7ol8g" style="display: block;" transform="translate(424 213)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 16,15 7.42857142857143,9.714285714285715 -7.42857142857143,9.714285714285715 3.428571428571429,0 5.714285714285715,-7.464228571428572 5.714285714285715,7.464228571428572 3.428571428571429,0 -7.42857142857143,-9.714285714285715 7.42857142857143,-9.714285714285715 -3.428571428571429,0 -5.714285714285715,7.464228571428572 -5.714285714285715,-7.464228571428572 -3.428571428571429,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1c7ol8g_label" style="display: block;" transform="translate(419 189)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">größer 10k?</tspan></text></g><rect x="0" y="0" width="60" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="72" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0se57ht" style="display: block;" transform="translate(504 308)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="22.984375" y="36.4">Freigeben </tspan><tspan x="32.65625" y="50.8">lassen</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_1anf4b1" style="display: block;" transform="translate(870 198)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="7.5" y="43.599999999999994">Weise Picker zu</tspan></text><path d="m 17,15 c 0.234,-0.01 5.604,0.008 8.029,0.004 0.808,0 1.271,-0.172 1.417,-0.752 0.227,-0.898 -0.334,-1.314 -1.338,-1.316 -2.467,-0.01 -7.886,-0.004 -8.108,-0.004 -0.014,-0.079 0.016,-0.533 0,-0.61 0.195,-0.042 8.507,0.006 9.616,0.002 0.877,-0.007 1.35,-0.438 1.353,-1.208 0.003,-0.768 -0.479,-1.09 -1.35,-1.091 -2.968,-0.002 -9.619,-0.013 -9.619,-0.013 v -0.591 c 0,0 5.052,-0.016 7.225,-0.016 0.888,-0.002 1.354,-0.416 1.351,-1.193 -0.006,-0.761 -0.492,-1.196 -1.361,-1.196 -3.473,-0.005 -10.86,-0.003 -11.0829995,-0.003 -0.022,-0.047 -0.045,-0.094 -0.069,-0.139 0.3939995,-0.319 2.0409995,-1.626 2.4149995,-2.017 0.469,-0.4870005 0.519,-1.1650005 0.162,-1.6040005 -0.414,-0.511 -0.973,-0.5 -1.48,-0.236 -1.4609995,0.764 -6.5999995,3.6430005 -7.7329995,4.2710005 -0.9,0.499 -1.516,1.253 -1.882,2.19 -0.37000002,0.95 -0.17,2.01 -0.166,2.979 0.004,0.718 -0.27300002,1.345 -0.055,2.063 0.629,2.087 2.425,3.312 4.859,3.318 4.6179995,0.014 9.2379995,-0.139 13.8569995,-0.158 0.755,-0.004 1.171,-0.301 1.182,-1.033 0.012,-0.754 -0.423,-0.969 -1.183,-0.973 -1.778,-0.01 -5.824,-0.004 -6.04,-0.004 10e-4,-0.084 0.003,-0.586 10e-4,-0.67 z" style="fill: white; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_1jg9g5a" style="display: block;" transform="translate(1044 220)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="M 10.5,8.5 l 14.5,0 l 0,18 l -14.5,0 Z M 12.5,11.5 l 10.5,0 M 12.5,14.5 l 10.5,0 M 12.5,17.5 l 10.5,0 M 12.5,20.5 l 10.5,0 M 12.5,23.5 l 10.5,0 M 12.5,26.5 l 10.5,0 " style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_1jg9g5a_label" style="display: block;" transform="translate(1035 183)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="6.609375" y="9.899999999999999">Produkt </tspan><tspan x="0" y="23.099999999999998">verfügbar?</tspan></text></g><rect x="0" y="0" width="53" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="65" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0k2az84" style="display: block;" transform="translate(1143 198)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="22.390625" y="36.4">Entnehme </tspan><tspan x="28.9921875" y="50.8">Produkt</tspan></text><path d="m 17,15 c 0.234,-0.01 5.604,0.008 8.029,0.004 0.808,0 1.271,-0.172 1.417,-0.752 0.227,-0.898 -0.334,-1.314 -1.338,-1.316 -2.467,-0.01 -7.886,-0.004 -8.108,-0.004 -0.014,-0.079 0.016,-0.533 0,-0.61 0.195,-0.042 8.507,0.006 9.616,0.002 0.877,-0.007 1.35,-0.438 1.353,-1.208 0.003,-0.768 -0.479,-1.09 -1.35,-1.091 -2.968,-0.002 -9.619,-0.013 -9.619,-0.013 v -0.591 c 0,0 5.052,-0.016 7.225,-0.016 0.888,-0.002 1.354,-0.416 1.351,-1.193 -0.006,-0.761 -0.492,-1.196 -1.361,-1.196 -3.473,-0.005 -10.86,-0.003 -11.0829995,-0.003 -0.022,-0.047 -0.045,-0.094 -0.069,-0.139 0.3939995,-0.319 2.0409995,-1.626 2.4149995,-2.017 0.469,-0.4870005 0.519,-1.1650005 0.162,-1.6040005 -0.414,-0.511 -0.973,-0.5 -1.48,-0.236 -1.4609995,0.764 -6.5999995,3.6430005 -7.7329995,4.2710005 -0.9,0.499 -1.516,1.253 -1.882,2.19 -0.37000002,0.95 -0.17,2.01 -0.166,2.979 0.004,0.718 -0.27300002,1.345 -0.055,2.063 0.629,2.087 2.425,3.312 4.859,3.318 4.6179995,0.014 9.2379995,-0.139 13.8569995,-0.158 0.755,-0.004 1.171,-0.301 1.182,-1.033 0.012,-0.754 -0.423,-0.969 -1.183,-0.973 -1.778,-0.01 -5.824,-0.004 -6.04,-0.004 10e-4,-0.084 0.003,-0.586 10e-4,-0.67 z" style="fill: white; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_0hqcq5y" style="display: block;" transform="translate(529 411)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 23,10 0,12.5 -12.5,0 0,5 12.5,0 0,12.5 5,0 0,-12.5 12.5,0 0,-5 -12.5,0 0,-12.5 -5,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_029qami" style="display: block;" transform="translate(895 411)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 23,13 0,7.116788321167883 -5.018248175182482,-5.018248175182482 -3.102189781021898,3.102189781021898 5.018248175182482,5.018248175182482 -7.116788321167883,0 0,4.37956204379562 7.116788321167883,0  -5.018248175182482,5.018248175182482 l 3.102189781021898,3.102189781021898 5.018248175182482,-5.018248175182482 0,7.116788321167883 4.37956204379562,0 0,-7.116788321167883 5.018248175182482,5.018248175182482 3.102189781021898,-3.102189781021898 -5.018248175182482,-5.018248175182482 7.116788321167883,0 0,-4.37956204379562 -7.116788321167883,0 5.018248175182482,-5.018248175182482 -3.102189781021898,-3.102189781021898 -5.018248175182482,5.018248175182482 0,-7.116788321167883 -4.37956204379562,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_029qami_label" style="display: block;" transform="translate(956 426)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">2 von 3 geben frei</tspan></text></g><rect x="0" y="0" width="89" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="101" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0eir53l" style="display: block;" transform="translate(682 533)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="21.984375" y="36.4">Bestellung </tspan><tspan x="25.3828125" y="50.8">freigeben</tspan></text><path d="m 15,12 c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5" style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 " style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z" style="fill: black; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_06oc8as" style="display: block;" transform="translate(1212 322)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="31.0546875" y="36.4">Auftrag </tspan><tspan x="14.9765625" y="50.8">abgebrochen</tspan></text><path d="m 23,67 7,-5 0,10 z m 7.1,-0.3 6.9,-4.7 0,10 -6.9,-4.7 z" data-marker="compensation" style="fill: white; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1av8h1g" style="display: block;" transform="translate(1644 220)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1av8h1g_label" style="display: block;" transform="translate(1618 263)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="2.1484375" y="9.899999999999999">Bestellungsvorga</tspan><tspan x="0" y="23.099999999999998">ng abgeschlossen</tspan></text></g><rect x="0" y="0" width="89" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="101" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1g79lt0" style="display: block;" transform="translate(1306 213)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 23,10 0,12.5 -12.5,0 0,5 12.5,0 0,12.5 5,0 0,-12.5 12.5,0 0,-5 -12.5,0 0,-12.5 -5,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0x1yj54" style="display: block;" transform="translate(1459 198)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="24.78125" y="36.4">Versende </tspan><tspan x="28.9921875" y="50.8">Produkt</tspan></text><path d="m 17,15 c 0.234,-0.01 5.604,0.008 8.029,0.004 0.808,0 1.271,-0.172 1.417,-0.752 0.227,-0.898 -0.334,-1.314 -1.338,-1.316 -2.467,-0.01 -7.886,-0.004 -8.108,-0.004 -0.014,-0.079 0.016,-0.533 0,-0.61 0.195,-0.042 8.507,0.006 9.616,0.002 0.877,-0.007 1.35,-0.438 1.353,-1.208 0.003,-0.768 -0.479,-1.09 -1.35,-1.091 -2.968,-0.002 -9.619,-0.013 -9.619,-0.013 v -0.591 c 0,0 5.052,-0.016 7.225,-0.016 0.888,-0.002 1.354,-0.416 1.351,-1.193 -0.006,-0.761 -0.492,-1.196 -1.361,-1.196 -3.473,-0.005 -10.86,-0.003 -11.0829995,-0.003 -0.022,-0.047 -0.045,-0.094 -0.069,-0.139 0.3939995,-0.319 2.0409995,-1.626 2.4149995,-2.017 0.469,-0.4870005 0.519,-1.1650005 0.162,-1.6040005 -0.414,-0.511 -0.973,-0.5 -1.48,-0.236 -1.4609995,0.764 -6.5999995,3.6430005 -7.7329995,4.2710005 -0.9,0.499 -1.516,1.253 -1.882,2.19 -0.37000002,0.95 -0.17,2.01 -0.166,2.979 0.004,0.718 -0.27300002,1.345 -0.055,2.063 0.629,2.087 2.425,3.312 4.859,3.318 4.6179995,0.014 9.2379995,-0.139 13.8569995,-0.158 0.755,-0.004 1.171,-0.301 1.182,-1.033 0.012,-0.754 -0.423,-0.969 -1.183,-0.973 -1.778,-0.01 -5.824,-0.004 -6.04,-0.004 10e-4,-0.084 0.003,-0.586 10e-4,-0.67 z" style="fill: white; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_0865w6t" style="display: block;" transform="translate(1425 547)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="M 18,7.2 l 9,16.2 l -18,0 Z" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_1ex2tql" style="display: block;" transform="translate(1425 300)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/><path d="M 18,7.2 l 9,16.2 l -18,0 Z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_1ex2tql_label" style="display: block;" transform="translate(1414 343)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="6.328125" y="9.899999999999999">Signal an </tspan><tspan x="0" y="23.099999999999998">Vertrieb und </tspan><tspan x="9.6953125" y="36.3">Finance</tspan></text></g><rect x="0" y="0" width="59" height="40" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="71" height="52" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_1yxb835" style="display: block;" transform="translate(682 1205)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="21.984375" y="36.4">Bestellung </tspan><tspan x="22.984375" y="50.8">Freigeben</tspan></text><path d="m 15,12 c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5" style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 " style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z" style="fill: black; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_065u6lo" style="display: block;" transform="translate(682 821)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="21.984375" y="36.4">Bestellung </tspan><tspan x="25.3828125" y="50.8">freigeben</tspan></text><path d="m 15,12 c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5" style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 " style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z" style="fill: black; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_17uu1uf" style="display: block;" transform="translate(2121 831)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 16,15 7.42857142857143,9.714285714285715 -7.42857142857143,9.714285714285715 3.428571428571429,0 5.714285714285715,-7.464228571428572 5.714285714285715,7.464228571428572 3.428571428571429,0 -7.42857142857143,-9.714285714285715 7.42857142857143,-9.714285714285715 -3.428571428571429,0 -5.714285714285715,7.464228571428572 -5.714285714285715,-7.464228571428572 -3.428571428571429,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0o1adt8" style="display: block;" transform="translate(1964 763)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="24.984375" y="36.4">Mahnung </tspan><tspan x="18.71875" y="50.8">verschicken</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateCatchEvent_1t3ck6c" style="display: block;" transform="translate(1832 785)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><circle cx="18" cy="18" r="11" style="stroke: black; stroke-width: 2px; fill: white;"/><path d="M 18,18 l 2.25,-7.5 m -2.25,7.5 l 5.25,1.5 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(0,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(30,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(60,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(90,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(120,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(150,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(180,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(210,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(240,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(270,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(300,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(330,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateCatchEvent_1t3ck6c_label" style="display: block;" transform="translate(1825 828)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">2 Wochen</tspan></text></g><rect x="0" y="0" width="50" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ReceiveTask_1h4cizl" style="display: block;" transform="translate(1800 871)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="28.3203125" y="36.4">Zahlung </tspan><tspan x="15.3046875" y="50.8">eingegangen</tspan></text><path d="m 6.3,5.6000000000000005 l 0,12.6 l 18.900000000000002,0 l 0,-12.6 z l 9.450000000000001,5.4 l 9.450000000000001,-5.4" style="fill: white; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1h6y824" style="display: block;" transform="translate(2234 838)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1h6y824_label" style="display: block;" transform="translate(2216 881)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="16.8125" y="9.899999999999999">Zahlung </tspan><tspan x="0" y="23.099999999999998">abgeschlossen</tspan></text></g><rect x="0" y="0" width="74" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="86" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_09mbo43" style="display: block;" transform="translate(1724 547)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_09mbo43_label" style="display: block;" transform="translate(1700 590)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Versandbestätigu</tspan><tspan x="9.6796875" y="23.099999999999998">ng verschickt</tspan></text></g><rect x="0" y="0" width="85" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="97" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_03chpya" style="display: block;" transform="translate(1533 525)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="21.125" y="29.200000000000003">Verschicke </tspan><tspan x="10.703125" y="43.6">Versandbestäti</tspan><tspan x="36.65625" y="58">gung</tspan></text><path d="m 5.984999999999999,4.997999999999999 l 0,14 l 21,0 l 0,-14 z l 10.5,6 l 10.5,-6" style="fill: black; stroke-width: 1px; stroke: white;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1xgk1v4" style="display: block;" transform="translate(1686 778)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><circle cx="25" cy="25" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><circle cx="25" cy="25" r="12" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="m 18,22 7.363636363636364,-4.909090909090909 7.363636363636364,4.909090909090909 -2.4545454545454546,9.818181818181818 -9.818181818181818,0 z" style="fill: none; stroke-width: 2px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1xgk1v4_label" style="display: block;" transform="translate(1676 748)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="14.9921875" y="9.899999999999999">Zahlung </tspan><tspan x="0" y="23.099999999999998">eingegangen?</tspan></text></g><rect x="0" y="0" width="71" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="83" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_1i5i7pu" style="display: block;" transform="translate(1505 763)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="21.125" y="36.4">Verschicke </tspan><tspan x="22.6484375" y="50.8">Rechnung</tspan></text><path d="m 5.984999999999999,4.997999999999999 l 0,14 l 21,0 l 0,-14 z l 10.5,6 l 10.5,-6" style="fill: black; stroke-width: 1px; stroke: white;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_0c7ryf7" style="display: block;" transform="translate(1425 785)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="M 18,7.2 l 9,16.2 l -18,0 Z" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="BoundaryEvent_1b66u6z" style="display: block;" transform="translate(1175 260)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 1;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="m 7.92,18 9,-6.5 0,13 z m 9.3,-0.4 8.7,-6.1 0,13 -8.7,-6.1 z" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="SequenceFlow_1cu3i9f_label" style="display: block;" transform="translate(529 236)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">nein</tspan></text></g><rect x="0" y="0" width="22" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="34" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="SequenceFlow_16d7ejn_label" style="display: block;" transform="translate(458 303)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Ja</tspan></text></g><rect x="0" y="0" width="12" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="24" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Association_1jko10h" style="display: block;"><g class="djs-visual"><polyline points="1193,296 1193,362 1212,362 " style="fill: none; stroke: black; stroke-width: 2px; stroke-dasharray: 0.5, 5; stroke-linecap: round; stroke-linejoin: round; marker-end: url('#association-end-white-black-3ilri4kd1cyopr75qyhoyy7dp');"/></g><polyline points="1193,296 1193,362 1212,362 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1187" y="290" width="31" height="78" class="djs-outline" style="fill: none;"/></g></g></g></g></svg>`

        super (xml_de,xml_en,svg_de, svg_en)

    }
}

