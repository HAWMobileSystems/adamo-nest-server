import { Abstract_Modell } from "../Abstract_Modell"

export class Level1_Modell_2 extends Abstract_Modell{

    
    constructor(){
        let xml_en =`<?xml version="1.0" encoding="UTF-8"?><definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="Camunda Modeler" exporterVersion="2.2.4"><process id="Process_1" isExecutable="false"><startEvent id="StartEvent_1y45yut" name="Customer request received"><outgoing>SequenceFlow_0h21x7r</outgoing></startEvent><task id="Task_1hcentk" name="Prepare order"><incoming>SequenceFlow_0h21x7r</incoming><outgoing>SequenceFlow_0wnb4ke</outgoing></task><sequenceFlow id="SequenceFlow_0h21x7r" sourceRef="StartEvent_1y45yut" targetRef="Task_1hcentk" /><sequenceFlow id="SequenceFlow_0wnb4ke" sourceRef="Task_1hcentk" targetRef="ExclusiveGateway_1863vh6" /><task id="Task_0y9n49p" name="Send order"><incoming>SequenceFlow_1652c7j</incoming><outgoing>SequenceFlow_0bgdiq2</outgoing></task><sequenceFlow id="SequenceFlow_0bgdiq2" sourceRef="Task_0y9n49p" targetRef="ExclusiveGateway_1n3ncg4" /><endEvent id="EndEvent_0j1jntq" name="Customer request completed"><incoming>SequenceFlow_1hfz8v3</incoming></endEvent><exclusiveGateway id="ExclusiveGateway_1863vh6" name="Product available?"><incoming>SequenceFlow_0wnb4ke</incoming><outgoing>SequenceFlow_1652c7j</outgoing><outgoing>SequenceFlow_09lfits</outgoing></exclusiveGateway><sequenceFlow id="SequenceFlow_1652c7j" name="Yes" sourceRef="ExclusiveGateway_1863vh6" targetRef="Task_0y9n49p" /><task id="Task_0urit8k" name="Reject order"><incoming>SequenceFlow_09lfits</incoming><outgoing>SequenceFlow_0zxbgjr</outgoing></task><sequenceFlow id="SequenceFlow_09lfits" name="No" sourceRef="ExclusiveGateway_1863vh6" targetRef="Task_0urit8k" /><sequenceFlow id="SequenceFlow_0zxbgjr" sourceRef="Task_0urit8k" targetRef="ExclusiveGateway_1n3ncg4" /><exclusiveGateway id="ExclusiveGateway_1n3ncg4"><incoming>SequenceFlow_0bgdiq2</incoming><incoming>SequenceFlow_0zxbgjr</incoming><outgoing>SequenceFlow_1hfz8v3</outgoing></exclusiveGateway><sequenceFlow id="SequenceFlow_1hfz8v3" sourceRef="ExclusiveGateway_1n3ncg4" targetRef="EndEvent_0j1jntq" /></process><bpmndi:BPMNDiagram id="BpmnDiagram_1"><bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1"><bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut"><omgdc:Bounds x="152" y="212" width="36" height="36" /><bpmndi:BPMNLabel><omgdc:Bounds x="128" y="255" width="89" height="27" /></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNShape id="Task_1hcentk_di" bpmnElement="Task_1hcentk"><omgdc:Bounds x="280" y="190" width="100" height="80" /></bpmndi:BPMNShape><bpmndi:BPMNEdge id="SequenceFlow_0h21x7r_di" bpmnElement="SequenceFlow_0h21x7r"><omgdi:waypoint x="188" y="230" /><omgdi:waypoint x="280" y="230" /></bpmndi:BPMNEdge><bpmndi:BPMNEdge id="SequenceFlow_0wnb4ke_di" bpmnElement="SequenceFlow_0wnb4ke"><omgdi:waypoint x="380" y="230" /><omgdi:waypoint x="475" y="230" /></bpmndi:BPMNEdge><bpmndi:BPMNShape id="Task_0y9n49p_di" bpmnElement="Task_0y9n49p"><omgdc:Bounds x="600" y="80" width="100" height="80" /></bpmndi:BPMNShape><bpmndi:BPMNEdge id="SequenceFlow_0bgdiq2_di" bpmnElement="SequenceFlow_0bgdiq2"><omgdi:waypoint x="700" y="120" /><omgdi:waypoint x="790" y="120" /><omgdi:waypoint x="790" y="205" /></bpmndi:BPMNEdge><bpmndi:BPMNShape id="EndEvent_0j1jntq_di" bpmnElement="EndEvent_0j1jntq"><omgdc:Bounds x="882" y="212" width="36" height="36" /><bpmndi:BPMNLabel><omgdc:Bounds x="856" y="175" width="89" height="27" /></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNShape id="ExclusiveGateway_1863vh6_di" bpmnElement="ExclusiveGateway_1863vh6" isMarkerVisible="true"><omgdc:Bounds x="475" y="205" width="50" height="50" /><bpmndi:BPMNLabel><omgdc:Bounds x="536" y="217" width="50" height="27" /></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNEdge id="SequenceFlow_1652c7j_di" bpmnElement="SequenceFlow_1652c7j"><omgdi:waypoint x="500" y="205" /><omgdi:waypoint x="500" y="120" /><omgdi:waypoint x="600" y="120" /><bpmndi:BPMNLabel><omgdc:Bounds x="542" y="102" width="18" height="14" /></bpmndi:BPMNLabel></bpmndi:BPMNEdge><bpmndi:BPMNShape id="Task_0urit8k_di" bpmnElement="Task_0urit8k"><omgdc:Bounds x="600" y="300" width="100" height="80" /></bpmndi:BPMNShape><bpmndi:BPMNEdge id="SequenceFlow_09lfits_di" bpmnElement="SequenceFlow_09lfits"><omgdi:waypoint x="500" y="255" /><omgdi:waypoint x="500" y="340" /><omgdi:waypoint x="600" y="340" /><bpmndi:BPMNLabel><omgdc:Bounds x="508" y="295" width="15" height="14" /></bpmndi:BPMNLabel></bpmndi:BPMNEdge><bpmndi:BPMNEdge id="SequenceFlow_0zxbgjr_di" bpmnElement="SequenceFlow_0zxbgjr"><omgdi:waypoint x="700" y="340" /><omgdi:waypoint x="790" y="340" /><omgdi:waypoint x="790" y="255" /></bpmndi:BPMNEdge><bpmndi:BPMNShape id="ExclusiveGateway_1n3ncg4_di" bpmnElement="ExclusiveGateway_1n3ncg4" isMarkerVisible="true"><omgdc:Bounds x="765" y="205" width="50" height="50" /></bpmndi:BPMNShape><bpmndi:BPMNEdge id="SequenceFlow_1hfz8v3_di" bpmnElement="SequenceFlow_1hfz8v3"><omgdi:waypoint x="815" y="230" /><omgdi:waypoint x="882" y="230" /></bpmndi:BPMNEdge></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></definitions>`
        let xml_de =`<?xml version="1.0" encoding="UTF-8"?><definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="Camunda Modeler" exporterVersion="2.2.4"><process id="Process_1" isExecutable="false"><startEvent id="StartEvent_1y45yut" name="Kundenanfrage eingegangen"><outgoing>SequenceFlow_0h21x7r</outgoing></startEvent><task id="Task_1hcentk" name="Bestellung vorbereiten"><incoming>SequenceFlow_0h21x7r</incoming><outgoing>SequenceFlow_0wnb4ke</outgoing></task><sequenceFlow id="SequenceFlow_0h21x7r" sourceRef="StartEvent_1y45yut" targetRef="Task_1hcentk" /><sequenceFlow id="SequenceFlow_0wnb4ke" sourceRef="Task_1hcentk" targetRef="ExclusiveGateway_1863vh6" /><task id="Task_0y9n49p" name="Bestellung versenden"><incoming>SequenceFlow_1652c7j</incoming><outgoing>SequenceFlow_0bgdiq2</outgoing></task><sequenceFlow id="SequenceFlow_0bgdiq2" sourceRef="Task_0y9n49p" targetRef="ExclusiveGateway_1n3ncg4" /><endEvent id="EndEvent_0j1jntq" name="Kundenanfrage abgeschlossen"><incoming>SequenceFlow_1hfz8v3</incoming></endEvent><exclusiveGateway id="ExclusiveGateway_1863vh6" name="Produkt vorhanden?"><incoming>SequenceFlow_0wnb4ke</incoming><outgoing>SequenceFlow_1652c7j</outgoing><outgoing>SequenceFlow_09lfits</outgoing></exclusiveGateway><sequenceFlow id="SequenceFlow_1652c7j" name="Ja" sourceRef="ExclusiveGateway_1863vh6" targetRef="Task_0y9n49p" /><task id="Task_0urit8k" name="Bestellung ablehnen"><incoming>SequenceFlow_09lfits</incoming><outgoing>SequenceFlow_0zxbgjr</outgoing></task><sequenceFlow id="SequenceFlow_09lfits" name="Nein" sourceRef="ExclusiveGateway_1863vh6" targetRef="Task_0urit8k" /><sequenceFlow id="SequenceFlow_0zxbgjr" sourceRef="Task_0urit8k" targetRef="ExclusiveGateway_1n3ncg4" /><exclusiveGateway id="ExclusiveGateway_1n3ncg4"><incoming>SequenceFlow_0bgdiq2</incoming><incoming>SequenceFlow_0zxbgjr</incoming><outgoing>SequenceFlow_1hfz8v3</outgoing></exclusiveGateway><sequenceFlow id="SequenceFlow_1hfz8v3" sourceRef="ExclusiveGateway_1n3ncg4" targetRef="EndEvent_0j1jntq" /></process><bpmndi:BPMNDiagram id="BpmnDiagram_1"><bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1"><bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut"><omgdc:Bounds x="152" y="212" width="36" height="36" /><bpmndi:BPMNLabel><omgdc:Bounds x="134" y="255" width="76" height="27" /></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNShape id="Task_1hcentk_di" bpmnElement="Task_1hcentk"><omgdc:Bounds x="280" y="190" width="100" height="80" /></bpmndi:BPMNShape><bpmndi:BPMNEdge id="SequenceFlow_0h21x7r_di" bpmnElement="SequenceFlow_0h21x7r"><omgdi:waypoint x="188" y="230" /><omgdi:waypoint x="280" y="230" /></bpmndi:BPMNEdge><bpmndi:BPMNEdge id="SequenceFlow_0wnb4ke_di" bpmnElement="SequenceFlow_0wnb4ke"><omgdi:waypoint x="380" y="230" /><omgdi:waypoint x="475" y="230" /></bpmndi:BPMNEdge><bpmndi:BPMNShape id="Task_0y9n49p_di" bpmnElement="Task_0y9n49p"><omgdc:Bounds x="600" y="80" width="100" height="80" /></bpmndi:BPMNShape><bpmndi:BPMNEdge id="SequenceFlow_0bgdiq2_di" bpmnElement="SequenceFlow_0bgdiq2"><omgdi:waypoint x="700" y="120" /><omgdi:waypoint x="790" y="120" /><omgdi:waypoint x="790" y="205" /></bpmndi:BPMNEdge><bpmndi:BPMNShape id="EndEvent_0j1jntq_di" bpmnElement="EndEvent_0j1jntq"><omgdc:Bounds x="882" y="212" width="36" height="36" /><bpmndi:BPMNLabel><omgdc:Bounds x="862" y="174.5" width="76" height="27" /></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNShape id="ExclusiveGateway_1863vh6_di" bpmnElement="ExclusiveGateway_1863vh6" isMarkerVisible="true"><omgdc:Bounds x="475" y="205" width="50" height="50" /><bpmndi:BPMNLabel><omgdc:Bounds x="532" y="217" width="58" height="27" /></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNEdge id="SequenceFlow_1652c7j_di" bpmnElement="SequenceFlow_1652c7j"><omgdi:waypoint x="500" y="205" /><omgdi:waypoint x="500" y="120" /><omgdi:waypoint x="600" y="120" /><bpmndi:BPMNLabel><omgdc:Bounds x="545" y="102" width="12" height="14" /></bpmndi:BPMNLabel></bpmndi:BPMNEdge><bpmndi:BPMNShape id="Task_0urit8k_di" bpmnElement="Task_0urit8k"><omgdc:Bounds x="600" y="300" width="100" height="80" /></bpmndi:BPMNShape><bpmndi:BPMNEdge id="SequenceFlow_09lfits_di" bpmnElement="SequenceFlow_09lfits"><omgdi:waypoint x="500" y="255" /><omgdi:waypoint x="500" y="340" /><omgdi:waypoint x="600" y="340" /><bpmndi:BPMNLabel><omgdc:Bounds x="504" y="295" width="23" height="14" /></bpmndi:BPMNLabel></bpmndi:BPMNEdge><bpmndi:BPMNEdge id="SequenceFlow_0zxbgjr_di" bpmnElement="SequenceFlow_0zxbgjr"><omgdi:waypoint x="700" y="340" /><omgdi:waypoint x="790" y="340" /><omgdi:waypoint x="790" y="255" /></bpmndi:BPMNEdge><bpmndi:BPMNShape id="ExclusiveGateway_1n3ncg4_di" bpmnElement="ExclusiveGateway_1n3ncg4" isMarkerVisible="true"><omgdc:Bounds x="765" y="205" width="50" height="50" /></bpmndi:BPMNShape><bpmndi:BPMNEdge id="SequenceFlow_1hfz8v3_di" bpmnElement="SequenceFlow_1hfz8v3"><omgdi:waypoint x="815" y="230" /><omgdi:waypoint x="882" y="230" /></bpmndi:BPMNEdge></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></definitions>`
        let svg_en =`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="122 74 829 312" version="1.1"><defs><marker id="sequenceflow-end-white-black-99yuc9069vsrgnta5340kbmto" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1hfz8v3" style="display: block;"><g class="djs-visual"><path d="m  815,230L882,230 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-99yuc9069vsrgnta5340kbmto');"/></g><polyline points="815,230 882,230 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="809" y="224" width="79" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0zxbgjr" style="display: block;"><g class="djs-visual"><path d="m  700,340L790,340 L790,255 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-99yuc9069vsrgnta5340kbmto');"/></g><polyline points="700,340 790,340 790,255 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="694" y="249" width="102" height="97" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_09lfits" style="display: block;"><g class="djs-visual"><path d="m  500,255L500,340 L600,340 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-99yuc9069vsrgnta5340kbmto');"/></g><polyline points="500,255 500,340 600,340 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="494" y="249" width="112" height="97" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1652c7j" style="display: block;"><g class="djs-visual"><path d="m  500,205L500,120 L600,120 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-99yuc9069vsrgnta5340kbmto');"/></g><polyline points="500,205 500,120 600,120 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="494" y="114" width="112" height="97" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0bgdiq2" style="display: block;"><g class="djs-visual"><path d="m  700,120L790,120 L790,205 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-99yuc9069vsrgnta5340kbmto');"/></g><polyline points="700,120 790,120 790,205 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="694" y="114" width="102" height="97" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0wnb4ke" style="display: block;"><g class="djs-visual"><path d="m  380,230L475,230 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-99yuc9069vsrgnta5340kbmto');"/></g><polyline points="380,230 475,230 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="374" y="224" width="107" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0h21x7r" style="display: block;"><g class="djs-visual"><path d="m  188,230L280,230 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-99yuc9069vsrgnta5340kbmto');"/></g><polyline points="188,230 280,230 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="182" y="224" width="104" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_1y45yut" style="display: block;" transform="translate(152 212)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_1y45yut_label" style="display: block;" transform="translate(128 255)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Customer request </tspan><tspan x="23.25" y="23.099999999999998">received</tspan></text></g><rect x="0" y="0" width="89" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="101" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_1hcentk" style="display: block;" transform="translate(280 190)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="12.5859375" y="43.599999999999994">Prepare order</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0y9n49p" style="display: block;" transform="translate(600 80)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="19.9140625" y="43.599999999999994">Send order</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_0j1jntq" style="display: block;" transform="translate(882 212)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_0j1jntq_label" style="display: block;" transform="translate(856 175)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Customer request</tspan><tspan x="18.6640625" y="23.099999999999998">completed</tspan></text></g><rect x="0" y="0" width="89" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="101" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1863vh6" style="display: block;" transform="translate(475 205)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 16,15 7.42857142857143,9.714285714285715 -7.42857142857143,9.714285714285715 3.428571428571429,0 5.714285714285715,-7.464228571428572 5.714285714285715,7.464228571428572 3.428571428571429,0 -7.42857142857143,-9.714285714285715 7.42857142857143,-9.714285714285715 -3.428571428571429,0 -5.714285714285715,7.464228571428572 -5.714285714285715,-7.464228571428572 -3.428571428571429,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1863vh6_label" style="display: block;" transform="translate(536 217)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="5.484375" y="9.899999999999999">Product </tspan><tspan x="0" y="23.099999999999998">available?</tspan></text></g><rect x="0" y="0" width="50" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0urit8k" style="display: block;" transform="translate(600 300)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="16.921875" y="43.599999999999994">Reject order</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1n3ncg4" style="display: block;" transform="translate(765 205)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 16,15 7.42857142857143,9.714285714285715 -7.42857142857143,9.714285714285715 3.428571428571429,0 5.714285714285715,-7.464228571428572 5.714285714285715,7.464228571428572 3.428571428571429,0 -7.42857142857143,-9.714285714285715 7.42857142857143,-9.714285714285715 -3.428571428571429,0 -5.714285714285715,7.464228571428572 -5.714285714285715,-7.464228571428572 -3.428571428571429,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="SequenceFlow_1652c7j_label" style="display: block;" transform="translate(542 102)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Yes</tspan></text></g><rect x="0" y="0" width="18" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="30" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="SequenceFlow_09lfits_label" style="display: block;" transform="translate(508 295)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">No</tspan></text></g><rect x="0" y="0" width="15" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="27" height="26" class="djs-outline" style="fill: none;"/></g></g></svg>`
        let svg_de =`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="128 74 816 312" version="1.1"><defs><marker id="sequenceflow-end-white-black-5jp3hbxoz9asakfuum9rwnoqv" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1hfz8v3" style="display: block;"><g class="djs-visual"><path d="m  815,230L882,230 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5jp3hbxoz9asakfuum9rwnoqv');"/></g><polyline points="815,230 882,230 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="809" y="224" width="79" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0zxbgjr" style="display: block;"><g class="djs-visual"><path d="m  700,340L790,340 L790,255 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5jp3hbxoz9asakfuum9rwnoqv');"/></g><polyline points="700,340 790,340 790,255 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="694" y="249" width="102" height="97" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_09lfits" style="display: block;"><g class="djs-visual"><path d="m  500,255L500,340 L600,340 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5jp3hbxoz9asakfuum9rwnoqv');"/></g><polyline points="500,255 500,340 600,340 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="494" y="249" width="112" height="97" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_1652c7j" style="display: block;"><g class="djs-visual"><path d="m  500,205L500,120 L600,120 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5jp3hbxoz9asakfuum9rwnoqv');"/></g><polyline points="500,205 500,120 600,120 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="494" y="114" width="112" height="97" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0bgdiq2" style="display: block;"><g class="djs-visual"><path d="m  700,120L790,120 L790,205 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5jp3hbxoz9asakfuum9rwnoqv');"/></g><polyline points="700,120 790,120 790,205 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="694" y="114" width="102" height="97" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0wnb4ke" style="display: block;"><g class="djs-visual"><path d="m  380,230L475,230 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5jp3hbxoz9asakfuum9rwnoqv');"/></g><polyline points="380,230 475,230 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="374" y="224" width="107" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0h21x7r" style="display: block;"><g class="djs-visual"><path d="m  188,230L280,230 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-5jp3hbxoz9asakfuum9rwnoqv');"/></g><polyline points="188,230 280,230 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="182" y="224" width="104" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_1y45yut" style="display: block;" transform="translate(152 212)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_1y45yut_label" style="display: block;" transform="translate(134 255)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Kundenanfrage </tspan><tspan x="5.8046875" y="23.099999999999998">eingegangen</tspan></text></g><rect x="0" y="0" width="76" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="88" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_1hcentk" style="display: block;" transform="translate(280 190)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="21.984375" y="36.4">Bestellung </tspan><tspan x="20.3828125" y="50.8">vorbereiten</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0y9n49p" style="display: block;" transform="translate(600 80)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="21.984375" y="36.4">Bestellung </tspan><tspan x="22.3828125" y="50.8">versenden</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_0j1jntq" style="display: block;" transform="translate(882 212)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_0j1jntq_label" style="display: block;" transform="translate(862 175)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Kundenanfrage </tspan><tspan x="0.921875" y="23.099999999999998">abgeschlossen</tspan></text></g><rect x="0" y="0" width="76" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="88" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1863vh6" style="display: block;" transform="translate(475 205)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 16,15 7.42857142857143,9.714285714285715 -7.42857142857143,9.714285714285715 3.428571428571429,0 5.714285714285715,-7.464228571428572 5.714285714285715,7.464228571428572 3.428571428571429,0 -7.42857142857143,-9.714285714285715 7.42857142857143,-9.714285714285715 -3.428571428571429,0 -5.714285714285715,7.464228571428572 -5.714285714285715,-7.464228571428572 -3.428571428571429,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1863vh6_label" style="display: block;" transform="translate(532 217)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="9.3671875" y="9.899999999999999">Produkt </tspan><tspan x="0" y="23.099999999999998">vorhanden?</tspan></text></g><rect x="0" y="0" width="58" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="70" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0urit8k" style="display: block;" transform="translate(600 300)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="21.984375" y="36.4">Bestellung </tspan><tspan x="25.3125" y="50.8">ablehnen</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1n3ncg4" style="display: block;" transform="translate(765 205)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 16,15 7.42857142857143,9.714285714285715 -7.42857142857143,9.714285714285715 3.428571428571429,0 5.714285714285715,-7.464228571428572 5.714285714285715,7.464228571428572 3.428571428571429,0 -7.42857142857143,-9.714285714285715 7.42857142857143,-9.714285714285715 -3.428571428571429,0 -5.714285714285715,7.464228571428572 -5.714285714285715,-7.464228571428572 -3.428571428571429,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="SequenceFlow_1652c7j_label" style="display: block;" transform="translate(545 102)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Ja</tspan></text></g><rect x="0" y="0" width="12" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="24" height="26" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="SequenceFlow_09lfits_label" style="display: block;" transform="translate(504 295)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Nein</tspan></text></g><rect x="0" y="0" width="23" height="14" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="35" height="26" class="djs-outline" style="fill: none;"/></g></g></svg>`

        super (xml_de,xml_en,svg_de, svg_en)

    }
}

