import { Abstract_Modell } from "../Abstract_Modell"

export class Level3_Modell_7 extends Abstract_Modell{

    
    constructor(){
        let xml_en =`<?xml version="1.0" encoding="UTF-8"?>
        <bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="Definitions_0my7xzj" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="2.2.4">
          <bpmn:collaboration id="Collaboration_1rsvusk">
            <bpmn:participant id="Participant_0t18keu" name="PC Build GmbH" processRef="Process_1" />
          </bpmn:collaboration>
          <bpmn:process id="Process_1" isExecutable="true">
            <bpmn:laneSet id="LaneSet_0pxb912">
              <bpmn:lane id="Lane_0e2krhp" name="Sales">
                <bpmn:flowNodeRef>Task_0eir53l</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_0865w6t</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_03chpya</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>EndEvent_1h6y824</bpmn:flowNodeRef>
              </bpmn:lane>
              <bpmn:lane id="Lane_1jx5o3q" name="Order processing">
                <bpmn:flowNodeRef>Task_1ydvkkn</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_0se57ht</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_1anf4b1</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_0k2az84</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_0hqcq5y</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_06oc8as</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_1g79lt0</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_0x1yj54</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>StartEvent_1</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_1c7ol8g</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_1jg9g5a</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_029qami</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>EndEvent_1av8h1g</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_1ex2tql</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>BoundaryEvent_1b66u6z</bpmn:flowNodeRef>
                <bpmn:childLaneSet id="LaneSet_0ab1ad7" />
              </bpmn:lane>
              <bpmn:lane id="Lane_0sfi6ra" name="Finance">
                <bpmn:flowNodeRef>Task_065u6lo</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_0c7ryf7</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_1i5i7pu</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_0o1adt8</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_17uu1uf</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ReceiveTask_0lqgtch</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_1vtuh3e</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ReceiveTask_06648vq</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_12oam0i</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_1xgk1v4</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateCatchEvent_1t3ck6c</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>EndEvent_09mbo43</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateCatchEvent_19yuybj</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_1wp3aa4</bpmn:flowNodeRef>
              </bpmn:lane>
              <bpmn:lane id="Lane_1g1yyc3" name="CEO">
                <bpmn:flowNodeRef>Task_1yxb835</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_0co2ik3</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_0j64vk4</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_11bn98m</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_02llg33</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>EndEvent_1j1n6ih</bpmn:flowNodeRef>
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
            <bpmn:exclusiveGateway id="ExclusiveGateway_1c7ol8g" name="Greater than 10k?">
              <bpmn:incoming>SequenceFlow_1eyrb38</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1cu3i9f</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_16d7ejn</bpmn:outgoing>
            </bpmn:exclusiveGateway>
            <bpmn:task id="Task_0se57ht" name="Get approval">
              <bpmn:incoming>SequenceFlow_16d7ejn</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0u388lk</bpmn:outgoing>
            </bpmn:task>
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
            <bpmn:userTask id="Task_0eir53l" name="Approve order">
              <bpmn:incoming>SequenceFlow_1vmbe2q</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0y8py6x</bpmn:outgoing>
            </bpmn:userTask>
            <bpmn:task id="Task_06oc8as" name="Order canceled" isForCompensation="true" />
            <bpmn:endEvent id="EndEvent_1av8h1g" name="Order process completed">
              <bpmn:incoming>SequenceFlow_0sbomd1</bpmn:incoming>
            </bpmn:endEvent>
            <bpmn:parallelGateway id="ExclusiveGateway_1g79lt0">
              <bpmn:incoming>SequenceFlow_1d2jttr</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1atc62j</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_0vrb9tf</bpmn:outgoing>
            </bpmn:parallelGateway>
            <bpmn:manualTask id="Task_0x1yj54" name="Shipping product">
              <bpmn:incoming>SequenceFlow_0vrb9tf</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0sbomd1</bpmn:outgoing>
            </bpmn:manualTask>
            <bpmn:intermediateCatchEvent id="IntermediateThrowEvent_0865w6t">
              <bpmn:outgoing>SequenceFlow_1kvxir8</bpmn:outgoing>
              <bpmn:signalEventDefinition />
            </bpmn:intermediateCatchEvent>
            <bpmn:endEvent id="IntermediateThrowEvent_1ex2tql" name="Signal to Sales and Finance">
              <bpmn:incoming>SequenceFlow_1atc62j</bpmn:incoming>
              <bpmn:signalEventDefinition />
            </bpmn:endEvent>
            <bpmn:sendTask id="Task_03chpya" name="Send shipping confirmation">
              <bpmn:incoming>SequenceFlow_1kvxir8</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0zlivxk</bpmn:outgoing>
            </bpmn:sendTask>
            <bpmn:endEvent id="EndEvent_1h6y824" name="Shipping confirmation sent">
              <bpmn:incoming>SequenceFlow_0zlivxk</bpmn:incoming>
            </bpmn:endEvent>
            <bpmn:userTask id="Task_065u6lo" name="Approve order">
              <bpmn:incoming>SequenceFlow_01p7tux</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_04vn9ek</bpmn:outgoing>
            </bpmn:userTask>
            <bpmn:userTask id="Task_1yxb835" name="Approve order">
              <bpmn:incoming>SequenceFlow_0uaoe37</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0cqxm2v</bpmn:outgoing>
            </bpmn:userTask>
            <bpmn:eventBasedGateway id="ExclusiveGateway_1xgk1v4" name="Payment received?">
              <bpmn:incoming>SequenceFlow_0xv29bu</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1ixxigw</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_0sk99e6</bpmn:outgoing>
            </bpmn:eventBasedGateway>
            <bpmn:intermediateCatchEvent id="IntermediateThrowEvent_0c7ryf7">
              <bpmn:outgoing>SequenceFlow_1sngvcu</bpmn:outgoing>
              <bpmn:signalEventDefinition />
            </bpmn:intermediateCatchEvent>
            <bpmn:sendTask id="Task_1i5i7pu" name="Send invoice">
              <bpmn:incoming>SequenceFlow_1sngvcu</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0xv29bu</bpmn:outgoing>
            </bpmn:sendTask>
            <bpmn:intermediateCatchEvent id="IntermediateCatchEvent_1t3ck6c" name="2 weeks">
              <bpmn:incoming>SequenceFlow_1ixxigw</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0j5fc9w</bpmn:outgoing>
              <bpmn:timerEventDefinition />
            </bpmn:intermediateCatchEvent>
            <bpmn:task id="Task_0o1adt8" name="Send reminder">
              <bpmn:incoming>SequenceFlow_0j5fc9w</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0m3xa9e</bpmn:outgoing>
            </bpmn:task>
            <bpmn:exclusiveGateway id="ExclusiveGateway_17uu1uf">
              <bpmn:incoming>SequenceFlow_1oa21sv</bpmn:incoming>
              <bpmn:incoming>SequenceFlow_0w1vlfw</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1q3ae3c</bpmn:outgoing>
            </bpmn:exclusiveGateway>
            <bpmn:endEvent id="EndEvent_09mbo43" name="Payment completed">
              <bpmn:incoming>SequenceFlow_1q3ae3c</bpmn:incoming>
            </bpmn:endEvent>
            <bpmn:receiveTask id="ReceiveTask_0lqgtch" name="Payment received">
              <bpmn:incoming>SequenceFlow_0sk99e6</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1oa21sv</bpmn:outgoing>
            </bpmn:receiveTask>
            <bpmn:eventBasedGateway id="ExclusiveGateway_1vtuh3e">
              <bpmn:incoming>SequenceFlow_0m3xa9e</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0bnvc0y</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_0snk47z</bpmn:outgoing>
            </bpmn:eventBasedGateway>
            <bpmn:intermediateCatchEvent id="IntermediateCatchEvent_19yuybj" name="1 week">
              <bpmn:incoming>SequenceFlow_0bnvc0y</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1d16zov</bpmn:outgoing>
              <bpmn:timerEventDefinition />
            </bpmn:intermediateCatchEvent>
            <bpmn:receiveTask id="ReceiveTask_06648vq" name="Payment received">
              <bpmn:incoming>SequenceFlow_0snk47z</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0w1vlfw</bpmn:outgoing>
            </bpmn:receiveTask>
            <bpmn:task id="Task_12oam0i" name="Escalate to boss">
              <bpmn:incoming>SequenceFlow_1d16zov</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1s0polm</bpmn:outgoing>
            </bpmn:task>
            <bpmn:intermediateThrowEvent id="IntermediateThrowEvent_1wp3aa4" name="Escalation to boss">
              <bpmn:incoming>SequenceFlow_1s0polm</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0wf39d1</bpmn:outgoing>
              <bpmn:escalationEventDefinition />
            </bpmn:intermediateThrowEvent>
            <bpmn:task id="Task_0co2ik3" name="Notify a lawyer">
              <bpmn:incoming>SequenceFlow_0wf39d1</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_11f0t27</bpmn:outgoing>
            </bpmn:task>
            <bpmn:boundaryEvent id="BoundaryEvent_1b66u6z" attachedToRef="Task_0k2az84">
              <bpmn:compensateEventDefinition />
            </bpmn:boundaryEvent>
            <bpmn:sequenceFlow id="SequenceFlow_1kvxir8" sourceRef="IntermediateThrowEvent_0865w6t" targetRef="Task_03chpya" />
            <bpmn:sequenceFlow id="SequenceFlow_0vrb9tf" sourceRef="ExclusiveGateway_1g79lt0" targetRef="Task_0x1yj54" />
            <bpmn:sequenceFlow id="SequenceFlow_1atc62j" sourceRef="ExclusiveGateway_1g79lt0" targetRef="IntermediateThrowEvent_1ex2tql" />
            <bpmn:sequenceFlow id="SequenceFlow_1d2jttr" sourceRef="Task_0k2az84" targetRef="ExclusiveGateway_1g79lt0" />
            <bpmn:sequenceFlow id="SequenceFlow_0sbomd1" sourceRef="Task_0x1yj54" targetRef="EndEvent_1av8h1g" />
            <bpmn:sequenceFlow id="SequenceFlow_0cqxm2v" sourceRef="Task_1yxb835" targetRef="ExclusiveGateway_029qami" />
            <bpmn:sequenceFlow id="SequenceFlow_0y8py6x" sourceRef="Task_0eir53l" targetRef="ExclusiveGateway_029qami" />
            <bpmn:sequenceFlow id="SequenceFlow_04vn9ek" sourceRef="Task_065u6lo" targetRef="ExclusiveGateway_029qami" />
            <bpmn:sequenceFlow id="SequenceFlow_0uaoe37" sourceRef="ExclusiveGateway_0hqcq5y" targetRef="Task_1yxb835" />
            <bpmn:sequenceFlow id="SequenceFlow_01p7tux" sourceRef="ExclusiveGateway_0hqcq5y" targetRef="Task_065u6lo" />
            <bpmn:sequenceFlow id="SequenceFlow_1vmbe2q" sourceRef="ExclusiveGateway_0hqcq5y" targetRef="Task_0eir53l" />
            <bpmn:sequenceFlow id="SequenceFlow_0ujoqli" sourceRef="ExclusiveGateway_029qami" targetRef="Task_1anf4b1" />
            <bpmn:sequenceFlow id="SequenceFlow_04dfqfo" sourceRef="IntermediateThrowEvent_1jg9g5a" targetRef="Task_0k2az84" />
            <bpmn:sequenceFlow id="SequenceFlow_1wj3ufv" sourceRef="Task_1anf4b1" targetRef="IntermediateThrowEvent_1jg9g5a" />
            <bpmn:sequenceFlow id="SequenceFlow_0u388lk" sourceRef="Task_0se57ht" targetRef="ExclusiveGateway_0hqcq5y" />
            <bpmn:sequenceFlow id="SequenceFlow_16d7ejn" name="Yes" sourceRef="ExclusiveGateway_1c7ol8g" targetRef="Task_0se57ht" />
            <bpmn:sequenceFlow id="SequenceFlow_1cu3i9f" name="No" sourceRef="ExclusiveGateway_1c7ol8g" targetRef="Task_1anf4b1" />
            <bpmn:sequenceFlow id="SequenceFlow_1eyrb38" sourceRef="Task_1ydvkkn" targetRef="ExclusiveGateway_1c7ol8g" />
            <bpmn:sequenceFlow id="SequenceFlow_0zda5jx" sourceRef="StartEvent_1" targetRef="Task_1ydvkkn" />
            <bpmn:sequenceFlow id="SequenceFlow_0zlivxk" sourceRef="Task_03chpya" targetRef="EndEvent_1h6y824" />
            <bpmn:sequenceFlow id="SequenceFlow_0xv29bu" sourceRef="Task_1i5i7pu" targetRef="ExclusiveGateway_1xgk1v4" />
            <bpmn:sequenceFlow id="SequenceFlow_1ixxigw" sourceRef="ExclusiveGateway_1xgk1v4" targetRef="IntermediateCatchEvent_1t3ck6c" />
            <bpmn:sequenceFlow id="SequenceFlow_0sk99e6" sourceRef="ExclusiveGateway_1xgk1v4" targetRef="ReceiveTask_0lqgtch" />
            <bpmn:sequenceFlow id="SequenceFlow_1sngvcu" sourceRef="IntermediateThrowEvent_0c7ryf7" targetRef="Task_1i5i7pu" />
            <bpmn:sequenceFlow id="SequenceFlow_0j5fc9w" sourceRef="IntermediateCatchEvent_1t3ck6c" targetRef="Task_0o1adt8" />
            <bpmn:sequenceFlow id="SequenceFlow_0m3xa9e" sourceRef="Task_0o1adt8" targetRef="ExclusiveGateway_1vtuh3e" />
            <bpmn:sequenceFlow id="SequenceFlow_1oa21sv" sourceRef="ReceiveTask_0lqgtch" targetRef="ExclusiveGateway_17uu1uf" />
            <bpmn:sequenceFlow id="SequenceFlow_0w1vlfw" sourceRef="ReceiveTask_06648vq" targetRef="ExclusiveGateway_17uu1uf" />
            <bpmn:sequenceFlow id="SequenceFlow_1q3ae3c" sourceRef="ExclusiveGateway_17uu1uf" targetRef="EndEvent_09mbo43" />
            <bpmn:sequenceFlow id="SequenceFlow_0bnvc0y" sourceRef="ExclusiveGateway_1vtuh3e" targetRef="IntermediateCatchEvent_19yuybj" />
            <bpmn:sequenceFlow id="SequenceFlow_0snk47z" sourceRef="ExclusiveGateway_1vtuh3e" targetRef="ReceiveTask_06648vq" />
            <bpmn:sequenceFlow id="SequenceFlow_1d16zov" sourceRef="IntermediateCatchEvent_19yuybj" targetRef="Task_12oam0i" />
            <bpmn:sequenceFlow id="SequenceFlow_1s0polm" sourceRef="Task_12oam0i" targetRef="IntermediateThrowEvent_1wp3aa4" />
            <bpmn:sequenceFlow id="SequenceFlow_0wf39d1" sourceRef="IntermediateThrowEvent_1wp3aa4" targetRef="Task_0co2ik3" />
            <bpmn:sequenceFlow id="SequenceFlow_11f0t27" sourceRef="Task_0co2ik3" targetRef="IntermediateThrowEvent_0j64vk4" />
            <bpmn:intermediateThrowEvent id="IntermediateThrowEvent_0j64vk4">
              <bpmn:incoming>SequenceFlow_11f0t27</bpmn:incoming>
              <bpmn:linkEventDefinition />
            </bpmn:intermediateThrowEvent>
            <bpmn:intermediateCatchEvent id="IntermediateThrowEvent_11bn98m">
              <bpmn:outgoing>SequenceFlow_1x3o8n5</bpmn:outgoing>
              <bpmn:linkEventDefinition />
            </bpmn:intermediateCatchEvent>
            <bpmn:manualTask id="Task_02llg33" name="Call a debt collection agency">
              <bpmn:incoming>SequenceFlow_1x3o8n5</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_17ab3ot</bpmn:outgoing>
            </bpmn:manualTask>
            <bpmn:endEvent id="EndEvent_1j1n6ih" name="Debt collection agency called">
              <bpmn:incoming>SequenceFlow_17ab3ot</bpmn:incoming>
            </bpmn:endEvent>
            <bpmn:sequenceFlow id="SequenceFlow_1x3o8n5" sourceRef="IntermediateThrowEvent_11bn98m" targetRef="Task_02llg33" />
            <bpmn:sequenceFlow id="SequenceFlow_17ab3ot" sourceRef="Task_02llg33" targetRef="EndEvent_1j1n6ih" />
            <bpmn:association id="Association_1jko10h" associationDirection="One" sourceRef="BoundaryEvent_1b66u6z" targetRef="Task_06oc8as" />
          </bpmn:process>
          <bpmndi:BPMNDiagram id="BPMNDiagram_1">
            <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_1rsvusk">
              <bpmndi:BPMNShape id="Participant_0t18keu_di" bpmnElement="Participant_0t18keu">
                <dc:Bounds x="88" y="113" width="2717" height="1283" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="StartEvent_01xs35b_di" bpmnElement="StartEvent_1">
                <dc:Bounds x="188" y="205" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="170" y="248" width="74" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="ManualTask_1kq8yct_di" bpmnElement="Task_1anf4b1">
                <dc:Bounds x="870" y="183" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1wj3ufv_di" bpmnElement="SequenceFlow_1wj3ufv">
                <di:waypoint x="970" y="223" />
                <di:waypoint x="1044" y="223" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="IntermediateCatchEvent_0zwdt7g_di" bpmnElement="IntermediateThrowEvent_1jg9g5a">
                <dc:Bounds x="1044" y="205" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1037" y="168" width="50" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_04dfqfo_di" bpmnElement="SequenceFlow_04dfqfo">
                <di:waypoint x="1080" y="223" />
                <di:waypoint x="1143" y="223" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="505" y="223" width="9" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ManualTask_1go72er_di" bpmnElement="Task_0k2az84">
                <dc:Bounds x="1143" y="183" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EndEvent_1av8h1g_di" bpmnElement="EndEvent_1av8h1g">
                <dc:Bounds x="1644" y="205" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1628" y="248" width="70" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="BoundaryEvent_16tt3ea_di" bpmnElement="BoundaryEvent_1b66u6z">
                <dc:Bounds x="1175" y="245" width="36" height="36" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Task_06oc8as_di" bpmnElement="Task_06oc8as">
                <dc:Bounds x="1212" y="307" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="Association_1jko10h_di" bpmnElement="Association_1jko10h">
                <di:waypoint x="1193" y="281" />
                <di:waypoint x="1193" y="347" />
                <di:waypoint x="1212" y="347" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0sbomd1_di" bpmnElement="SequenceFlow_0sbomd1">
                <di:waypoint x="1559" y="223" />
                <di:waypoint x="1644" y="223" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ManualTask_0hmmeew_di" bpmnElement="Task_0x1yj54">
                <dc:Bounds x="1459" y="183" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Lane_1jx5o3q_di" bpmnElement="Lane_1jx5o3q">
                <dc:Bounds x="118" y="113" width="2687" height="370" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Task_1ydvkkn_di" bpmnElement="Task_1ydvkkn">
                <dc:Bounds x="274" y="183" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0zda5jx_di" bpmnElement="SequenceFlow_0zda5jx">
                <di:waypoint x="224" y="223" />
                <di:waypoint x="274" y="223" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ExclusiveGateway_1c7ol8g_di" bpmnElement="ExclusiveGateway_1c7ol8g" isMarkerVisible="true">
                <dc:Bounds x="424" y="198" width="50" height="50" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="405" y="174" width="89" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1eyrb38_di" bpmnElement="SequenceFlow_1eyrb38">
                <di:waypoint x="374" y="223" />
                <di:waypoint x="424" y="223" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1cu3i9f_di" bpmnElement="SequenceFlow_1cu3i9f">
                <di:waypoint x="474" y="223" />
                <di:waypoint x="870" y="223" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="533" y="221" width="15" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="Task_0se57ht_di" bpmnElement="Task_0se57ht">
                <dc:Bounds x="504" y="293" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_16d7ejn_di" bpmnElement="SequenceFlow_16d7ejn">
                <di:waypoint x="449" y="248" />
                <di:waypoint x="449" y="333" />
                <di:waypoint x="504" y="333" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="455" y="288" width="18" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0u388lk_di" bpmnElement="SequenceFlow_0u388lk">
                <di:waypoint x="554" y="373" />
                <di:waypoint x="554" y="396" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ParallelGateway_0fy7v90_di" bpmnElement="ExclusiveGateway_0hqcq5y">
                <dc:Bounds x="529" y="396" width="50" height="50" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1vmbe2q_di" bpmnElement="SequenceFlow_1vmbe2q">
                <di:waypoint x="554" y="446" />
                <di:waypoint x="554" y="558" />
                <di:waypoint x="682" y="558" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_01p7tux_di" bpmnElement="SequenceFlow_01p7tux">
                <di:waypoint x="554" y="446" />
                <di:waypoint x="554" y="696" />
                <di:waypoint x="682" y="696" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0uaoe37_di" bpmnElement="SequenceFlow_0uaoe37">
                <di:waypoint x="554" y="446" />
                <di:waypoint x="554" y="1162" />
                <di:waypoint x="682" y="1162" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_04vn9ek_di" bpmnElement="SequenceFlow_04vn9ek">
                <di:waypoint x="782" y="696" />
                <di:waypoint x="920" y="696" />
                <di:waypoint x="920" y="446" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ComplexGateway_17z4wcm_di" bpmnElement="ExclusiveGateway_029qami">
                <dc:Bounds x="895" y="396" width="50" height="50" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="965" y="411" width="71" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0y8py6x_di" bpmnElement="SequenceFlow_0y8py6x">
                <di:waypoint x="782" y="558" />
                <di:waypoint x="920" y="558" />
                <di:waypoint x="920" y="446" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0ujoqli_di" bpmnElement="SequenceFlow_0ujoqli">
                <di:waypoint x="920" y="396" />
                <di:waypoint x="920" y="263" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0cqxm2v_di" bpmnElement="SequenceFlow_0cqxm2v">
                <di:waypoint x="782" y="1162" />
                <di:waypoint x="920" y="1162" />
                <di:waypoint x="920" y="446" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="Lane_1g1yyc3_di" bpmnElement="Lane_1g1yyc3">
                <dc:Bounds x="118" y="1101" width="2687" height="295" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Lane_0sfi6ra_di" bpmnElement="Lane_0sfi6ra">
                <dc:Bounds x="118" y="638" width="2687" height="463" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Lane_0e2krhp_di" bpmnElement="Lane_0e2krhp">
                <dc:Bounds x="118" y="483" width="2687" height="155" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="UserTask_0vqtdhp_di" bpmnElement="Task_0eir53l">
                <dc:Bounds x="682" y="518" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="UserTask_1il0h7a_di" bpmnElement="Task_065u6lo">
                <dc:Bounds x="682" y="656" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="UserTask_0xulu4h_di" bpmnElement="Task_1yxb835">
                <dc:Bounds x="682" y="1122" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1d2jttr_di" bpmnElement="SequenceFlow_1d2jttr">
                <di:waypoint x="1243" y="223" />
                <di:waypoint x="1306" y="223" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ParallelGateway_0c3be9p_di" bpmnElement="ExclusiveGateway_1g79lt0">
                <dc:Bounds x="1306" y="198" width="50" height="50" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1atc62j_di" bpmnElement="SequenceFlow_1atc62j">
                <di:waypoint x="1331" y="248" />
                <di:waypoint x="1331" y="303" />
                <di:waypoint x="1425" y="303" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0vrb9tf_di" bpmnElement="SequenceFlow_0vrb9tf">
                <di:waypoint x="1356" y="223" />
                <di:waypoint x="1459" y="223" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="IntermediateCatchEvent_0a0aph9_di" bpmnElement="IntermediateThrowEvent_0865w6t">
                <dc:Bounds x="1425" y="532" width="36" height="36" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1kvxir8_di" bpmnElement="SequenceFlow_1kvxir8">
                <di:waypoint x="1461" y="550" />
                <di:waypoint x="1564" y="550" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="IntermediateCatchEvent_04pmhko_di" bpmnElement="IntermediateThrowEvent_0c7ryf7">
                <dc:Bounds x="1208" y="686" width="36" height="36" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1sngvcu_di" bpmnElement="SequenceFlow_1sngvcu">
                <di:waypoint x="1244" y="704" />
                <di:waypoint x="1371" y="704" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="SendTask_0z8p8rb_di" bpmnElement="Task_03chpya">
                <dc:Bounds x="1564" y="510" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="SendTask_0uqsykk_di" bpmnElement="Task_1i5i7pu">
                <dc:Bounds x="1371" y="664" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EndEvent_1qltzry_di" bpmnElement="EndEvent_1h6y824">
                <dc:Bounds x="1798" y="532" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1774" y="575" width="85" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EndEvent_0dx65aa_di" bpmnElement="IntermediateThrowEvent_1ex2tql">
                <dc:Bounds x="1425" y="285" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1407" y="328" width="74" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EventBasedGateway_0p7fnyf_di" bpmnElement="ExclusiveGateway_1xgk1v4">
                <dc:Bounds x="1666" y="679" width="50" height="50" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1668" y="642" width="48" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="IntermediateCatchEvent_1t3ck6c_di" bpmnElement="IntermediateCatchEvent_1t3ck6c">
                <dc:Bounds x="1746" y="810" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1744" y="853" width="41" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1ixxigw_di" bpmnElement="SequenceFlow_1ixxigw">
                <di:waypoint x="1691" y="729" />
                <di:waypoint x="1691" y="828" />
                <di:waypoint x="1746" y="828" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="Task_0o1adt8_di" bpmnElement="Task_0o1adt8">
                <dc:Bounds x="1935" y="788" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0j5fc9w_di" bpmnElement="SequenceFlow_0j5fc9w">
                <di:waypoint x="1782" y="828" />
                <di:waypoint x="1935" y="828" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ExclusiveGateway_17uu1uf_di" bpmnElement="ExclusiveGateway_17uu1uf" isMarkerVisible="true">
                <dc:Bounds x="2384" y="679" width="50" height="50" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EndEvent_09mbo43_di" bpmnElement="EndEvent_09mbo43">
                <dc:Bounds x="2538" y="686" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="2530" y="729" width="52" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1q3ae3c_di" bpmnElement="SequenceFlow_1q3ae3c">
                <di:waypoint x="2434" y="704" />
                <di:waypoint x="2538" y="704" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ReceiveTask_0lqgtch_di" bpmnElement="ReceiveTask_0lqgtch">
                <dc:Bounds x="1833" y="664" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0sk99e6_di" bpmnElement="SequenceFlow_0sk99e6">
                <di:waypoint x="1716" y="704" />
                <di:waypoint x="1833" y="704" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1oa21sv_di" bpmnElement="SequenceFlow_1oa21sv">
                <di:waypoint x="1933" y="704" />
                <di:waypoint x="2384" y="704" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0m3xa9e_di" bpmnElement="SequenceFlow_0m3xa9e">
                <di:waypoint x="2035" y="828" />
                <di:waypoint x="2068" y="828" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="EventBasedGateway_097ncvb_di" bpmnElement="ExclusiveGateway_1vtuh3e">
                <dc:Bounds x="2068" y="803" width="50" height="50" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="IntermediateCatchEvent_19yuybj_di" bpmnElement="IntermediateCatchEvent_19yuybj">
                <dc:Bounds x="2119" y="954" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="2119" y="997" width="36" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0bnvc0y_di" bpmnElement="SequenceFlow_0bnvc0y">
                <di:waypoint x="2093" y="853" />
                <di:waypoint x="2093" y="972" />
                <di:waypoint x="2119" y="972" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ReceiveTask_06648vq_di" bpmnElement="ReceiveTask_06648vq">
                <dc:Bounds x="2196" y="788" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0snk47z_di" bpmnElement="SequenceFlow_0snk47z">
                <di:waypoint x="2118" y="828" />
                <di:waypoint x="2196" y="828" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="Task_12oam0i_di" bpmnElement="Task_12oam0i">
                <dc:Bounds x="2196" y="932" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1d16zov_di" bpmnElement="SequenceFlow_1d16zov">
                <di:waypoint x="2155" y="972" />
                <di:waypoint x="2196" y="972" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0w1vlfw_di" bpmnElement="SequenceFlow_0w1vlfw">
                <di:waypoint x="2296" y="828" />
                <di:waypoint x="2409" y="828" />
                <di:waypoint x="2409" y="729" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1s0polm_di" bpmnElement="SequenceFlow_1s0polm">
                <di:waypoint x="2296" y="972" />
                <di:waypoint x="2346" y="972" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="IntermediateThrowEvent_16xafr6_di" bpmnElement="IntermediateThrowEvent_1wp3aa4">
                <dc:Bounds x="2346" y="954" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="2319" y="917" width="90" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Task_0co2ik3_di" bpmnElement="Task_0co2ik3">
                <dc:Bounds x="2546" y="1122" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0zlivxk_di" bpmnElement="SequenceFlow_0zlivxk">
                <di:waypoint x="1664" y="550" />
                <di:waypoint x="1798" y="550" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0xv29bu_di" bpmnElement="SequenceFlow_0xv29bu">
                <di:waypoint x="1471" y="704" />
                <di:waypoint x="1666" y="704" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0wf39d1_di" bpmnElement="SequenceFlow_0wf39d1">
                <di:waypoint x="2364" y="990" />
                <di:waypoint x="2364" y="1162" />
                <di:waypoint x="2546" y="1162" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_11f0t27_di" bpmnElement="SequenceFlow_11f0t27">
                <di:waypoint x="2646" y="1162" />
                <di:waypoint x="2696" y="1162" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="IntermediateThrowEvent_0r1rk5e_di" bpmnElement="IntermediateThrowEvent_0j64vk4">
                <dc:Bounds x="2696" y="1144" width="36" height="36" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="IntermediateCatchEvent_1wdgn37_di" bpmnElement="IntermediateThrowEvent_11bn98m">
                <dc:Bounds x="2460" y="1291" width="36" height="36" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1x3o8n5_di" bpmnElement="SequenceFlow_1x3o8n5">
                <di:waypoint x="2496" y="1309" />
                <di:waypoint x="2546" y="1309" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ManualTask_0v538ez_di" bpmnElement="Task_02llg33">
                <dc:Bounds x="2546" y="1269" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EndEvent_1j1n6ih_di" bpmnElement="EndEvent_1j1n6ih">
                <dc:Bounds x="2696" y="1291" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="2678" y="1334" width="73" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_17ab3ot_di" bpmnElement="SequenceFlow_17ab3ot">
                <di:waypoint x="2646" y="1309" />
                <di:waypoint x="2696" y="1309" />
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
              <bpmn:lane id="Lane_0e2krhp" name="Vertrieb">
                <bpmn:flowNodeRef>Task_0eir53l</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_0865w6t</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_03chpya</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>EndEvent_1h6y824</bpmn:flowNodeRef>
              </bpmn:lane>
              <bpmn:lane id="Lane_1jx5o3q" name="Auftragsbearbeitung">
                <bpmn:flowNodeRef>Task_1ydvkkn</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_0se57ht</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_1anf4b1</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_0k2az84</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_0hqcq5y</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_06oc8as</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_1g79lt0</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_0x1yj54</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>StartEvent_1</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_1c7ol8g</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_1jg9g5a</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_029qami</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>EndEvent_1av8h1g</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_1ex2tql</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>BoundaryEvent_1b66u6z</bpmn:flowNodeRef>
                <bpmn:childLaneSet id="LaneSet_0ab1ad7" />
              </bpmn:lane>
              <bpmn:lane id="Lane_0sfi6ra" name="Finance">
                <bpmn:flowNodeRef>Task_065u6lo</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_0c7ryf7</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_1i5i7pu</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_0o1adt8</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_17uu1uf</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ReceiveTask_0lqgtch</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_1vtuh3e</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ReceiveTask_06648vq</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_12oam0i</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>ExclusiveGateway_1xgk1v4</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateCatchEvent_1t3ck6c</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>EndEvent_09mbo43</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateCatchEvent_19yuybj</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_1wp3aa4</bpmn:flowNodeRef>
              </bpmn:lane>
              <bpmn:lane id="Lane_1g1yyc3" name="CEO">
                <bpmn:flowNodeRef>Task_1yxb835</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_0co2ik3</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_0j64vk4</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>IntermediateThrowEvent_11bn98m</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>Task_02llg33</bpmn:flowNodeRef>
                <bpmn:flowNodeRef>EndEvent_1j1n6ih</bpmn:flowNodeRef>
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
            <bpmn:exclusiveGateway id="ExclusiveGateway_1c7ol8g" name="größer 10k?">
              <bpmn:incoming>SequenceFlow_1eyrb38</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1cu3i9f</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_16d7ejn</bpmn:outgoing>
            </bpmn:exclusiveGateway>
            <bpmn:task id="Task_0se57ht" name="Freigeben lassen">
              <bpmn:incoming>SequenceFlow_16d7ejn</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0u388lk</bpmn:outgoing>
            </bpmn:task>
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
            <bpmn:userTask id="Task_0eir53l" name="Bestellung freigeben">
              <bpmn:incoming>SequenceFlow_1vmbe2q</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0y8py6x</bpmn:outgoing>
            </bpmn:userTask>
            <bpmn:task id="Task_06oc8as" name="Auftrag abgebrochen" isForCompensation="true" />
            <bpmn:endEvent id="EndEvent_1av8h1g" name="Bestellungsvorgang abgeschlossen">
              <bpmn:incoming>SequenceFlow_0sbomd1</bpmn:incoming>
            </bpmn:endEvent>
            <bpmn:parallelGateway id="ExclusiveGateway_1g79lt0">
              <bpmn:incoming>SequenceFlow_1d2jttr</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1atc62j</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_0vrb9tf</bpmn:outgoing>
            </bpmn:parallelGateway>
            <bpmn:manualTask id="Task_0x1yj54" name="Versende Produkt">
              <bpmn:incoming>SequenceFlow_0vrb9tf</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0sbomd1</bpmn:outgoing>
            </bpmn:manualTask>
            <bpmn:intermediateCatchEvent id="IntermediateThrowEvent_0865w6t">
              <bpmn:outgoing>SequenceFlow_1kvxir8</bpmn:outgoing>
              <bpmn:signalEventDefinition />
            </bpmn:intermediateCatchEvent>
            <bpmn:endEvent id="IntermediateThrowEvent_1ex2tql" name="Signal an Vertrieb und Finance">
              <bpmn:incoming>SequenceFlow_1atc62j</bpmn:incoming>
              <bpmn:signalEventDefinition />
            </bpmn:endEvent>
            <bpmn:sendTask id="Task_03chpya" name="Verschicke Versandbestätigung">
              <bpmn:incoming>SequenceFlow_1kvxir8</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0zlivxk</bpmn:outgoing>
            </bpmn:sendTask>
            <bpmn:endEvent id="EndEvent_1h6y824" name="Versandbestätigung verschickt">
              <bpmn:incoming>SequenceFlow_0zlivxk</bpmn:incoming>
            </bpmn:endEvent>
            <bpmn:userTask id="Task_065u6lo" name="Bestellung freigeben">
              <bpmn:incoming>SequenceFlow_01p7tux</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_04vn9ek</bpmn:outgoing>
            </bpmn:userTask>
            <bpmn:userTask id="Task_1yxb835" name="Bestellung Freigeben">
              <bpmn:incoming>SequenceFlow_0uaoe37</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0cqxm2v</bpmn:outgoing>
            </bpmn:userTask>
            <bpmn:eventBasedGateway id="ExclusiveGateway_1xgk1v4" name="Zahlung eingegangen?">
              <bpmn:incoming>SequenceFlow_0xv29bu</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1ixxigw</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_0sk99e6</bpmn:outgoing>
            </bpmn:eventBasedGateway>
            <bpmn:intermediateCatchEvent id="IntermediateThrowEvent_0c7ryf7">
              <bpmn:outgoing>SequenceFlow_1sngvcu</bpmn:outgoing>
              <bpmn:signalEventDefinition />
            </bpmn:intermediateCatchEvent>
            <bpmn:sendTask id="Task_1i5i7pu" name="Verschicke Rechnung">
              <bpmn:incoming>SequenceFlow_1sngvcu</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0xv29bu</bpmn:outgoing>
            </bpmn:sendTask>
            <bpmn:intermediateCatchEvent id="IntermediateCatchEvent_1t3ck6c" name="2 Wochen">
              <bpmn:incoming>SequenceFlow_1ixxigw</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0j5fc9w</bpmn:outgoing>
              <bpmn:timerEventDefinition />
            </bpmn:intermediateCatchEvent>
            <bpmn:task id="Task_0o1adt8" name="Mahnung verschicken">
              <bpmn:incoming>SequenceFlow_0j5fc9w</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0m3xa9e</bpmn:outgoing>
            </bpmn:task>
            <bpmn:exclusiveGateway id="ExclusiveGateway_17uu1uf">
              <bpmn:incoming>SequenceFlow_1oa21sv</bpmn:incoming>
              <bpmn:incoming>SequenceFlow_0w1vlfw</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1q3ae3c</bpmn:outgoing>
            </bpmn:exclusiveGateway>
            <bpmn:endEvent id="EndEvent_09mbo43" name="Zahlung abgeschlossen">
              <bpmn:incoming>SequenceFlow_1q3ae3c</bpmn:incoming>
            </bpmn:endEvent>
            <bpmn:receiveTask id="ReceiveTask_0lqgtch" name="Zahlung eingegangen">
              <bpmn:incoming>SequenceFlow_0sk99e6</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1oa21sv</bpmn:outgoing>
            </bpmn:receiveTask>
            <bpmn:eventBasedGateway id="ExclusiveGateway_1vtuh3e">
              <bpmn:incoming>SequenceFlow_0m3xa9e</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0bnvc0y</bpmn:outgoing>
              <bpmn:outgoing>SequenceFlow_0snk47z</bpmn:outgoing>
            </bpmn:eventBasedGateway>
            <bpmn:intermediateCatchEvent id="IntermediateCatchEvent_19yuybj" name="1 Woche">
              <bpmn:incoming>SequenceFlow_0bnvc0y</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1d16zov</bpmn:outgoing>
              <bpmn:timerEventDefinition />
            </bpmn:intermediateCatchEvent>
            <bpmn:receiveTask id="ReceiveTask_06648vq" name="Zahlung eingegangen">
              <bpmn:incoming>SequenceFlow_0snk47z</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0w1vlfw</bpmn:outgoing>
            </bpmn:receiveTask>
            <bpmn:task id="Task_12oam0i" name="An Chef eskalieren">
              <bpmn:incoming>SequenceFlow_1d16zov</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_1s0polm</bpmn:outgoing>
            </bpmn:task>
            <bpmn:intermediateThrowEvent id="IntermediateThrowEvent_1wp3aa4" name="Eskalation an Chef">
              <bpmn:incoming>SequenceFlow_1s0polm</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_0wf39d1</bpmn:outgoing>
              <bpmn:escalationEventDefinition />
            </bpmn:intermediateThrowEvent>
            <bpmn:task id="Task_0co2ik3" name="Anwalt verständigen">
              <bpmn:incoming>SequenceFlow_0wf39d1</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_11f0t27</bpmn:outgoing>
            </bpmn:task>
            <bpmn:boundaryEvent id="BoundaryEvent_1b66u6z" attachedToRef="Task_0k2az84">
              <bpmn:compensateEventDefinition />
            </bpmn:boundaryEvent>
            <bpmn:sequenceFlow id="SequenceFlow_1kvxir8" sourceRef="IntermediateThrowEvent_0865w6t" targetRef="Task_03chpya" />
            <bpmn:sequenceFlow id="SequenceFlow_0vrb9tf" sourceRef="ExclusiveGateway_1g79lt0" targetRef="Task_0x1yj54" />
            <bpmn:sequenceFlow id="SequenceFlow_1atc62j" sourceRef="ExclusiveGateway_1g79lt0" targetRef="IntermediateThrowEvent_1ex2tql" />
            <bpmn:sequenceFlow id="SequenceFlow_1d2jttr" sourceRef="Task_0k2az84" targetRef="ExclusiveGateway_1g79lt0" />
            <bpmn:sequenceFlow id="SequenceFlow_0sbomd1" sourceRef="Task_0x1yj54" targetRef="EndEvent_1av8h1g" />
            <bpmn:sequenceFlow id="SequenceFlow_0cqxm2v" sourceRef="Task_1yxb835" targetRef="ExclusiveGateway_029qami" />
            <bpmn:sequenceFlow id="SequenceFlow_0y8py6x" sourceRef="Task_0eir53l" targetRef="ExclusiveGateway_029qami" />
            <bpmn:sequenceFlow id="SequenceFlow_04vn9ek" sourceRef="Task_065u6lo" targetRef="ExclusiveGateway_029qami" />
            <bpmn:sequenceFlow id="SequenceFlow_0uaoe37" sourceRef="ExclusiveGateway_0hqcq5y" targetRef="Task_1yxb835" />
            <bpmn:sequenceFlow id="SequenceFlow_01p7tux" sourceRef="ExclusiveGateway_0hqcq5y" targetRef="Task_065u6lo" />
            <bpmn:sequenceFlow id="SequenceFlow_1vmbe2q" sourceRef="ExclusiveGateway_0hqcq5y" targetRef="Task_0eir53l" />
            <bpmn:sequenceFlow id="SequenceFlow_0ujoqli" sourceRef="ExclusiveGateway_029qami" targetRef="Task_1anf4b1" />
            <bpmn:sequenceFlow id="SequenceFlow_04dfqfo" sourceRef="IntermediateThrowEvent_1jg9g5a" targetRef="Task_0k2az84" />
            <bpmn:sequenceFlow id="SequenceFlow_1wj3ufv" sourceRef="Task_1anf4b1" targetRef="IntermediateThrowEvent_1jg9g5a" />
            <bpmn:sequenceFlow id="SequenceFlow_0u388lk" sourceRef="Task_0se57ht" targetRef="ExclusiveGateway_0hqcq5y" />
            <bpmn:sequenceFlow id="SequenceFlow_16d7ejn" name="Ja" sourceRef="ExclusiveGateway_1c7ol8g" targetRef="Task_0se57ht" />
            <bpmn:sequenceFlow id="SequenceFlow_1cu3i9f" name="nein" sourceRef="ExclusiveGateway_1c7ol8g" targetRef="Task_1anf4b1" />
            <bpmn:sequenceFlow id="SequenceFlow_1eyrb38" sourceRef="Task_1ydvkkn" targetRef="ExclusiveGateway_1c7ol8g" />
            <bpmn:sequenceFlow id="SequenceFlow_0zda5jx" sourceRef="StartEvent_1" targetRef="Task_1ydvkkn" />
            <bpmn:sequenceFlow id="SequenceFlow_0zlivxk" sourceRef="Task_03chpya" targetRef="EndEvent_1h6y824" />
            <bpmn:sequenceFlow id="SequenceFlow_0xv29bu" sourceRef="Task_1i5i7pu" targetRef="ExclusiveGateway_1xgk1v4" />
            <bpmn:sequenceFlow id="SequenceFlow_1ixxigw" sourceRef="ExclusiveGateway_1xgk1v4" targetRef="IntermediateCatchEvent_1t3ck6c" />
            <bpmn:sequenceFlow id="SequenceFlow_0sk99e6" sourceRef="ExclusiveGateway_1xgk1v4" targetRef="ReceiveTask_0lqgtch" />
            <bpmn:sequenceFlow id="SequenceFlow_1sngvcu" sourceRef="IntermediateThrowEvent_0c7ryf7" targetRef="Task_1i5i7pu" />
            <bpmn:sequenceFlow id="SequenceFlow_0j5fc9w" sourceRef="IntermediateCatchEvent_1t3ck6c" targetRef="Task_0o1adt8" />
            <bpmn:sequenceFlow id="SequenceFlow_0m3xa9e" sourceRef="Task_0o1adt8" targetRef="ExclusiveGateway_1vtuh3e" />
            <bpmn:sequenceFlow id="SequenceFlow_1oa21sv" sourceRef="ReceiveTask_0lqgtch" targetRef="ExclusiveGateway_17uu1uf" />
            <bpmn:sequenceFlow id="SequenceFlow_0w1vlfw" sourceRef="ReceiveTask_06648vq" targetRef="ExclusiveGateway_17uu1uf" />
            <bpmn:sequenceFlow id="SequenceFlow_1q3ae3c" sourceRef="ExclusiveGateway_17uu1uf" targetRef="EndEvent_09mbo43" />
            <bpmn:sequenceFlow id="SequenceFlow_0bnvc0y" sourceRef="ExclusiveGateway_1vtuh3e" targetRef="IntermediateCatchEvent_19yuybj" />
            <bpmn:sequenceFlow id="SequenceFlow_0snk47z" sourceRef="ExclusiveGateway_1vtuh3e" targetRef="ReceiveTask_06648vq" />
            <bpmn:sequenceFlow id="SequenceFlow_1d16zov" sourceRef="IntermediateCatchEvent_19yuybj" targetRef="Task_12oam0i" />
            <bpmn:sequenceFlow id="SequenceFlow_1s0polm" sourceRef="Task_12oam0i" targetRef="IntermediateThrowEvent_1wp3aa4" />
            <bpmn:sequenceFlow id="SequenceFlow_0wf39d1" sourceRef="IntermediateThrowEvent_1wp3aa4" targetRef="Task_0co2ik3" />
            <bpmn:sequenceFlow id="SequenceFlow_11f0t27" sourceRef="Task_0co2ik3" targetRef="IntermediateThrowEvent_0j64vk4" />
            <bpmn:intermediateThrowEvent id="IntermediateThrowEvent_0j64vk4">
              <bpmn:incoming>SequenceFlow_11f0t27</bpmn:incoming>
              <bpmn:linkEventDefinition />
            </bpmn:intermediateThrowEvent>
            <bpmn:intermediateCatchEvent id="IntermediateThrowEvent_11bn98m">
              <bpmn:outgoing>SequenceFlow_1x3o8n5</bpmn:outgoing>
              <bpmn:linkEventDefinition />
            </bpmn:intermediateCatchEvent>
            <bpmn:manualTask id="Task_02llg33" name="Inkassounternehmen anrufen">
              <bpmn:incoming>SequenceFlow_1x3o8n5</bpmn:incoming>
              <bpmn:outgoing>SequenceFlow_17ab3ot</bpmn:outgoing>
            </bpmn:manualTask>
            <bpmn:endEvent id="EndEvent_1j1n6ih" name="Inkassounternehmen angerufen">
              <bpmn:incoming>SequenceFlow_17ab3ot</bpmn:incoming>
            </bpmn:endEvent>
            <bpmn:sequenceFlow id="SequenceFlow_1x3o8n5" sourceRef="IntermediateThrowEvent_11bn98m" targetRef="Task_02llg33" />
            <bpmn:sequenceFlow id="SequenceFlow_17ab3ot" sourceRef="Task_02llg33" targetRef="EndEvent_1j1n6ih" />
            <bpmn:association id="Association_1jko10h" associationDirection="One" sourceRef="BoundaryEvent_1b66u6z" targetRef="Task_06oc8as" />
          </bpmn:process>
          <bpmndi:BPMNDiagram id="BPMNDiagram_1">
            <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_1rsvusk">
              <bpmndi:BPMNShape id="Participant_0t18keu_di" bpmnElement="Participant_0t18keu">
                <dc:Bounds x="88" y="113" width="2717" height="1283" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="StartEvent_01xs35b_di" bpmnElement="StartEvent_1">
                <dc:Bounds x="188" y="205" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="168" y="248" width="77" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="ManualTask_1kq8yct_di" bpmnElement="Task_1anf4b1">
                <dc:Bounds x="870" y="183" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1wj3ufv_di" bpmnElement="SequenceFlow_1wj3ufv">
                <di:waypoint x="970" y="223" />
                <di:waypoint x="1044" y="223" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="IntermediateCatchEvent_0zwdt7g_di" bpmnElement="IntermediateThrowEvent_1jg9g5a">
                <dc:Bounds x="1044" y="205" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1035" y="168" width="53" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_04dfqfo_di" bpmnElement="SequenceFlow_04dfqfo">
                <di:waypoint x="1080" y="223" />
                <di:waypoint x="1143" y="223" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="505" y="223" width="9" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ManualTask_1go72er_di" bpmnElement="Task_0k2az84">
                <dc:Bounds x="1143" y="183" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EndEvent_1av8h1g_di" bpmnElement="EndEvent_1av8h1g">
                <dc:Bounds x="1644" y="205" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1618" y="248" width="89" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="BoundaryEvent_16tt3ea_di" bpmnElement="BoundaryEvent_1b66u6z">
                <dc:Bounds x="1175" y="245" width="36" height="36" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Task_06oc8as_di" bpmnElement="Task_06oc8as">
                <dc:Bounds x="1212" y="307" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="Association_1jko10h_di" bpmnElement="Association_1jko10h">
                <di:waypoint x="1193" y="281" />
                <di:waypoint x="1193" y="347" />
                <di:waypoint x="1212" y="347" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0sbomd1_di" bpmnElement="SequenceFlow_0sbomd1">
                <di:waypoint x="1559" y="223" />
                <di:waypoint x="1644" y="223" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ManualTask_0hmmeew_di" bpmnElement="Task_0x1yj54">
                <dc:Bounds x="1459" y="183" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Lane_1jx5o3q_di" bpmnElement="Lane_1jx5o3q">
                <dc:Bounds x="118" y="113" width="2687" height="370" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Task_1ydvkkn_di" bpmnElement="Task_1ydvkkn">
                <dc:Bounds x="274" y="183" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0zda5jx_di" bpmnElement="SequenceFlow_0zda5jx">
                <di:waypoint x="224" y="223" />
                <di:waypoint x="274" y="223" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ExclusiveGateway_1c7ol8g_di" bpmnElement="ExclusiveGateway_1c7ol8g" isMarkerVisible="true">
                <dc:Bounds x="424" y="198" width="50" height="50" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="419" y="174" width="60" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1eyrb38_di" bpmnElement="SequenceFlow_1eyrb38">
                <di:waypoint x="374" y="223" />
                <di:waypoint x="424" y="223" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1cu3i9f_di" bpmnElement="SequenceFlow_1cu3i9f">
                <di:waypoint x="474" y="223" />
                <di:waypoint x="870" y="223" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="529" y="221" width="22" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="Task_0se57ht_di" bpmnElement="Task_0se57ht">
                <dc:Bounds x="504" y="293" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_16d7ejn_di" bpmnElement="SequenceFlow_16d7ejn">
                <di:waypoint x="449" y="248" />
                <di:waypoint x="449" y="333" />
                <di:waypoint x="504" y="333" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="458" y="288" width="12" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0u388lk_di" bpmnElement="SequenceFlow_0u388lk">
                <di:waypoint x="554" y="373" />
                <di:waypoint x="554" y="396" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ParallelGateway_0fy7v90_di" bpmnElement="ExclusiveGateway_0hqcq5y">
                <dc:Bounds x="529" y="396" width="50" height="50" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1vmbe2q_di" bpmnElement="SequenceFlow_1vmbe2q">
                <di:waypoint x="554" y="446" />
                <di:waypoint x="554" y="558" />
                <di:waypoint x="682" y="558" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_01p7tux_di" bpmnElement="SequenceFlow_01p7tux">
                <di:waypoint x="554" y="446" />
                <di:waypoint x="554" y="696" />
                <di:waypoint x="682" y="696" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0uaoe37_di" bpmnElement="SequenceFlow_0uaoe37">
                <di:waypoint x="554" y="446" />
                <di:waypoint x="554" y="1162" />
                <di:waypoint x="682" y="1162" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_04vn9ek_di" bpmnElement="SequenceFlow_04vn9ek">
                <di:waypoint x="782" y="696" />
                <di:waypoint x="920" y="696" />
                <di:waypoint x="920" y="446" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ComplexGateway_17z4wcm_di" bpmnElement="ExclusiveGateway_029qami">
                <dc:Bounds x="895" y="396" width="50" height="50" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="956" y="411" width="89" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0y8py6x_di" bpmnElement="SequenceFlow_0y8py6x">
                <di:waypoint x="782" y="558" />
                <di:waypoint x="920" y="558" />
                <di:waypoint x="920" y="446" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0ujoqli_di" bpmnElement="SequenceFlow_0ujoqli">
                <di:waypoint x="920" y="396" />
                <di:waypoint x="920" y="263" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0cqxm2v_di" bpmnElement="SequenceFlow_0cqxm2v">
                <di:waypoint x="782" y="1162" />
                <di:waypoint x="920" y="1162" />
                <di:waypoint x="920" y="446" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="Lane_1g1yyc3_di" bpmnElement="Lane_1g1yyc3">
                <dc:Bounds x="118" y="1101" width="2687" height="295" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Lane_0sfi6ra_di" bpmnElement="Lane_0sfi6ra">
                <dc:Bounds x="118" y="638" width="2687" height="463" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Lane_0e2krhp_di" bpmnElement="Lane_0e2krhp">
                <dc:Bounds x="118" y="483" width="2687" height="155" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="UserTask_0vqtdhp_di" bpmnElement="Task_0eir53l">
                <dc:Bounds x="682" y="518" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="UserTask_1il0h7a_di" bpmnElement="Task_065u6lo">
                <dc:Bounds x="682" y="656" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="UserTask_0xulu4h_di" bpmnElement="Task_1yxb835">
                <dc:Bounds x="682" y="1122" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1d2jttr_di" bpmnElement="SequenceFlow_1d2jttr">
                <di:waypoint x="1243" y="223" />
                <di:waypoint x="1306" y="223" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ParallelGateway_0c3be9p_di" bpmnElement="ExclusiveGateway_1g79lt0">
                <dc:Bounds x="1306" y="198" width="50" height="50" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1atc62j_di" bpmnElement="SequenceFlow_1atc62j">
                <di:waypoint x="1331" y="248" />
                <di:waypoint x="1331" y="303" />
                <di:waypoint x="1425" y="303" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0vrb9tf_di" bpmnElement="SequenceFlow_0vrb9tf">
                <di:waypoint x="1356" y="223" />
                <di:waypoint x="1459" y="223" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="IntermediateCatchEvent_0a0aph9_di" bpmnElement="IntermediateThrowEvent_0865w6t">
                <dc:Bounds x="1425" y="532" width="36" height="36" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1kvxir8_di" bpmnElement="SequenceFlow_1kvxir8">
                <di:waypoint x="1461" y="550" />
                <di:waypoint x="1564" y="550" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="IntermediateCatchEvent_04pmhko_di" bpmnElement="IntermediateThrowEvent_0c7ryf7">
                <dc:Bounds x="1208" y="686" width="36" height="36" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1sngvcu_di" bpmnElement="SequenceFlow_1sngvcu">
                <di:waypoint x="1244" y="704" />
                <di:waypoint x="1371" y="704" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="SendTask_0z8p8rb_di" bpmnElement="Task_03chpya">
                <dc:Bounds x="1564" y="510" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="SendTask_0uqsykk_di" bpmnElement="Task_1i5i7pu">
                <dc:Bounds x="1371" y="664" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EndEvent_1qltzry_di" bpmnElement="EndEvent_1h6y824">
                <dc:Bounds x="1798" y="532" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1774" y="575" width="85" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EndEvent_0dx65aa_di" bpmnElement="IntermediateThrowEvent_1ex2tql">
                <dc:Bounds x="1425" y="285" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1414" y="328" width="59" height="40" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EventBasedGateway_0p7fnyf_di" bpmnElement="ExclusiveGateway_1xgk1v4">
                <dc:Bounds x="1666" y="679" width="50" height="50" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1655.5" y="641.5" width="71" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="IntermediateCatchEvent_1t3ck6c_di" bpmnElement="IntermediateCatchEvent_1t3ck6c">
                <dc:Bounds x="1746" y="810" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="1739" y="853" width="50" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1ixxigw_di" bpmnElement="SequenceFlow_1ixxigw">
                <di:waypoint x="1691" y="729" />
                <di:waypoint x="1691" y="828" />
                <di:waypoint x="1746" y="828" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="Task_0o1adt8_di" bpmnElement="Task_0o1adt8">
                <dc:Bounds x="1935" y="788" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0j5fc9w_di" bpmnElement="SequenceFlow_0j5fc9w">
                <di:waypoint x="1782" y="828" />
                <di:waypoint x="1935" y="828" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ExclusiveGateway_17uu1uf_di" bpmnElement="ExclusiveGateway_17uu1uf" isMarkerVisible="true">
                <dc:Bounds x="2384" y="679" width="50" height="50" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EndEvent_09mbo43_di" bpmnElement="EndEvent_09mbo43">
                <dc:Bounds x="2538" y="686" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="2519" y="729" width="74" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1q3ae3c_di" bpmnElement="SequenceFlow_1q3ae3c">
                <di:waypoint x="2434" y="704" />
                <di:waypoint x="2538" y="704" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ReceiveTask_0lqgtch_di" bpmnElement="ReceiveTask_0lqgtch">
                <dc:Bounds x="1833" y="664" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0sk99e6_di" bpmnElement="SequenceFlow_0sk99e6">
                <di:waypoint x="1716" y="704" />
                <di:waypoint x="1833" y="704" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1oa21sv_di" bpmnElement="SequenceFlow_1oa21sv">
                <di:waypoint x="1933" y="704" />
                <di:waypoint x="2384" y="704" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0m3xa9e_di" bpmnElement="SequenceFlow_0m3xa9e">
                <di:waypoint x="2035" y="828" />
                <di:waypoint x="2068" y="828" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="EventBasedGateway_097ncvb_di" bpmnElement="ExclusiveGateway_1vtuh3e">
                <dc:Bounds x="2068" y="803" width="50" height="50" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="IntermediateCatchEvent_19yuybj_di" bpmnElement="IntermediateCatchEvent_19yuybj">
                <dc:Bounds x="2119" y="954" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="2115" y="997" width="44" height="14" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0bnvc0y_di" bpmnElement="SequenceFlow_0bnvc0y">
                <di:waypoint x="2093" y="853" />
                <di:waypoint x="2093" y="972" />
                <di:waypoint x="2119" y="972" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ReceiveTask_06648vq_di" bpmnElement="ReceiveTask_06648vq">
                <dc:Bounds x="2196" y="788" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0snk47z_di" bpmnElement="SequenceFlow_0snk47z">
                <di:waypoint x="2118" y="828" />
                <di:waypoint x="2196" y="828" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="Task_12oam0i_di" bpmnElement="Task_12oam0i">
                <dc:Bounds x="2196" y="932" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1d16zov_di" bpmnElement="SequenceFlow_1d16zov">
                <di:waypoint x="2155" y="972" />
                <di:waypoint x="2196" y="972" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0w1vlfw_di" bpmnElement="SequenceFlow_0w1vlfw">
                <di:waypoint x="2296" y="828" />
                <di:waypoint x="2409" y="828" />
                <di:waypoint x="2409" y="729" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_1s0polm_di" bpmnElement="SequenceFlow_1s0polm">
                <di:waypoint x="2296" y="972" />
                <di:waypoint x="2346" y="972" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="IntermediateThrowEvent_16xafr6_di" bpmnElement="IntermediateThrowEvent_1wp3aa4">
                <dc:Bounds x="2346" y="954" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="2330" y="916.5" width="67" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Task_0co2ik3_di" bpmnElement="Task_0co2ik3">
                <dc:Bounds x="2546" y="1122" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_0zlivxk_di" bpmnElement="SequenceFlow_0zlivxk">
                <di:waypoint x="1664" y="550" />
                <di:waypoint x="1798" y="550" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0xv29bu_di" bpmnElement="SequenceFlow_0xv29bu">
                <di:waypoint x="1471" y="704" />
                <di:waypoint x="1666" y="704" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_0wf39d1_di" bpmnElement="SequenceFlow_0wf39d1">
                <di:waypoint x="2364" y="990" />
                <di:waypoint x="2364" y="1162" />
                <di:waypoint x="2546" y="1162" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="SequenceFlow_11f0t27_di" bpmnElement="SequenceFlow_11f0t27">
                <di:waypoint x="2646" y="1162" />
                <di:waypoint x="2696" y="1162" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="IntermediateThrowEvent_0r1rk5e_di" bpmnElement="IntermediateThrowEvent_0j64vk4">
                <dc:Bounds x="2696" y="1144" width="36" height="36" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="IntermediateCatchEvent_1wdgn37_di" bpmnElement="IntermediateThrowEvent_11bn98m">
                <dc:Bounds x="2460" y="1291" width="36" height="36" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_1x3o8n5_di" bpmnElement="SequenceFlow_1x3o8n5">
                <di:waypoint x="2496" y="1309" />
                <di:waypoint x="2546" y="1309" />
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNShape id="ManualTask_0v538ez_di" bpmnElement="Task_02llg33">
                <dc:Bounds x="2546" y="1269" width="100" height="80" />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EndEvent_1j1n6ih_di" bpmnElement="EndEvent_1j1n6ih">
                <dc:Bounds x="2696" y="1291" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="2673" y="1334" width="82" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_17ab3ot_di" bpmnElement="SequenceFlow_17ab3ot">
                <di:waypoint x="2646" y="1309" />
                <di:waypoint x="2696" y="1309" />
              </bpmndi:BPMNEdge>
            </bpmndi:BPMNPlane>
          </bpmndi:BPMNDiagram>
        </bpmn:definitions>`
        let svg_en =`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="82 107 2729 1295" version="1.1"><defs><marker id="sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker><marker id="association-end-white-black-ee005gq9w0j4udiv8afm3fmyu" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Participant_0t18keu" style="display: block;" transform="translate(88 113)"><g class="djs-visual"><rect x="0" y="0" width="2717" height="1283" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><polyline points="30,0 30,1283 " style="fill: none; stroke: black; stroke-width: 2px;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 1283)"><tspan x="599.15625" y="18.6">PC Build GmbH</tspan></text></g><rect x="0" y="0" width="2717" height="1283" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="2729" height="1295" class="djs-outline" style="fill: none;"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_1g1yyc3" style="display: block;" transform="translate(118 1101)"><g class="djs-visual"><rect x="0" y="0" width="2687" height="295" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 295)"><tspan x="134.3671875" y="18.6">CEO</tspan></text></g><rect x="0" y="0" width="2687" height="295" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="2699" height="307" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_0sfi6ra" style="display: block;" transform="translate(118 638)"><g class="djs-visual"><rect x="0" y="0" width="2687" height="463" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 463)"><tspan x="209.8984375" y="18.6">Finance</tspan></text></g><rect x="0" y="0" width="2687" height="463" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="2699" height="475" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_1jx5o3q" style="display: block;" transform="translate(118 113)"><g class="djs-visual"><rect x="0" y="0" width="2687" height="370" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 370)"><tspan x="138.984375" y="18.6">Order processing</tspan></text></g><rect x="0" y="0" width="2687" height="370" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="2699" height="382" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_0e2krhp" style="display: block;" transform="translate(118 483)"><g class="djs-visual"><rect x="0" y="0" width="2687" height="155" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 155)"><tspan x="62.296875" y="18.6">Sales</tspan></text></g><rect x="0" y="0" width="2687" height="155" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="2699" height="167" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_17ab3ot" style="display: block;"><g class="djs-visual"><path d="m  2646,1309L2696,1309 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="2646,1309 2696,1309 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2640" y="1303" width="62" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1x3o8n5" style="display: block;"><g class="djs-visual"><path d="m  2496,1309L2546,1309 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="2496,1309 2546,1309 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2490" y="1303" width="62" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_11f0t27" style="display: block;"><g class="djs-visual"><path d="m  2646,1162L2696,1162 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="2646,1162 2696,1162 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2640" y="1156" width="62" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0wf39d1" style="display: block;"><g class="djs-visual"><path d="m  2364,990L2364,1162 L2546,1162 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="2364,990 2364,1162 2546,1162 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2358" y="984" width="194" height="184" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1s0polm" style="display: block;"><g class="djs-visual"><path d="m  2296,972L2346,972 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="2296,972 2346,972 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2290" y="966" width="62" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1d16zov" style="display: block;"><g class="djs-visual"><path d="m  2155,972L2196,972 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="2155,972 2196,972 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2149" y="966" width="53" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0snk47z" style="display: block;"><g class="djs-visual"><path d="m  2118,828L2196,828 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="2118,828 2196,828 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2112" y="822" width="90" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0bnvc0y" style="display: block;"><g class="djs-visual"><path d="m  2093,853L2093,972 L2119,972 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="2093,853 2093,972 2119,972 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2087" y="847" width="38" height="131" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1q3ae3c" style="display: block;"><g class="djs-visual"><path d="m  2434,704L2538,704 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="2434,704 2538,704 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2428" y="698" width="116" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0w1vlfw" style="display: block;"><g class="djs-visual"><path d="m  2296,828L2409,828 L2409,729 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="2296,828 2409,828 2409,729 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2290" y="723" width="125" height="111" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1oa21sv" style="display: block;"><g class="djs-visual"><path d="m  1933,704L2384,704 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="1933,704 2384,704 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1927" y="698" width="463" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0m3xa9e" style="display: block;"><g class="djs-visual"><path d="m  2035,828L2068,828 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="2035,828 2068,828 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2029" y="822" width="45" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0j5fc9w" style="display: block;"><g class="djs-visual"><path d="m  1782,828L1935,828 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="1782,828 1935,828 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1776" y="822" width="165" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1sngvcu" style="display: block;"><g class="djs-visual"><path d="m  1244,704L1371,704 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="1244,704 1371,704 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1238" y="698" width="139" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0sk99e6" style="display: block;"><g class="djs-visual"><path d="m  1716,704L1833,704 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="1716,704 1833,704 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1710" y="698" width="129" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1ixxigw" style="display: block;"><g class="djs-visual"><path d="m  1691,729L1691,828 L1746,828 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="1691,729 1691,828 1746,828 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1685" y="723" width="67" height="111" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0xv29bu" style="display: block;"><g class="djs-visual"><path d="m  1471,704L1666,704 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="1471,704 1666,704 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1465" y="698" width="207" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0zlivxk" style="display: block;"><g class="djs-visual"><path d="m  1664,550L1798,550 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="1664,550 1798,550 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1658" y="544" width="146" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0zda5jx" style="display: block;"><g class="djs-visual"><path d="m  224,223L274,223 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="224,223 274,223 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="218" y="217" width="62" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1eyrb38" style="display: block;"><g class="djs-visual"><path d="m  374,223L424,223 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="374,223 424,223 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="368" y="217" width="62" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1cu3i9f" style="display: block;"><g class="djs-visual"><path d="m  474,223L870,223 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="474,223 870,223 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="468" y="217" width="408" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_16d7ejn" style="display: block;"><g class="djs-visual"><path d="m  449,248L449,333 L504,333 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="449,248 449,333 504,333 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="443" y="242" width="67" height="97" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0u388lk" style="display: block;"><g class="djs-visual"><path d="m  554,373L554,396 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="554,373 554,396 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="548" y="367" width="12" height="35" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1wj3ufv" style="display: block;"><g class="djs-visual"><path d="m  970,223L1044,223 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="970,223 1044,223 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="964" y="217" width="86" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_04dfqfo" style="display: block;"><g class="djs-visual"><path d="m  1080,223L1143,223 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="1080,223 1143,223 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1074" y="217" width="75" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0ujoqli" style="display: block;"><g class="djs-visual"><path d="m  920,396L920,263 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="920,396 920,263 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="914" y="257" width="12" height="145" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1vmbe2q" style="display: block;"><g class="djs-visual"><path d="m  554,446L554,558 L682,558 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="554,446 554,558 682,558 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="548" y="440" width="140" height="124" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_01p7tux" style="display: block;"><g class="djs-visual"><path d="m  554,446L554,696 L682,696 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="554,446 554,696 682,696 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="548" y="440" width="140" height="262" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0uaoe37" style="display: block;"><g class="djs-visual"><path d="m  554,446L554,1162 L682,1162 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="554,446 554,1162 682,1162 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="548" y="440" width="140" height="728" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_04vn9ek" style="display: block;"><g class="djs-visual"><path d="m  782,696L920,696 L920,446 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="782,696 920,696 920,446 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="776" y="440" width="150" height="262" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0y8py6x" style="display: block;"><g class="djs-visual"><path d="m  782,558L920,558 L920,446 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="782,558 920,558 920,446 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="776" y="440" width="150" height="124" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0cqxm2v" style="display: block;"><g class="djs-visual"><path d="m  782,1162L920,1162 L920,446 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="782,1162 920,1162 920,446 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="776" y="440" width="150" height="728" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0sbomd1" style="display: block;"><g class="djs-visual"><path d="m  1559,223L1644,223 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="1559,223 1644,223 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1553" y="217" width="97" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1d2jttr" style="display: block;"><g class="djs-visual"><path d="m  1243,223L1306,223 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="1243,223 1306,223 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1237" y="217" width="75" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1atc62j" style="display: block;"><g class="djs-visual"><path d="m  1331,248L1331,303 L1425,303 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="1331,248 1331,303 1425,303 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1325" y="242" width="106" height="67" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0vrb9tf" style="display: block;"><g class="djs-visual"><path d="m  1356,223L1459,223 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="1356,223 1459,223 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1350" y="217" width="115" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1kvxir8" style="display: block;"><g class="djs-visual"><path d="m  1461,550L1564,550 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="1461,550 1564,550 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1455" y="544" width="115" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_1" style="display: block;" transform="translate(188 205)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 8.459999999999999,11.34 l 0,12.6 l 18.900000000000002,0 l 0,-12.6 z l 9.450000000000001,5.4 l 9.450000000000001,-5.4" style="fill: white; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_1_label" style="display: block;" transform="translate(170 248)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Order received</tspan></text></g><rect x="0" y="0" width="74" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="86" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_1ydvkkn" style="display: block;" transform="translate(274 183)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="16.921875" y="43.599999999999994">Check order</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1c7ol8g" style="display: block;" transform="translate(424 198)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 16,15 7.42857142857143,9.714285714285715 -7.42857142857143,9.714285714285715 3.428571428571429,0 5.714285714285715,-7.464228571428572 5.714285714285715,7.464228571428572 3.428571428571429,0 -7.42857142857143,-9.714285714285715 7.42857142857143,-9.714285714285715 -3.428571428571429,0 -5.714285714285715,7.464228571428572 -5.714285714285715,-7.464228571428572 -3.428571428571429,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1c7ol8g_label" style="display: block;" transform="translate(405 174)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Greater than 10k?</tspan></text></g><rect x="0" y="0" width="89" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="101" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0se57ht" style="display: block;" transform="translate(504 293)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="15.6484375" y="43.599999999999994">Get approval</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_1anf4b1" style="display: block;" transform="translate(870 183)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="14.3203125" y="43.599999999999994">Assign picker</tspan></text><path d="m 17,15 c 0.234,-0.01 5.604,0.008 8.029,0.004 0.808,0 1.271,-0.172 1.417,-0.752 0.227,-0.898 -0.334,-1.314 -1.338,-1.316 -2.467,-0.01 -7.886,-0.004 -8.108,-0.004 -0.014,-0.079 0.016,-0.533 0,-0.61 0.195,-0.042 8.507,0.006 9.616,0.002 0.877,-0.007 1.35,-0.438 1.353,-1.208 0.003,-0.768 -0.479,-1.09 -1.35,-1.091 -2.968,-0.002 -9.619,-0.013 -9.619,-0.013 v -0.591 c 0,0 5.052,-0.016 7.225,-0.016 0.888,-0.002 1.354,-0.416 1.351,-1.193 -0.006,-0.761 -0.492,-1.196 -1.361,-1.196 -3.473,-0.005 -10.86,-0.003 -11.0829995,-0.003 -0.022,-0.047 -0.045,-0.094 -0.069,-0.139 0.3939995,-0.319 2.0409995,-1.626 2.4149995,-2.017 0.469,-0.4870005 0.519,-1.1650005 0.162,-1.6040005 -0.414,-0.511 -0.973,-0.5 -1.48,-0.236 -1.4609995,0.764 -6.5999995,3.6430005 -7.7329995,4.2710005 -0.9,0.499 -1.516,1.253 -1.882,2.19 -0.37000002,0.95 -0.17,2.01 -0.166,2.979 0.004,0.718 -0.27300002,1.345 -0.055,2.063 0.629,2.087 2.425,3.312 4.859,3.318 4.6179995,0.014 9.2379995,-0.139 13.8569995,-0.158 0.755,-0.004 1.171,-0.301 1.182,-1.033 0.012,-0.754 -0.423,-0.969 -1.183,-0.973 -1.778,-0.01 -5.824,-0.004 -6.04,-0.004 10e-4,-0.084 0.003,-0.586 10e-4,-0.67 z" style="fill: white; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_1jg9g5a" style="display: block;" transform="translate(1044 205)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="M 10.5,8.5 l 14.5,0 l 0,18 l -14.5,0 Z M 12.5,11.5 l 10.5,0 M 12.5,14.5 l 10.5,0 M 12.5,17.5 l 10.5,0 M 12.5,20.5 l 10.5,0 M 12.5,23.5 l 10.5,0 M 12.5,26.5 l 10.5,0 " style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_1jg9g5a_label" style="display: block;" transform="translate(1037 168)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="5.484375" y="9.899999999999999">Product </tspan><tspan x="0" y="23.099999999999998">available?</tspan></text></g><rect x="0" y="0" width="50" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0k2az84" style="display: block;" transform="translate(1143 183)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="16.65625" y="43.599999999999994">Pick product</tspan></text><path d="m 17,15 c 0.234,-0.01 5.604,0.008 8.029,0.004 0.808,0 1.271,-0.172 1.417,-0.752 0.227,-0.898 -0.334,-1.314 -1.338,-1.316 -2.467,-0.01 -7.886,-0.004 -8.108,-0.004 -0.014,-0.079 0.016,-0.533 0,-0.61 0.195,-0.042 8.507,0.006 9.616,0.002 0.877,-0.007 1.35,-0.438 1.353,-1.208 0.003,-0.768 -0.479,-1.09 -1.35,-1.091 -2.968,-0.002 -9.619,-0.013 -9.619,-0.013 v -0.591 c 0,0 5.052,-0.016 7.225,-0.016 0.888,-0.002 1.354,-0.416 1.351,-1.193 -0.006,-0.761 -0.492,-1.196 -1.361,-1.196 -3.473,-0.005 -10.86,-0.003 -11.0829995,-0.003 -0.022,-0.047 -0.045,-0.094 -0.069,-0.139 0.3939995,-0.319 2.0409995,-1.626 2.4149995,-2.017 0.469,-0.4870005 0.519,-1.1650005 0.162,-1.6040005 -0.414,-0.511 -0.973,-0.5 -1.48,-0.236 -1.4609995,0.764 -6.5999995,3.6430005 -7.7329995,4.2710005 -0.9,0.499 -1.516,1.253 -1.882,2.19 -0.37000002,0.95 -0.17,2.01 -0.166,2.979 0.004,0.718 -0.27300002,1.345 -0.055,2.063 0.629,2.087 2.425,3.312 4.859,3.318 4.6179995,0.014 9.2379995,-0.139 13.8569995,-0.158 0.755,-0.004 1.171,-0.301 1.182,-1.033 0.012,-0.754 -0.423,-0.969 -1.183,-0.973 -1.778,-0.01 -5.824,-0.004 -6.04,-0.004 10e-4,-0.084 0.003,-0.586 10e-4,-0.67 z" style="fill: white; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_0hqcq5y" style="display: block;" transform="translate(529 396)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 23,10 0,12.5 -12.5,0 0,5 12.5,0 0,12.5 5,0 0,-12.5 12.5,0 0,-5 -12.5,0 0,-12.5 -5,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_029qami" style="display: block;" transform="translate(895 396)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 23,13 0,7.116788321167883 -5.018248175182482,-5.018248175182482 -3.102189781021898,3.102189781021898 5.018248175182482,5.018248175182482 -7.116788321167883,0 0,4.37956204379562 7.116788321167883,0  -5.018248175182482,5.018248175182482 l 3.102189781021898,3.102189781021898 5.018248175182482,-5.018248175182482 0,7.116788321167883 4.37956204379562,0 0,-7.116788321167883 5.018248175182482,5.018248175182482 3.102189781021898,-3.102189781021898 -5.018248175182482,-5.018248175182482 7.116788321167883,0 0,-4.37956204379562 -7.116788321167883,0 5.018248175182482,-5.018248175182482 -3.102189781021898,-3.102189781021898 -5.018248175182482,5.018248175182482 0,-7.116788321167883 -4.37956204379562,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_029qami_label" style="display: block;" transform="translate(965 411)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">2 of 3 approve</tspan></text></g><rect x="0" y="0" width="71" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="83" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0eir53l" style="display: block;" transform="translate(682 518)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="11.9765625" y="43.599999999999994">Approve order</tspan></text><path d="m 15,12 c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5" style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 " style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z" style="fill: black; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_06oc8as" style="display: block;" transform="translate(1212 307)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="8.984375" y="43.599999999999994">Order canceled</tspan></text><path d="m 23,67 7,-5 0,10 z m 7.1,-0.3 6.9,-4.7 0,10 -6.9,-4.7 z" data-marker="compensation" style="fill: white; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1av8h1g" style="display: block;" transform="translate(1644 205)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1av8h1g_label" style="display: block;" transform="translate(1628 248)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Order process </tspan><tspan x="9.375" y="23.099999999999998">completed</tspan></text></g><rect x="0" y="0" width="70" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="82" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1g79lt0" style="display: block;" transform="translate(1306 198)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 23,10 0,12.5 -12.5,0 0,5 12.5,0 0,12.5 5,0 0,-12.5 12.5,0 0,-5 -12.5,0 0,-12.5 -5,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0x1yj54" style="display: block;" transform="translate(1459 183)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="26.6484375" y="36.4">Shipping </tspan><tspan x="29.65625" y="50.8">product</tspan></text><path d="m 17,15 c 0.234,-0.01 5.604,0.008 8.029,0.004 0.808,0 1.271,-0.172 1.417,-0.752 0.227,-0.898 -0.334,-1.314 -1.338,-1.316 -2.467,-0.01 -7.886,-0.004 -8.108,-0.004 -0.014,-0.079 0.016,-0.533 0,-0.61 0.195,-0.042 8.507,0.006 9.616,0.002 0.877,-0.007 1.35,-0.438 1.353,-1.208 0.003,-0.768 -0.479,-1.09 -1.35,-1.091 -2.968,-0.002 -9.619,-0.013 -9.619,-0.013 v -0.591 c 0,0 5.052,-0.016 7.225,-0.016 0.888,-0.002 1.354,-0.416 1.351,-1.193 -0.006,-0.761 -0.492,-1.196 -1.361,-1.196 -3.473,-0.005 -10.86,-0.003 -11.0829995,-0.003 -0.022,-0.047 -0.045,-0.094 -0.069,-0.139 0.3939995,-0.319 2.0409995,-1.626 2.4149995,-2.017 0.469,-0.4870005 0.519,-1.1650005 0.162,-1.6040005 -0.414,-0.511 -0.973,-0.5 -1.48,-0.236 -1.4609995,0.764 -6.5999995,3.6430005 -7.7329995,4.2710005 -0.9,0.499 -1.516,1.253 -1.882,2.19 -0.37000002,0.95 -0.17,2.01 -0.166,2.979 0.004,0.718 -0.27300002,1.345 -0.055,2.063 0.629,2.087 2.425,3.312 4.859,3.318 4.6179995,0.014 9.2379995,-0.139 13.8569995,-0.158 0.755,-0.004 1.171,-0.301 1.182,-1.033 0.012,-0.754 -0.423,-0.969 -1.183,-0.973 -1.778,-0.01 -5.824,-0.004 -6.04,-0.004 10e-4,-0.084 0.003,-0.586 10e-4,-0.67 z" style="fill: white; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_0865w6t" style="display: block;" transform="translate(1425 532)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="M 18,7.2 l 9,16.2 l -18,0 Z" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_1ex2tql" style="display: block;" transform="translate(1425 285)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/><path d="M 18,7.2 l 9,16.2 l -18,0 Z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_1ex2tql_label" style="display: block;" transform="translate(1407 328)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Signal to Sales </tspan><tspan x="6.328125" y="23.099999999999998">and Finance</tspan></text></g><rect x="0" y="0" width="74" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="86" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_03chpya" style="display: block;" transform="translate(1564 510)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="11.9765625" y="36.4">Send shipping </tspan><tspan x="17.3203125" y="50.8">confirmation</tspan></text><path d="m 5.984999999999999,4.997999999999999 l 0,14 l 21,0 l 0,-14 z l 10.5,6 l 10.5,-6" style="fill: black; stroke-width: 1px; stroke: white;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1h6y824" style="display: block;" transform="translate(1798 532)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1h6y824_label" style="display: block;" transform="translate(1774 575)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="20.8046875" y="9.899999999999999">Shipping </tspan><tspan x="0" y="23.099999999999998">confirmation sent</tspan></text></g><rect x="0" y="0" width="85" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="97" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_065u6lo" style="display: block;" transform="translate(682 656)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="11.9765625" y="43.599999999999994">Approve order</tspan></text><path d="m 15,12 c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5" style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 " style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z" style="fill: black; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_1yxb835" style="display: block;" transform="translate(682 1122)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="11.9765625" y="43.599999999999994">Approve order</tspan></text><path d="m 15,12 c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5" style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 " style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z" style="fill: black; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1xgk1v4" style="display: block;" transform="translate(1666 679)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><circle cx="25" cy="25" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><circle cx="25" cy="25" r="12" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="m 18,22 7.363636363636364,-4.909090909090909 7.363636363636364,4.909090909090909 -2.4545454545454546,9.818181818181818 -9.818181818181818,0 z" style="fill: none; stroke-width: 2px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1xgk1v4_label" style="display: block;" transform="translate(1668 642)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="1.8125" y="9.899999999999999">Payment </tspan><tspan x="0" y="23.099999999999998">received?</tspan></text></g><rect x="0" y="0" width="48" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="60" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_0c7ryf7" style="display: block;" transform="translate(1208 686)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="M 18,7.2 l 9,16.2 l -18,0 Z" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_1i5i7pu" style="display: block;" transform="translate(1371 664)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="15.3828125" y="43.599999999999994">Send invoice</tspan></text><path d="m 5.984999999999999,4.997999999999999 l 0,14 l 21,0 l 0,-14 z l 10.5,6 l 10.5,-6" style="fill: black; stroke-width: 1px; stroke: white;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateCatchEvent_1t3ck6c" style="display: block;" transform="translate(1746 810)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><circle cx="18" cy="18" r="11" style="stroke: black; stroke-width: 2px; fill: white;"/><path d="M 18,18 l 2.25,-7.5 m -2.25,7.5 l 5.25,1.5 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(0,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(30,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(60,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(90,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(120,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(150,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(180,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(210,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(240,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(270,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(300,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(330,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateCatchEvent_1t3ck6c_label" style="display: block;" transform="translate(1744 853)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">2 weeks</tspan></text></g><rect x="0" y="0" width="41" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="53" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0o1adt8" style="display: block;" transform="translate(1935 788)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="10.25" y="43.599999999999994">Send reminder</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_17uu1uf" style="display: block;" transform="translate(2384 679)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 16,15 7.42857142857143,9.714285714285715 -7.42857142857143,9.714285714285715 3.428571428571429,0 5.714285714285715,-7.464228571428572 5.714285714285715,7.464228571428572 3.428571428571429,0 -7.42857142857143,-9.714285714285715 7.42857142857143,-9.714285714285715 -3.428571428571429,0 -5.714285714285715,7.464228571428572 -5.714285714285715,-7.464228571428572 -3.428571428571429,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_09mbo43" style="display: block;" transform="translate(2538 686)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_09mbo43_label" style="display: block;" transform="translate(2530 729)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="3.34375" y="9.899999999999999">Payment </tspan><tspan x="0" y="23.099999999999998">completed</tspan></text></g><rect x="0" y="0" width="52" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="64" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ReceiveTask_0lqgtch" style="display: block;" transform="translate(1833 664)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="25.9921875" y="36.4">Payment </tspan><tspan x="27.328125" y="50.8">received</tspan></text><path d="m 6.3,5.6000000000000005 l 0,12.6 l 18.900000000000002,0 l 0,-12.6 z l 9.450000000000001,5.4 l 9.450000000000001,-5.4" style="fill: white; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1vtuh3e" style="display: block;" transform="translate(2068 803)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><circle cx="25" cy="25" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><circle cx="25" cy="25" r="12" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="m 18,22 7.363636363636364,-4.909090909090909 7.363636363636364,4.909090909090909 -2.4545454545454546,9.818181818181818 -9.818181818181818,0 z" style="fill: none; stroke-width: 2px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateCatchEvent_19yuybj" style="display: block;" transform="translate(2119 954)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><circle cx="18" cy="18" r="11" style="stroke: black; stroke-width: 2px; fill: white;"/><path d="M 18,18 l 2.25,-7.5 m -2.25,7.5 l 5.25,1.5 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(0,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(30,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(60,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(90,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(120,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(150,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(180,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(210,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(240,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(270,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(300,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(330,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateCatchEvent_19yuybj_label" style="display: block;" transform="translate(2119 997)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">1 week</tspan></text></g><rect x="0" y="0" width="36" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ReceiveTask_06648vq" style="display: block;" transform="translate(2196 788)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="25.9921875" y="36.4">Payment </tspan><tspan x="27.328125" y="50.8">received</tspan></text><path d="m 6.3,5.6000000000000005 l 0,12.6 l 18.900000000000002,0 l 0,-12.6 z l 9.450000000000001,5.4 l 9.450000000000001,-5.4" style="fill: white; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_12oam0i" style="display: block;" transform="translate(2196 932)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="5.78125" y="43.599999999999994">Escalate to boss</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_1wp3aa4" style="display: block;" transform="translate(2346 954)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="M 18,7.2 l 8,20 l -8,-7 l -8,7 Z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_1wp3aa4_label" style="display: block;" transform="translate(2319 917)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Escalation to boss</tspan></text></g><rect x="0" y="0" width="90" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="102" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0co2ik3" style="display: block;" transform="translate(2546 1122)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="10.2578125" y="43.599999999999994">Notify a lawyer</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_0j64vk4" style="display: block;" transform="translate(2696 1144)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="m 20.52,9.468 0,4.4375 -13.5,0 0,6.75 13.5,0 0,4.4375 9.84375,-7.8125 -9.84375,-7.8125 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_11bn98m" style="display: block;" transform="translate(2460 1291)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="m 20.52,9.468 0,4.4375 -13.5,0 0,6.75 13.5,0 0,4.4375 9.84375,-7.8125 -9.84375,-7.8125 z" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_02llg33" style="display: block;" transform="translate(2546 1269)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="20.984375" y="29.200000000000003">Call a debt </tspan><tspan x="24.9921875" y="43.6">collection </tspan><tspan x="30.453125" y="58">agency</tspan></text><path d="m 17,15 c 0.234,-0.01 5.604,0.008 8.029,0.004 0.808,0 1.271,-0.172 1.417,-0.752 0.227,-0.898 -0.334,-1.314 -1.338,-1.316 -2.467,-0.01 -7.886,-0.004 -8.108,-0.004 -0.014,-0.079 0.016,-0.533 0,-0.61 0.195,-0.042 8.507,0.006 9.616,0.002 0.877,-0.007 1.35,-0.438 1.353,-1.208 0.003,-0.768 -0.479,-1.09 -1.35,-1.091 -2.968,-0.002 -9.619,-0.013 -9.619,-0.013 v -0.591 c 0,0 5.052,-0.016 7.225,-0.016 0.888,-0.002 1.354,-0.416 1.351,-1.193 -0.006,-0.761 -0.492,-1.196 -1.361,-1.196 -3.473,-0.005 -10.86,-0.003 -11.0829995,-0.003 -0.022,-0.047 -0.045,-0.094 -0.069,-0.139 0.3939995,-0.319 2.0409995,-1.626 2.4149995,-2.017 0.469,-0.4870005 0.519,-1.1650005 0.162,-1.6040005 -0.414,-0.511 -0.973,-0.5 -1.48,-0.236 -1.4609995,0.764 -6.5999995,3.6430005 -7.7329995,4.2710005 -0.9,0.499 -1.516,1.253 -1.882,2.19 -0.37000002,0.95 -0.17,2.01 -0.166,2.979 0.004,0.718 -0.27300002,1.345 -0.055,2.063 0.629,2.087 2.425,3.312 4.859,3.318 4.6179995,0.014 9.2379995,-0.139 13.8569995,-0.158 0.755,-0.004 1.171,-0.301 1.182,-1.033 0.012,-0.754 -0.423,-0.969 -1.183,-0.973 -1.778,-0.01 -5.824,-0.004 -6.04,-0.004 10e-4,-0.084 0.003,-0.586 10e-4,-0.67 z" style="fill: white; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1j1n6ih" style="display: block;" transform="translate(2696 1291)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1j1n6ih_label" style="display: block;" transform="translate(2678 1334)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Debt collection </tspan><tspan x="2.4375" y="23.099999999999998">agency called</tspan></text></g><rect x="0" y="0" width="73" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="85" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="BoundaryEvent_1b66u6z" style="display: block;" transform="translate(1175 245)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 1;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="m 7.92,18 9,-6.5 0,13 z m 9.3,-0.4 8.7,-6.1 0,13 -8.7,-6.1 z" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="SequenceFlow_16d7ejn_label" style="display: block;" transform="translate(455 288)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Yes</tspan></text></g><rect x="0" y="0" width="18" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="30" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="SequenceFlow_1cu3i9f_label" style="display: block;" transform="translate(533 221)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">No</tspan></text></g><rect x="0" y="0" width="15" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="27" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Association_1jko10h" style="display: block;"><g class="djs-visual"><polyline points="1193,281 1193,347 1212,347 " style="fill: none; stroke: black; stroke-width: 2px; stroke-dasharray: 0.5, 5; stroke-linecap: round; stroke-linejoin: round; marker-end: url('#association-end-white-black-ee005gq9w0j4udiv8afm3fmyu');"/></g><polyline points="1193,281 1193,347 1212,347 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1187" y="275" width="31" height="78" class="djs-outline" style="fill: none;"/></g></g></g></g></svg>`
        let svg_de =`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="82 107 2729 1295" version="1.1"><defs><marker id="sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker><marker id="association-end-white-black-7kv0rpf6nwei2748kj2v7dv0e" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Participant_0t18keu" style="display: block;" transform="translate(88 113)"><g class="djs-visual"><rect x="0" y="0" width="2717" height="1283" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><polyline points="30,0 30,1283 " style="fill: none; stroke: black; stroke-width: 2px;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 1283)"><tspan x="599.15625" y="18.6">PC Build GmbH</tspan></text></g><rect x="0" y="0" width="2717" height="1283" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="2729" height="1295" class="djs-outline" style="fill: none;"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_1g1yyc3" style="display: block;" transform="translate(118 1101)"><g class="djs-visual"><rect x="0" y="0" width="2687" height="295" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 295)"><tspan x="134.3671875" y="18.6">CEO</tspan></text></g><rect x="0" y="0" width="2687" height="295" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="2699" height="307" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_0sfi6ra" style="display: block;" transform="translate(118 638)"><g class="djs-visual"><rect x="0" y="0" width="2687" height="463" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 463)"><tspan x="209.8984375" y="18.6">Finance</tspan></text></g><rect x="0" y="0" width="2687" height="463" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="2699" height="475" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_1jx5o3q" style="display: block;" transform="translate(118 113)"><g class="djs-visual"><rect x="0" y="0" width="2687" height="370" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 370)"><tspan x="131.359375" y="18.6">Auftragsbearbeitung</tspan></text></g><rect x="0" y="0" width="2687" height="370" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="2699" height="382" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_0e2krhp" style="display: block;" transform="translate(118 483)"><g class="djs-visual"><rect x="0" y="0" width="2687" height="155" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 155)"><tspan x="56.9609375" y="18.6">Vertrieb</tspan></text></g><rect x="0" y="0" width="2687" height="155" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="2699" height="167" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_17ab3ot" style="display: block;"><g class="djs-visual"><path d="m  2646,1309L2696,1309 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="2646,1309 2696,1309 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2640" y="1303" width="62" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1x3o8n5" style="display: block;"><g class="djs-visual"><path d="m  2496,1309L2546,1309 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="2496,1309 2546,1309 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2490" y="1303" width="62" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_11f0t27" style="display: block;"><g class="djs-visual"><path d="m  2646,1162L2696,1162 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="2646,1162 2696,1162 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2640" y="1156" width="62" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0wf39d1" style="display: block;"><g class="djs-visual"><path d="m  2364,990L2364,1162 L2546,1162 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="2364,990 2364,1162 2546,1162 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2358" y="984" width="194" height="184" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1s0polm" style="display: block;"><g class="djs-visual"><path d="m  2296,972L2346,972 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="2296,972 2346,972 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2290" y="966" width="62" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1d16zov" style="display: block;"><g class="djs-visual"><path d="m  2155,972L2196,972 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="2155,972 2196,972 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2149" y="966" width="53" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0snk47z" style="display: block;"><g class="djs-visual"><path d="m  2118,828L2196,828 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="2118,828 2196,828 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2112" y="822" width="90" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0bnvc0y" style="display: block;"><g class="djs-visual"><path d="m  2093,853L2093,972 L2119,972 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="2093,853 2093,972 2119,972 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2087" y="847" width="38" height="131" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1q3ae3c" style="display: block;"><g class="djs-visual"><path d="m  2434,704L2538,704 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="2434,704 2538,704 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2428" y="698" width="116" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0w1vlfw" style="display: block;"><g class="djs-visual"><path d="m  2296,828L2409,828 L2409,729 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="2296,828 2409,828 2409,729 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2290" y="723" width="125" height="111" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1oa21sv" style="display: block;"><g class="djs-visual"><path d="m  1933,704L2384,704 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="1933,704 2384,704 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1927" y="698" width="463" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0m3xa9e" style="display: block;"><g class="djs-visual"><path d="m  2035,828L2068,828 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="2035,828 2068,828 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="2029" y="822" width="45" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0j5fc9w" style="display: block;"><g class="djs-visual"><path d="m  1782,828L1935,828 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="1782,828 1935,828 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1776" y="822" width="165" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1sngvcu" style="display: block;"><g class="djs-visual"><path d="m  1244,704L1371,704 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="1244,704 1371,704 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1238" y="698" width="139" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0sk99e6" style="display: block;"><g class="djs-visual"><path d="m  1716,704L1833,704 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="1716,704 1833,704 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1710" y="698" width="129" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1ixxigw" style="display: block;"><g class="djs-visual"><path d="m  1691,729L1691,828 L1746,828 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="1691,729 1691,828 1746,828 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1685" y="723" width="67" height="111" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0xv29bu" style="display: block;"><g class="djs-visual"><path d="m  1471,704L1666,704 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="1471,704 1666,704 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1465" y="698" width="207" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0zlivxk" style="display: block;"><g class="djs-visual"><path d="m  1664,550L1798,550 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="1664,550 1798,550 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1658" y="544" width="146" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0zda5jx" style="display: block;"><g class="djs-visual"><path d="m  224,223L274,223 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="224,223 274,223 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="218" y="217" width="62" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1eyrb38" style="display: block;"><g class="djs-visual"><path d="m  374,223L424,223 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="374,223 424,223 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="368" y="217" width="62" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1cu3i9f" style="display: block;"><g class="djs-visual"><path d="m  474,223L870,223 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="474,223 870,223 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="468" y="217" width="408" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_16d7ejn" style="display: block;"><g class="djs-visual"><path d="m  449,248L449,333 L504,333 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="449,248 449,333 504,333 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="443" y="242" width="67" height="97" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0u388lk" style="display: block;"><g class="djs-visual"><path d="m  554,373L554,396 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="554,373 554,396 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="548" y="367" width="12" height="35" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1wj3ufv" style="display: block;"><g class="djs-visual"><path d="m  970,223L1044,223 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="970,223 1044,223 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="964" y="217" width="86" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_04dfqfo" style="display: block;"><g class="djs-visual"><path d="m  1080,223L1143,223 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="1080,223 1143,223 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1074" y="217" width="75" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0ujoqli" style="display: block;"><g class="djs-visual"><path d="m  920,396L920,263 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="920,396 920,263 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="914" y="257" width="12" height="145" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1vmbe2q" style="display: block;"><g class="djs-visual"><path d="m  554,446L554,558 L682,558 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="554,446 554,558 682,558 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="548" y="440" width="140" height="124" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_01p7tux" style="display: block;"><g class="djs-visual"><path d="m  554,446L554,696 L682,696 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="554,446 554,696 682,696 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="548" y="440" width="140" height="262" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0uaoe37" style="display: block;"><g class="djs-visual"><path d="m  554,446L554,1162 L682,1162 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="554,446 554,1162 682,1162 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="548" y="440" width="140" height="728" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_04vn9ek" style="display: block;"><g class="djs-visual"><path d="m  782,696L920,696 L920,446 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="782,696 920,696 920,446 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="776" y="440" width="150" height="262" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0y8py6x" style="display: block;"><g class="djs-visual"><path d="m  782,558L920,558 L920,446 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="782,558 920,558 920,446 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="776" y="440" width="150" height="124" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0cqxm2v" style="display: block;"><g class="djs-visual"><path d="m  782,1162L920,1162 L920,446 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="782,1162 920,1162 920,446 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="776" y="440" width="150" height="728" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0sbomd1" style="display: block;"><g class="djs-visual"><path d="m  1559,223L1644,223 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="1559,223 1644,223 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1553" y="217" width="97" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1d2jttr" style="display: block;"><g class="djs-visual"><path d="m  1243,223L1306,223 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="1243,223 1306,223 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1237" y="217" width="75" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1atc62j" style="display: block;"><g class="djs-visual"><path d="m  1331,248L1331,303 L1425,303 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="1331,248 1331,303 1425,303 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1325" y="242" width="106" height="67" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0vrb9tf" style="display: block;"><g class="djs-visual"><path d="m  1356,223L1459,223 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="1356,223 1459,223 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1350" y="217" width="115" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1kvxir8" style="display: block;"><g class="djs-visual"><path d="m  1461,550L1564,550 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="1461,550 1564,550 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1455" y="544" width="115" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_1" style="display: block;" transform="translate(188 205)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 8.459999999999999,11.34 l 0,12.6 l 18.900000000000002,0 l 0,-12.6 z l 9.450000000000001,5.4 l 9.450000000000001,-5.4" style="fill: white; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_1_label" style="display: block;" transform="translate(168 248)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Bestellung geht </tspan><tspan x="30.90625" y="23.099999999999998">ein</tspan></text></g><rect x="0" y="0" width="77" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="89" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_1ydvkkn" style="display: block;" transform="translate(274 183)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="21.984375" y="36.4">Bestellung </tspan><tspan x="32.9921875" y="50.8">prüfen</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1c7ol8g" style="display: block;" transform="translate(424 198)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 16,15 7.42857142857143,9.714285714285715 -7.42857142857143,9.714285714285715 3.428571428571429,0 5.714285714285715,-7.464228571428572 5.714285714285715,7.464228571428572 3.428571428571429,0 -7.42857142857143,-9.714285714285715 7.42857142857143,-9.714285714285715 -3.428571428571429,0 -5.714285714285715,7.464228571428572 -5.714285714285715,-7.464228571428572 -3.428571428571429,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1c7ol8g_label" style="display: block;" transform="translate(419 174)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">größer 10k?</tspan></text></g><rect x="0" y="0" width="60" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="72" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0se57ht" style="display: block;" transform="translate(504 293)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="22.984375" y="36.4">Freigeben </tspan><tspan x="32.65625" y="50.8">lassen</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_1anf4b1" style="display: block;" transform="translate(870 183)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="7.5" y="43.599999999999994">Weise Picker zu</tspan></text><path d="m 17,15 c 0.234,-0.01 5.604,0.008 8.029,0.004 0.808,0 1.271,-0.172 1.417,-0.752 0.227,-0.898 -0.334,-1.314 -1.338,-1.316 -2.467,-0.01 -7.886,-0.004 -8.108,-0.004 -0.014,-0.079 0.016,-0.533 0,-0.61 0.195,-0.042 8.507,0.006 9.616,0.002 0.877,-0.007 1.35,-0.438 1.353,-1.208 0.003,-0.768 -0.479,-1.09 -1.35,-1.091 -2.968,-0.002 -9.619,-0.013 -9.619,-0.013 v -0.591 c 0,0 5.052,-0.016 7.225,-0.016 0.888,-0.002 1.354,-0.416 1.351,-1.193 -0.006,-0.761 -0.492,-1.196 -1.361,-1.196 -3.473,-0.005 -10.86,-0.003 -11.0829995,-0.003 -0.022,-0.047 -0.045,-0.094 -0.069,-0.139 0.3939995,-0.319 2.0409995,-1.626 2.4149995,-2.017 0.469,-0.4870005 0.519,-1.1650005 0.162,-1.6040005 -0.414,-0.511 -0.973,-0.5 -1.48,-0.236 -1.4609995,0.764 -6.5999995,3.6430005 -7.7329995,4.2710005 -0.9,0.499 -1.516,1.253 -1.882,2.19 -0.37000002,0.95 -0.17,2.01 -0.166,2.979 0.004,0.718 -0.27300002,1.345 -0.055,2.063 0.629,2.087 2.425,3.312 4.859,3.318 4.6179995,0.014 9.2379995,-0.139 13.8569995,-0.158 0.755,-0.004 1.171,-0.301 1.182,-1.033 0.012,-0.754 -0.423,-0.969 -1.183,-0.973 -1.778,-0.01 -5.824,-0.004 -6.04,-0.004 10e-4,-0.084 0.003,-0.586 10e-4,-0.67 z" style="fill: white; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_1jg9g5a" style="display: block;" transform="translate(1044 205)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="M 10.5,8.5 l 14.5,0 l 0,18 l -14.5,0 Z M 12.5,11.5 l 10.5,0 M 12.5,14.5 l 10.5,0 M 12.5,17.5 l 10.5,0 M 12.5,20.5 l 10.5,0 M 12.5,23.5 l 10.5,0 M 12.5,26.5 l 10.5,0 " style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_1jg9g5a_label" style="display: block;" transform="translate(1035 168)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="6.609375" y="9.899999999999999">Produkt </tspan><tspan x="0" y="23.099999999999998">verfügbar?</tspan></text></g><rect x="0" y="0" width="53" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="65" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0k2az84" style="display: block;" transform="translate(1143 183)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="22.390625" y="36.4">Entnehme </tspan><tspan x="28.9921875" y="50.8">Produkt</tspan></text><path d="m 17,15 c 0.234,-0.01 5.604,0.008 8.029,0.004 0.808,0 1.271,-0.172 1.417,-0.752 0.227,-0.898 -0.334,-1.314 -1.338,-1.316 -2.467,-0.01 -7.886,-0.004 -8.108,-0.004 -0.014,-0.079 0.016,-0.533 0,-0.61 0.195,-0.042 8.507,0.006 9.616,0.002 0.877,-0.007 1.35,-0.438 1.353,-1.208 0.003,-0.768 -0.479,-1.09 -1.35,-1.091 -2.968,-0.002 -9.619,-0.013 -9.619,-0.013 v -0.591 c 0,0 5.052,-0.016 7.225,-0.016 0.888,-0.002 1.354,-0.416 1.351,-1.193 -0.006,-0.761 -0.492,-1.196 -1.361,-1.196 -3.473,-0.005 -10.86,-0.003 -11.0829995,-0.003 -0.022,-0.047 -0.045,-0.094 -0.069,-0.139 0.3939995,-0.319 2.0409995,-1.626 2.4149995,-2.017 0.469,-0.4870005 0.519,-1.1650005 0.162,-1.6040005 -0.414,-0.511 -0.973,-0.5 -1.48,-0.236 -1.4609995,0.764 -6.5999995,3.6430005 -7.7329995,4.2710005 -0.9,0.499 -1.516,1.253 -1.882,2.19 -0.37000002,0.95 -0.17,2.01 -0.166,2.979 0.004,0.718 -0.27300002,1.345 -0.055,2.063 0.629,2.087 2.425,3.312 4.859,3.318 4.6179995,0.014 9.2379995,-0.139 13.8569995,-0.158 0.755,-0.004 1.171,-0.301 1.182,-1.033 0.012,-0.754 -0.423,-0.969 -1.183,-0.973 -1.778,-0.01 -5.824,-0.004 -6.04,-0.004 10e-4,-0.084 0.003,-0.586 10e-4,-0.67 z" style="fill: white; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_0hqcq5y" style="display: block;" transform="translate(529 396)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 23,10 0,12.5 -12.5,0 0,5 12.5,0 0,12.5 5,0 0,-12.5 12.5,0 0,-5 -12.5,0 0,-12.5 -5,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_029qami" style="display: block;" transform="translate(895 396)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 23,13 0,7.116788321167883 -5.018248175182482,-5.018248175182482 -3.102189781021898,3.102189781021898 5.018248175182482,5.018248175182482 -7.116788321167883,0 0,4.37956204379562 7.116788321167883,0  -5.018248175182482,5.018248175182482 l 3.102189781021898,3.102189781021898 5.018248175182482,-5.018248175182482 0,7.116788321167883 4.37956204379562,0 0,-7.116788321167883 5.018248175182482,5.018248175182482 3.102189781021898,-3.102189781021898 -5.018248175182482,-5.018248175182482 7.116788321167883,0 0,-4.37956204379562 -7.116788321167883,0 5.018248175182482,-5.018248175182482 -3.102189781021898,-3.102189781021898 -5.018248175182482,5.018248175182482 0,-7.116788321167883 -4.37956204379562,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_029qami_label" style="display: block;" transform="translate(956 411)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">2 von 3 geben frei</tspan></text></g><rect x="0" y="0" width="89" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="101" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0eir53l" style="display: block;" transform="translate(682 518)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="21.984375" y="36.4">Bestellung </tspan><tspan x="25.3828125" y="50.8">freigeben</tspan></text><path d="m 15,12 c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5" style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 " style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z" style="fill: black; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_06oc8as" style="display: block;" transform="translate(1212 307)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="31.0546875" y="36.4">Auftrag </tspan><tspan x="14.9765625" y="50.8">abgebrochen</tspan></text><path d="m 23,67 7,-5 0,10 z m 7.1,-0.3 6.9,-4.7 0,10 -6.9,-4.7 z" data-marker="compensation" style="fill: white; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1av8h1g" style="display: block;" transform="translate(1644 205)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1av8h1g_label" style="display: block;" transform="translate(1618 248)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="2.1484375" y="9.899999999999999">Bestellungsvorga</tspan><tspan x="0" y="23.099999999999998">ng abgeschlossen</tspan></text></g><rect x="0" y="0" width="89" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="101" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1g79lt0" style="display: block;" transform="translate(1306 198)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 23,10 0,12.5 -12.5,0 0,5 12.5,0 0,12.5 5,0 0,-12.5 12.5,0 0,-5 -12.5,0 0,-12.5 -5,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0x1yj54" style="display: block;" transform="translate(1459 183)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="24.78125" y="36.4">Versende </tspan><tspan x="28.9921875" y="50.8">Produkt</tspan></text><path d="m 17,15 c 0.234,-0.01 5.604,0.008 8.029,0.004 0.808,0 1.271,-0.172 1.417,-0.752 0.227,-0.898 -0.334,-1.314 -1.338,-1.316 -2.467,-0.01 -7.886,-0.004 -8.108,-0.004 -0.014,-0.079 0.016,-0.533 0,-0.61 0.195,-0.042 8.507,0.006 9.616,0.002 0.877,-0.007 1.35,-0.438 1.353,-1.208 0.003,-0.768 -0.479,-1.09 -1.35,-1.091 -2.968,-0.002 -9.619,-0.013 -9.619,-0.013 v -0.591 c 0,0 5.052,-0.016 7.225,-0.016 0.888,-0.002 1.354,-0.416 1.351,-1.193 -0.006,-0.761 -0.492,-1.196 -1.361,-1.196 -3.473,-0.005 -10.86,-0.003 -11.0829995,-0.003 -0.022,-0.047 -0.045,-0.094 -0.069,-0.139 0.3939995,-0.319 2.0409995,-1.626 2.4149995,-2.017 0.469,-0.4870005 0.519,-1.1650005 0.162,-1.6040005 -0.414,-0.511 -0.973,-0.5 -1.48,-0.236 -1.4609995,0.764 -6.5999995,3.6430005 -7.7329995,4.2710005 -0.9,0.499 -1.516,1.253 -1.882,2.19 -0.37000002,0.95 -0.17,2.01 -0.166,2.979 0.004,0.718 -0.27300002,1.345 -0.055,2.063 0.629,2.087 2.425,3.312 4.859,3.318 4.6179995,0.014 9.2379995,-0.139 13.8569995,-0.158 0.755,-0.004 1.171,-0.301 1.182,-1.033 0.012,-0.754 -0.423,-0.969 -1.183,-0.973 -1.778,-0.01 -5.824,-0.004 -6.04,-0.004 10e-4,-0.084 0.003,-0.586 10e-4,-0.67 z" style="fill: white; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_0865w6t" style="display: block;" transform="translate(1425 532)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="M 18,7.2 l 9,16.2 l -18,0 Z" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_1ex2tql" style="display: block;" transform="translate(1425 285)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/><path d="M 18,7.2 l 9,16.2 l -18,0 Z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_1ex2tql_label" style="display: block;" transform="translate(1414 328)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="6.328125" y="9.899999999999999">Signal an </tspan><tspan x="0" y="23.099999999999998">Vertrieb und </tspan><tspan x="9.6953125" y="36.3">Finance</tspan></text></g><rect x="0" y="0" width="59" height="40" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="71" height="52" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_03chpya" style="display: block;" transform="translate(1564 510)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="21.125" y="29.200000000000003">Verschicke </tspan><tspan x="10.703125" y="43.6">Versandbestäti</tspan><tspan x="36.65625" y="58">gung</tspan></text><path d="m 5.984999999999999,4.997999999999999 l 0,14 l 21,0 l 0,-14 z l 10.5,6 l 10.5,-6" style="fill: black; stroke-width: 1px; stroke: white;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1h6y824" style="display: block;" transform="translate(1798 532)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1h6y824_label" style="display: block;" transform="translate(1774 575)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Versandbestätigu</tspan><tspan x="9.6796875" y="23.099999999999998">ng verschickt</tspan></text></g><rect x="0" y="0" width="85" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="97" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_065u6lo" style="display: block;" transform="translate(682 656)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="21.984375" y="36.4">Bestellung </tspan><tspan x="25.3828125" y="50.8">freigeben</tspan></text><path d="m 15,12 c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5" style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 " style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z" style="fill: black; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_1yxb835" style="display: block;" transform="translate(682 1122)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="21.984375" y="36.4">Bestellung </tspan><tspan x="22.984375" y="50.8">Freigeben</tspan></text><path d="m 15,12 c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5" style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 " style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z" style="fill: black; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1xgk1v4" style="display: block;" transform="translate(1666 679)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><circle cx="25" cy="25" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><circle cx="25" cy="25" r="12" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="m 18,22 7.363636363636364,-4.909090909090909 7.363636363636364,4.909090909090909 -2.4545454545454546,9.818181818181818 -9.818181818181818,0 z" style="fill: none; stroke-width: 2px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1xgk1v4_label" style="display: block;" transform="translate(1656 642)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="14.9921875" y="9.899999999999999">Zahlung </tspan><tspan x="0" y="23.099999999999998">eingegangen?</tspan></text></g><rect x="0" y="0" width="71" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="83" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_0c7ryf7" style="display: block;" transform="translate(1208 686)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="M 18,7.2 l 9,16.2 l -18,0 Z" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_1i5i7pu" style="display: block;" transform="translate(1371 664)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="21.125" y="36.4">Verschicke </tspan><tspan x="22.6484375" y="50.8">Rechnung</tspan></text><path d="m 5.984999999999999,4.997999999999999 l 0,14 l 21,0 l 0,-14 z l 10.5,6 l 10.5,-6" style="fill: black; stroke-width: 1px; stroke: white;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateCatchEvent_1t3ck6c" style="display: block;" transform="translate(1746 810)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><circle cx="18" cy="18" r="11" style="stroke: black; stroke-width: 2px; fill: white;"/><path d="M 18,18 l 2.25,-7.5 m -2.25,7.5 l 5.25,1.5 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(0,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(30,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(60,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(90,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(120,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(150,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(180,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(210,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(240,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(270,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(300,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(330,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateCatchEvent_1t3ck6c_label" style="display: block;" transform="translate(1739 853)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">2 Wochen</tspan></text></g><rect x="0" y="0" width="50" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0o1adt8" style="display: block;" transform="translate(1935 788)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="24.984375" y="36.4">Mahnung </tspan><tspan x="18.71875" y="50.8">verschicken</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_17uu1uf" style="display: block;" transform="translate(2384 679)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 16,15 7.42857142857143,9.714285714285715 -7.42857142857143,9.714285714285715 3.428571428571429,0 5.714285714285715,-7.464228571428572 5.714285714285715,7.464228571428572 3.428571428571429,0 -7.42857142857143,-9.714285714285715 7.42857142857143,-9.714285714285715 -3.428571428571429,0 -5.714285714285715,7.464228571428572 -5.714285714285715,-7.464228571428572 -3.428571428571429,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_09mbo43" style="display: block;" transform="translate(2538 686)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_09mbo43_label" style="display: block;" transform="translate(2519 729)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="16.8125" y="9.899999999999999">Zahlung </tspan><tspan x="0" y="23.099999999999998">abgeschlossen</tspan></text></g><rect x="0" y="0" width="74" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="86" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ReceiveTask_0lqgtch" style="display: block;" transform="translate(1833 664)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="28.3203125" y="36.4">Zahlung </tspan><tspan x="15.3046875" y="50.8">eingegangen</tspan></text><path d="m 6.3,5.6000000000000005 l 0,12.6 l 18.900000000000002,0 l 0,-12.6 z l 9.450000000000001,5.4 l 9.450000000000001,-5.4" style="fill: white; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1vtuh3e" style="display: block;" transform="translate(2068 803)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><circle cx="25" cy="25" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><circle cx="25" cy="25" r="12" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="m 18,22 7.363636363636364,-4.909090909090909 7.363636363636364,4.909090909090909 -2.4545454545454546,9.818181818181818 -9.818181818181818,0 z" style="fill: none; stroke-width: 2px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateCatchEvent_19yuybj" style="display: block;" transform="translate(2119 954)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><circle cx="18" cy="18" r="11" style="stroke: black; stroke-width: 2px; fill: white;"/><path d="M 18,18 l 2.25,-7.5 m -2.25,7.5 l 5.25,1.5 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(0,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(30,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(60,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(90,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(120,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(150,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(180,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(210,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(240,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(270,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(300,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/><path d="M 18,18 m 0,7.5 l -0,2.25 " transform="rotate(330,18,18)" style="fill: none; stroke-width: 1px; stroke: black; stroke-linecap: square;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateCatchEvent_19yuybj_label" style="display: block;" transform="translate(2115 997)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">1 Woche</tspan></text></g><rect x="0" y="0" width="44" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="56" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ReceiveTask_06648vq" style="display: block;" transform="translate(2196 788)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="28.3203125" y="36.4">Zahlung </tspan><tspan x="15.3046875" y="50.8">eingegangen</tspan></text><path d="m 6.3,5.6000000000000005 l 0,12.6 l 18.900000000000002,0 l 0,-12.6 z l 9.450000000000001,5.4 l 9.450000000000001,-5.4" style="fill: white; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_12oam0i" style="display: block;" transform="translate(2196 932)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="27.984375" y="36.4">An Chef </tspan><tspan x="22.65625" y="50.8">eskalieren</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_1wp3aa4" style="display: block;" transform="translate(2346 954)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="M 18,7.2 l 8,20 l -8,-7 l -8,7 Z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_1wp3aa4_label" style="display: block;" transform="translate(2330 917)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Eskalation an </tspan><tspan x="21.0703125" y="23.099999999999998">Chef</tspan></text></g><rect x="0" y="0" width="67" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="79" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0co2ik3" style="display: block;" transform="translate(2546 1122)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="32.0625" y="36.4">Anwalt </tspan><tspan x="16.046875" y="50.8">verständigen</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_0j64vk4" style="display: block;" transform="translate(2696 1144)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="m 20.52,9.468 0,4.4375 -13.5,0 0,6.75 13.5,0 0,4.4375 9.84375,-7.8125 -9.84375,-7.8125 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_11bn98m" style="display: block;" transform="translate(2460 1291)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="m 20.52,9.468 0,4.4375 -13.5,0 0,6.75 13.5,0 0,4.4375 9.84375,-7.8125 -9.84375,-7.8125 z" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_02llg33" style="display: block;" transform="translate(2546 1269)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="8.7109375" y="36.4">Inkassounterne</tspan><tspan x="12.9765625" y="50.8">hmen anrufen</tspan></text><path d="m 17,15 c 0.234,-0.01 5.604,0.008 8.029,0.004 0.808,0 1.271,-0.172 1.417,-0.752 0.227,-0.898 -0.334,-1.314 -1.338,-1.316 -2.467,-0.01 -7.886,-0.004 -8.108,-0.004 -0.014,-0.079 0.016,-0.533 0,-0.61 0.195,-0.042 8.507,0.006 9.616,0.002 0.877,-0.007 1.35,-0.438 1.353,-1.208 0.003,-0.768 -0.479,-1.09 -1.35,-1.091 -2.968,-0.002 -9.619,-0.013 -9.619,-0.013 v -0.591 c 0,0 5.052,-0.016 7.225,-0.016 0.888,-0.002 1.354,-0.416 1.351,-1.193 -0.006,-0.761 -0.492,-1.196 -1.361,-1.196 -3.473,-0.005 -10.86,-0.003 -11.0829995,-0.003 -0.022,-0.047 -0.045,-0.094 -0.069,-0.139 0.3939995,-0.319 2.0409995,-1.626 2.4149995,-2.017 0.469,-0.4870005 0.519,-1.1650005 0.162,-1.6040005 -0.414,-0.511 -0.973,-0.5 -1.48,-0.236 -1.4609995,0.764 -6.5999995,3.6430005 -7.7329995,4.2710005 -0.9,0.499 -1.516,1.253 -1.882,2.19 -0.37000002,0.95 -0.17,2.01 -0.166,2.979 0.004,0.718 -0.27300002,1.345 -0.055,2.063 0.629,2.087 2.425,3.312 4.859,3.318 4.6179995,0.014 9.2379995,-0.139 13.8569995,-0.158 0.755,-0.004 1.171,-0.301 1.182,-1.033 0.012,-0.754 -0.423,-0.969 -1.183,-0.973 -1.778,-0.01 -5.824,-0.004 -6.04,-0.004 10e-4,-0.084 0.003,-0.586 10e-4,-0.67 z" style="fill: white; stroke-width: 0.5px; stroke: black;"/></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1j1n6ih" style="display: block;" transform="translate(2696 1291)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1j1n6ih_label" style="display: block;" transform="translate(2673 1334)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Inkassounterneh</tspan><tspan x="3.671875" y="23.099999999999998">men angerufen</tspan></text></g><rect x="0" y="0" width="82" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="94" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="BoundaryEvent_1b66u6z" style="display: block;" transform="translate(1175 245)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 1;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="m 7.92,18 9,-6.5 0,13 z m 9.3,-0.4 8.7,-6.1 0,13 -8.7,-6.1 z" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="SequenceFlow_16d7ejn_label" style="display: block;" transform="translate(458 288)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Ja</tspan></text></g><rect x="0" y="0" width="12" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="24" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="SequenceFlow_1cu3i9f_label" style="display: block;" transform="translate(529 221)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">nein</tspan></text></g><rect x="0" y="0" width="22" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="34" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Association_1jko10h" style="display: block;"><g class="djs-visual"><polyline points="1193,281 1193,347 1212,347 " style="fill: none; stroke: black; stroke-width: 2px; stroke-dasharray: 0.5, 5; stroke-linecap: round; stroke-linejoin: round; marker-end: url('#association-end-white-black-7kv0rpf6nwei2748kj2v7dv0e');"/></g><polyline points="1193,281 1193,347 1212,347 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="1187" y="275" width="31" height="78" class="djs-outline" style="fill: none;"/></g></g></g></g></svg>`

        super (xml_de,xml_en,svg_de, svg_en)

    }
}

