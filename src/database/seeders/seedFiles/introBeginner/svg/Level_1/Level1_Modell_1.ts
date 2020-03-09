import { Abstract_Modell } from "../Abstract_Modell"

export class Level1_Modell_1 extends Abstract_Modell{

    
    constructor(){
        let xml_en = `<?xml version="1.0" encoding="UTF-8"?><definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="Camunda Modeler" exporterVersion="2.2.4"><process id="Process_1" isExecutable="false"><startEvent id="StartEvent_1y45yut" name="Customer request received"><outgoing>SequenceFlow_0h21x7r</outgoing></startEvent><task id="Task_1hcentk" name="Prepare order"><incoming>SequenceFlow_0h21x7r</incoming><outgoing>SequenceFlow_0wnb4ke</outgoing></task><sequenceFlow id="SequenceFlow_0h21x7r" sourceRef="StartEvent_1y45yut" targetRef="Task_1hcentk" /><sequenceFlow id="SequenceFlow_0wnb4ke" sourceRef="Task_1hcentk" targetRef="Task_0y9n49p" /><task id="Task_0y9n49p" name="Send order"><incoming>SequenceFlow_0wnb4ke</incoming><outgoing>SequenceFlow_0bgdiq2</outgoing></task><sequenceFlow id="SequenceFlow_0bgdiq2" sourceRef="Task_0y9n49p" targetRef="EndEvent_0j1jntq" /><endEvent id="EndEvent_0j1jntq" name="Customer request completed"><incoming>SequenceFlow_0bgdiq2</incoming></endEvent></process><bpmndi:BPMNDiagram id="BpmnDiagram_1"><bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1"><bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut"><omgdc:Bounds x="152" y="102" width="36" height="36" /><bpmndi:BPMNLabel><omgdc:Bounds x="128" y="145" width="89" height="27" /></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNShape id="Task_1hcentk_di" bpmnElement="Task_1hcentk"><omgdc:Bounds x="320" y="80" width="100" height="80" /></bpmndi:BPMNShape><bpmndi:BPMNEdge id="SequenceFlow_0h21x7r_di" bpmnElement="SequenceFlow_0h21x7r"><omgdi:waypoint x="188" y="120" /><omgdi:waypoint x="320" y="120" /></bpmndi:BPMNEdge><bpmndi:BPMNEdge id="SequenceFlow_0wnb4ke_di" bpmnElement="SequenceFlow_0wnb4ke"><omgdi:waypoint x="420" y="120" /><omgdi:waypoint x="530" y="120" /></bpmndi:BPMNEdge><bpmndi:BPMNShape id="Task_0y9n49p_di" bpmnElement="Task_0y9n49p"><omgdc:Bounds x="530" y="80" width="100" height="80" /></bpmndi:BPMNShape><bpmndi:BPMNEdge id="SequenceFlow_0bgdiq2_di" bpmnElement="SequenceFlow_0bgdiq2"><omgdi:waypoint x="630" y="120" /><omgdi:waypoint x="772" y="120" /></bpmndi:BPMNEdge><bpmndi:BPMNShape id="EndEvent_0j1jntq_di" bpmnElement="EndEvent_0j1jntq"><omgdc:Bounds x="772" y="102" width="36" height="36" /><bpmndi:BPMNLabel><omgdc:Bounds x="746" y="145" width="89" height="27" /></bpmndi:BPMNLabel></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></definitions>`
        let xml_de =`<?xml version="1.0" encoding="UTF-8"?><definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="5.1.2"><process id="Process_1" isExecutable="false"><startEvent id="StartEvent_1y45yut" name="Kundenanfrage eingegangen"><outgoing>SequenceFlow_0h21x7r</outgoing></startEvent><task id="Task_1hcentk" name="Bestellung vorbereiten"><incoming>SequenceFlow_0h21x7r</incoming><outgoing>SequenceFlow_0wnb4ke</outgoing></task><sequenceFlow id="SequenceFlow_0h21x7r" sourceRef="StartEvent_1y45yut" targetRef="Task_1hcentk" /><sequenceFlow id="SequenceFlow_0wnb4ke" sourceRef="Task_1hcentk" targetRef="Task_0y9n49p" /><task id="Task_0y9n49p" name="Bestellung versenden"><incoming>SequenceFlow_0wnb4ke</incoming><outgoing>SequenceFlow_0bgdiq2</outgoing></task><sequenceFlow id="SequenceFlow_0bgdiq2" sourceRef="Task_0y9n49p" targetRef="EndEvent_0j1jntq" /><endEvent id="EndEvent_0j1jntq" name="Kundenanfrage abgeschlossen"><incoming>SequenceFlow_0bgdiq2</incoming></endEvent></process><bpmndi:BPMNDiagram id="BpmnDiagram_1"><bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1"><bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut"><omgdc:Bounds x="152" y="102" width="36" height="36" /><bpmndi:BPMNLabel><omgdc:Bounds x="134" y="145" width="76" height="27" /></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNShape id="Task_1hcentk_di" bpmnElement="Task_1hcentk"><omgdc:Bounds x="320" y="80" width="100" height="80" /></bpmndi:BPMNShape><bpmndi:BPMNEdge id="SequenceFlow_0h21x7r_di" bpmnElement="SequenceFlow_0h21x7r"><omgdi:waypoint x="188" y="120" /><omgdi:waypoint x="320" y="120" /></bpmndi:BPMNEdge><bpmndi:BPMNEdge id="SequenceFlow_0wnb4ke_di" bpmnElement="SequenceFlow_0wnb4ke"><omgdi:waypoint x="420" y="120" /><omgdi:waypoint x="530" y="120" /></bpmndi:BPMNEdge><bpmndi:BPMNShape id="Task_0y9n49p_di" bpmnElement="Task_0y9n49p"><omgdc:Bounds x="530" y="80" width="100" height="80" /></bpmndi:BPMNShape><bpmndi:BPMNEdge id="SequenceFlow_0bgdiq2_di" bpmnElement="SequenceFlow_0bgdiq2"><omgdi:waypoint x="630" y="120" /><omgdi:waypoint x="772" y="120" /></bpmndi:BPMNEdge><bpmndi:BPMNShape id="EndEvent_0j1jntq_di" bpmnElement="EndEvent_0j1jntq"><omgdc:Bounds x="772" y="102" width="36" height="36" /><bpmndi:BPMNLabel><omgdc:Bounds x="752" y="145" width="76" height="27" /></bpmndi:BPMNLabel></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></definitions>`
        let svg_en =`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="122 74 719 104" version="1.1"><defs><marker id="sequenceflow-end-white-black-6hqm9o0mb3qc63x27kmig187f" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0bgdiq2" style="display: block;"><g class="djs-visual"><path d="m  630,120L772,120 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-6hqm9o0mb3qc63x27kmig187f');"/></g><polyline points="630,120 772,120 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="624" y="114" width="154" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0wnb4ke" style="display: block;"><g class="djs-visual"><path d="m  420,120L530,120 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-6hqm9o0mb3qc63x27kmig187f');"/></g><polyline points="420,120 530,120 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="414" y="114" width="122" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0h21x7r" style="display: block;"><g class="djs-visual"><path d="m  188,120L320,120 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-6hqm9o0mb3qc63x27kmig187f');"/></g><polyline points="188,120 320,120 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="182" y="114" width="144" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_1y45yut" style="display: block;" transform="translate(152 102)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_1y45yut_label" style="display: block;" transform="translate(128 145)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Customer request </tspan><tspan x="23.25" y="23.099999999999998">received</tspan></text></g><rect x="0" y="0" width="89" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="101" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_1hcentk" style="display: block;" transform="translate(320 80)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="12.5859375" y="43.599999999999994">Prepare order</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0y9n49p" style="display: block;" transform="translate(530 80)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="19.9140625" y="43.599999999999994">Send order</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_0j1jntq" style="display: block;" transform="translate(772 102)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_0j1jntq_label" style="display: block;" transform="translate(746 145)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Customer request</tspan><tspan x="18.6640625" y="23.099999999999998">completed</tspan></text></g><rect x="0" y="0" width="89" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="101" height="39" class="djs-outline" style="fill: none;"/></g></g></svg>`
        let svg_de =`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="128 74 706 104" version="1.1"><defs><marker id="sequenceflow-end-white-black-6pe4i2oczecji5nath2g8kpqd" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0bgdiq2" style="display: block;"><g class="djs-visual"><path d="m  630,120L772,120 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-6pe4i2oczecji5nath2g8kpqd');"/></g><polyline points="630,120 772,120 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="624" y="114" width="154" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0wnb4ke" style="display: block;"><g class="djs-visual"><path d="m  420,120L530,120 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-6pe4i2oczecji5nath2g8kpqd');"/></g><polyline points="420,120 530,120 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="414" y="114" width="122" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="SequenceFlow_0h21x7r" style="display: block;"><g class="djs-visual"><path d="m  188,120L320,120 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-6pe4i2oczecji5nath2g8kpqd');"/></g><polyline points="188,120 320,120 " class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="182" y="114" width="144" height="12" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_1y45yut" style="display: block;" transform="translate(152 102)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_1y45yut_label" style="display: block;" transform="translate(134 145)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Kundenanfrage </tspan><tspan x="5.8046875" y="23.099999999999998">eingegangen</tspan></text></g><rect x="0" y="0" width="76" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="88" height="39" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_1hcentk" style="display: block;" transform="translate(320 80)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="21.984375" y="36.4">Bestellung </tspan><tspan x="20.3828125" y="50.8">vorbereiten</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Task_0y9n49p" style="display: block;" transform="translate(530 80)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="21.984375" y="36.4">Bestellung </tspan><tspan x="22.3828125" y="50.8">versenden</tspan></text></g><rect x="0" y="0" width="100" height="80" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_0j1jntq" style="display: block;" transform="translate(772 102)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_0j1jntq_label" style="display: block;" transform="translate(752 145)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">Kundenanfrage </tspan><tspan x="0.921875" y="23.099999999999998">abgeschlossen</tspan></text></g><rect x="0" y="0" width="76" height="27" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="88" height="39" class="djs-outline" style="fill: none;"/></g></g></svg>`

        super (xml_de,xml_en,svg_de, svg_en)

    }
}

