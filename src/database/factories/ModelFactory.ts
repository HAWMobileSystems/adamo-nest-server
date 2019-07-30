import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import * as uuid from 'uuid';

import { Model } from '../../../src/api/models/Model';

define(Model, (faker: typeof Faker, settings: { role: string }) => {
    const gender = faker.random.number(1);
    const modelName = faker.company.companyName();
    const firstName = faker.name.firstName(gender);
    const lastName = faker.name.lastName(gender);
        // const email = faker.internet.email(firstName, lastName);
        // const username = faker.internet.userName(firstName, lastName);

    const model = new Model();
    model.id = uuid.v1();
    model.modelName = modelName;
    model.modelXML = `<?xml version="1.0" encoding="UTF-8"?>
    <bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn">
      <bpmn2:process id="Process_1" isExecutable="false">
        <bpmn2:startEvent id="StartEvent_1"/>
      </bpmn2:process>
      <bpmndi:BPMNDiagram id="BPMNDiagram_1">
        <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
          <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
            <dc:Bounds height="36.0" width="36.0" x="412.0" y="240.0"/>
          </bpmndi:BPMNShape>
        </bpmndi:BPMNPlane>
      </bpmndi:BPMNDiagram>
    </bpmn2:definitions>';`
    model.modelVersion = 1;
    // model.timestampLastChange = Date.now();
    return model;
});
