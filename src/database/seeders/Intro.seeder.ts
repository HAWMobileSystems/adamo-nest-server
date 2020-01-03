import { Seeder, Factory } from 'typeorm-seeding';
import { IntroEntity } from '../../modules/tutorial/intro/intro.entity';
import { Connection, getRepository, getConnection, AdvancedConsoleLogger } from 'typeorm';
import { CategoryEntity } from '../../modules/tutorial/category/category.entity';
import { IsBase64 } from 'class-validator';
/**
 * Seeder for the Intro class,
 * #TODO => Automate Loading from .json files
 * 
 */
export default class SeedIntro implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        
        console.log("Retreiving category id");
        const getCategory_id_b = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:'Beginner'})
        .getOne();
        const getCategory_id_a = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:'Advanced'})
        .getOne();

        
        const catAdvanced = getCategory_id_a.category_id;
        const catBeginer = getCategory_id_b.category_id;
        
        console.log("Seeding Text 1/40");
        const data1 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "As already stated, a Sequence Flow is used to show the order of Flow elements in a business process diagram. When connecting Flow elements with Sequence Flows, certain rules need to be followed as presented on the next table (Figure 4), obtained from the BPMN 2.0 specification",
                intro_categories: catAdvanced,
                intro_next_id:"currentlyLastIntroPage",
                intro_is_first:false,
                intro_currently_last_intropage:true
           },
        ])
        .execute();
        console.log("Seeding Text 2/40");
        const data2 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Exclusive Gateway - A diverging Exclusive Gateway (Decision) is used to create alternative paths within a Process flow - Only one of the paths can be taken, this means the gateway is exclusive - A Decision can be thought of as a question that is asked at a particular point in the Process - The question has a defined set of alternative answers - Each answer is associated with a condition Expression that is associated with a Gateway’s outgoing Sequence Flows",
                intro_categories: catAdvanced,
                intro_next_id:data1.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();
        console.log("Seeding Text 3/40");
        const data3 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Gateways : Gateways are used to control how Sequence Flows interact as they converge and diverge within a Process- If the flow does not need to be controlled, then a Gateway is not needed  The term “Gateway” implies that there is a gating mechanism that either allows or disallows passage through the Gateway as tokens arrive at a Gateway, they can be: merged together on input and/or  split apart on output as the Gateway mechanisms are invoked.     Gateways, like Activities, are capable of consuming or generating additional tokens, effectively controlling the execution semantics of a given Process- The main difference is that Gateways do not represent ‘work’ being done and they are considered to have zero effect on the operational measures of the Process being executed (cost, time, etc.).- Gateways can define all the types of Business Process Sequence Flow behavior: - Decisions/branching (exclusive, inclusive, complex)-merging, forking, joining",
                intro_categories: catAdvanced,
                intro_next_id:data2.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();
        console.log("Seeding Text 4/40");
        const data4 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Non-interrupting / Nicht-unterbrechend Bei angehefteten nicht-unterbrechenden Ereignissen werden die Aktivität und der reguläre Prozessfluss nicht abgebrochen, sondern wie gewohnt ausgeführt. Sollte das angeheftete Ereignis eintreten während die entsprechende Aktivität noch in Bearbeitung ist, wird zusätzlich zu dem re lgt. Eine mehrfache Auslösung ist möglich(5).",
                intro_categories: catAdvanced,
                intro_next_id:data3.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();
        console.log("Seeding Text 5/40");
        const data5 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Interrupting / Unterbrechend Bei angehefteten unterbrechenden Ereignissen werden die Aktivität und der reguläre Prozessfluss abgebrochen und stattdessen der Ausnahmefluss verfolgt. (5)",
                intro_categories: catAdvanced,
                intro_next_id:data4.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();

        console.log("Seeding Text 6/40");
        const data6 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Attached / Angeheftet Ereignisse, die im Zusammenhang mit einer Aktivität stehen und dazu führen, dass die Aktivität abgebrochen werden muss oder zusätzliche Aktivitäten notwendig werden, können über angeheftete Ereignisse dargestellt werden. Angeheftete Ereignisse sind Zwischenereignisse, die bei einer laufenden Aktivität auftreten können und einen Ausnahmefall im Prozessablauf definieren. Dabei wird zwischen unterbrechendenund nicht-unterbrechendenangehefteten Ereignissen unterschieden. (5)",
                intro_categories: catAdvanced,
                intro_next_id:data5.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();

        console.log("Seeding Text 7/40");
        const data7 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Throw / Eingetreten If the Event is used to “throw” the Eventtrigger, then trigger of the Event will immediately occur (e.g., the Message will be sent) and the token will move down the outgoingSequence Flow. (2)Darstellung: nicht ausgefüllt",
                intro_categories: catAdvanced,
                intro_next_id:data6.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();

        console.log("Seeding Text 8/40");
        const data8 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Catch / Ausgelöst If the Event is used to “catch” the Eventtrigger, then the token will remain at the Event until the trigger occurs (e.g., the Message is received). Then the token will move down the outgoing Sequence Flow. (2)Darstellung: schwarz, ausgefüllt",
                intro_categories: catAdvanced,
                intro_next_id:data7.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();

        console.log("Seeding Text 9/40");
        const data9 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Link                Zwei zusammengehörige Link-Ereignisse repräsentieren einen Sequenzfluss. (4)                Links werden zur alternativen Modellierung von Sequenzflüssen verwendet. (5)",
                intro_categories: catAdvanced,
                intro_next_id:data8.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();

        console.log("Seeding Text 10/40");
        const data10 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Cancel   Reaktion auf abgebrochene Transaktionen oder Auslösen von Abbrüchen (4).",
                intro_categories: catAdvanced,
                intro_next_id:data9.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();

        console.log("Seeding Text 11/40");
        const data11 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Parallel Multiple                Eintreten aller Ereignisse (4)                This means that there are multiple triggers REQUIRED before the Process can be instantiated. (2)",
                intro_categories: catAdvanced,
                intro_next_id:data10.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();
        console.log("Seeding Text 12/40");
        const data12 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Multiple                This means that there are multiple ways of triggering the Process. Only one of them is REQUIRED. (2)Eintreten eines von mehreren Ereignissen. Auslösen aller Ereignisse. (4)",
                intro_categories: catAdvanced,
                intro_next_id:data11.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();
        console.log("Seeding Text 13/40");
        const data13 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Signal Ein Signal ist eine ungerichtete Nachricht, die jeder empfangen und auf die jeder reagieren kann (5) Signal über mehrere Prozesse. Auf ein Signal kann mehrfach reagiert werden. (4)",
                intro_categories: catAdvanced,
                intro_next_id:data12.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();
        console.log("Seeding Text 14/40");
        const data14 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Compensation Behandeln oder Auslösen einer Kompensation (4)                Damit können Bedingungen modelliert werden, die das Rückgängigmachen von bestimmten Aktivitäten erfordern. (5)",
                intro_categories: catAdvanced,
                intro_next_id:data13.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();
        console.log("Seeding Text 15/40");
        const data15 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Terminate Indicates that all Activities in the Process should be immediately ended. This includes all instances of multi-instances. The Process is ended without compensation or event handling. (2)Löst die sofortige Beendigung des Prozesses aus. (4)",
                intro_categories: catAdvanced,
                intro_next_id:data14.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();

        console.log("Seeding Text 16/40");
        const data16 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Escalation  Meldung an den nächsthöheren Verantwortlichen (4)",
                intro_categories: catAdvanced,
                intro_next_id:data15.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();

        console.log("Seeding Text 17/40");
        const data17 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Error Auslösen und behandeln von definierten Fehlern (4)",
                intro_categories: catAdvanced,
                intro_next_id:data16.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();

        console.log("Seeding Text 18/40");
        const data18 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Conditional Reaktion auf veränderte Bedingungen und Bezug auf Geschäftsregeln (4)",
                intro_categories: catAdvanced,
                intro_next_id:data17.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();

        console.log("Seeding Text 19/40");
        const data19 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Timer                Expresses a time gap in processing or a wait for a period of time (1)                Periodische zeitliche Ereignisse, Zeitpunkte oder Zeitspannen (4)",
                intro_categories: catAdvanced,
                intro_next_id:data18.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();

        console.log("Seeding Text 20/40");
        const data20 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Message                 Empfang und Versand von Nachrichten (4)",
                intro_categories: catAdvanced,
                intro_next_id:data19.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();

        console.log("Seeding Text 21/40");
        const data21 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "End As the name implies, the End Event indicates where a Process will end.",
                intro_categories: catAdvanced,
                intro_next_id:data20.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();

        console.log("Seeding Text 22/40");
        const data22 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Intermediate Event                Intermediate Events occur between a Start Event and an End Event. They will affect the flow of the Process, but will not start or (directly) terminate the Process",
                intro_categories: catAdvanced,
                intro_next_id:data21.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();

        console.log("Seeding Text 23/40");
        const data23 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Start                As the name implies, the Start Event indicates where a particular Process will start",
                intro_categories: catAdvanced,
                intro_next_id:data22.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();

        console.log("Seeding Text 24/40");
        const data24 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Start                As the name implies, the Start Event indicates where a particular Process will start",
                intro_categories: catAdvanced,
                intro_next_id:data23.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();

        console.log("Seeding Text 25/40");
        const data25 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Ereignisse sind eingetretene, betriebswirtschaftlich relevante Zustände und können einen Prozess starten (Startereignis), während des Prozesses auftreten bzw. ausgelöst werden (Zwischenereignisse) oder ihn abschließen (Endereignis).(5)",
                intro_categories: catAdvanced,
                intro_next_id:data24.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();

        console.log("Seeding Text 26/40");
        const data26 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Lane A Lane is a sub-partition within a Process, sometimes within a Pool, and will extend the entire length of the Process, either vertically or horizontally. Lanes are used to organize and categorize Activities.                Pools werden i.d.R. über Lanes weiter untergliedert. Lanes repräsentieren Prozessteilnehmer und können z.B. Organisationseinheiten (Vertrieb, Personal etc.) oder Rollen (Abteilungsleiter, Sachbearbeiter etc.) sein. Sie können im Gegensatz zu Pools hierarchisch geschachtelt werden.                Modellierungsregeln:1.Lanes werden übereinander über die gesamte Poolbreite dargestellt.2.Die Höhe der Lane richtet sich nach deren Inhalt. 3.Lanes können ineinander verschachtel twerden, um hierarchische Beziehungen aufzuzeigen",
                intro_categories: catAdvanced,
                intro_next_id:data25.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();

        console.log("Seeding Text 27/40");
        const data27 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Pool A Pool is the graphical representation of a Participant in a Collaboration. It also acts as a “swimlane” and a graphical container for partitioning a set of Activities from other Pools, usually in the context of B2B situations. A Pool MAY have internal details, in the form of the Process that will be executed. Or a Pool MAY have no internal details, i.e., it can be a 'black box'.                Pools repräsentieren einen den Lanes übergeordneten Prozessteilnehmer, der den Prozessverlauf innerhalb des Pools „koordiniert“. Sie umfassen den gesamten Prozess und ordnen die enthaltenen Aufgaben den verantwortlichen Lanes zu               Modellierungsregeln:                1.In jedem Pool wird genau ein vollständiger Prozess modelliert. 2.Übereinanderliegende Pools sollten über die gesamte Modellbreite dargestellt werden (nicht zwingend in BPMN 2.0).3.Die Höhe des Pools richtet sich nach dessen Inhalt. 4.Nachrichtenflüsse sind nur zwischen Pools erlaubt. Sequenzflüsse sind nur innerhalb von Pools erlaubt.5.Falls mehrere Pools in einem Diagramm liegen, so sind diese durch Nachrichtenflüsse verbunden",
                intro_categories: catAdvanced,
                intro_next_id:data26.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();

        console.log("Seeding Text 28/40");
        const data28 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Die verschiedenen Schritte eines Prozesses werden von Prozessteilnehmern durchgeführt – diese werden in BPMN als Pools bzw. Lanes dargestellt. (5)",
                intro_categories: catAdvanced,
                intro_next_id:data27.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();
        console.log("Seeding Text 29/40");
        const data29 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "    • Receive Task: Is a Task designed to wait for a message to arrive from an external participant (relative to the Process).- Business Rule Task: Offers a mechanism for the Process to provide input to a Business Rule Engine and get the output of calculations that the engine might provide. - Script Task: Is a Task that is executed by a Business Process Engine. The modeler defines a script in a language that the engine can interpret. ",
                intro_categories: catAdvanced,
                intro_next_id:data28.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();
        console.log("Seeding Text 30/40");
        const data30 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Service Task: Is a Task that uses some sort of service that could be a Web service or an automated application. Manual Task: Is a Task that is expected to be performed without the aid of any business process execution or any application.Send Task: Is a Task designed to send a message to an external participant (relative to the Process).",
                intro_categories: catAdvanced,
                intro_next_id:data29.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();
        console.log("Seeding Text 31/40");
        const data31 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Allgemeines Task (Abstract Task):Is an atomic Activity within a Process flow. It is used when the work in the Process cannot be broken down to a finer level of detail. User Task: Is a typical workflow Task where a person performs the Task with the assistance of a software application.",
                intro_categories: catAdvanced,
                intro_next_id:data30.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();

        console.log("Seeding Text 32/40");
        const data32 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Activities                Activities represent work or tasks carried out by members of the organization.  They stand for manual or automatic tasks performed by an external system or user.  Activities can be atomic or non-atomic (compound) and they are classified into tasks (and sub-processes).An Activity is a generic term for work that an actor performs in a Process. What many people do not realize is that an Activity can be atomic or non-atomic (compound). In other words, an Activity can be a Task or it can be a Sub-process (a process within the main process). The fun part of activities is that you can also specify various types of activities. For example, tasks can be manual tasks, human tasks, message tasks (have the same function as a message event) script tasks, or service tasks (indicating, perhaps, that work is performed by a web service. ",
                intro_categories: catAdvanced,
                intro_next_id:data31.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();
        console.log("Seeding Text 33/40");
        const data33 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "In BPMN, different connecting objects are necessary to represent different types of flows: - A Sequence Flow is used to represent the order of Flow elements in process and choreography models. A Message Flow is used to show the flow of messages between two participants that are able to send and receive them. In BPMN, two separate Pools in a Collaboration Diagram will represent the two Participants. A Data Association is used to show the flow of information between Activities in a business process. An Association is used to link Artefacts with other BPMN (graphical) elements",
                intro_categories: catAdvanced,
                intro_next_id:data32.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();
        console.log("Seeding Text 34/40");
        const data34 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "B) Sequence Flow and message Flow BPMN 2.0 defines four basic connecting objects: Sequence Flow, Message Flow and two types of Associations. These connecting objects are graphically represented with the following arrows (Figure 2): Figure 2: Main BPMN connecting objects",
                intro_categories: catAdvanced,
                intro_next_id:data33.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();
        console.log("Seeding Text 35/40");
        const data35 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "A) Pools and lanes: It is worth spending another few minutes on another important element in the Descriptive Subclass – Swimlanes, pools, and my favorite, the black box pool. A Pool is the graphical representation of a Participant in a Collaboration. It also acts as a “swimlane” and a graphical container for partitioning a set of Activities from other Pools, usually in the context of B2B situations. A Pool MAY have internal details, in the form of the Process that will be executed. Or a Pool MAY have no internal details, i.e., it can be a black box' A Lane is a sub-partition within a Process, sometimes within a Pool, and will extend the entire length of the Process, either vertically or horizontally. Lanes are used to organize and categorize Activities. ",
                intro_categories: catAdvanced,
                intro_next_id:data34.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();
        console.log("Seeding Text 36/40");
        const data36 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Descriptive Modeling Subclass The Descriptive Modeling Subclass is a bit of a mouth full. Some people call these the Level I elements. Basically, these are all the elements you probably need to learn to become relatively proficient in BPMN. At the very least if your job involves working with processes then you should know these elements:• Pool and lane                 • Sequence flow and message flow                • 3 types of activity: user task, service task, and task (none)                 • SubProcess (expanded and collapsed) • CallActivity                • 2 types of gateway: XOR gateway and parallel gateway                 • 3 start events: Message, Timer, and None start                 • 2 end events: Message and None                • Data object and data store                 • Text annotation and regular data association ",
                intro_categories: catAdvanced,
                intro_next_id:data35.identifiers[0].intro_id,
                intro_is_first:true,
                intro_currently_last_intropage:false
           },
        ])
        .execute();
        console.log("Seeding Text 37/40");
        /**
         * Here starts lvl Beginner!
         */
        
        const data37 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Don’t worry if you think the Event-based gateway is difficult; it is. It is also not so common. Here are the 3 you should know: • Exclusive - This Decision represents a branching point where Alternatives are based on conditional Expressions contained within the outgoing Sequence Flows. Only one of the Alternatives will be chosen. • Parallel (Fork) - BPMN uses the term “fork” to refer to the dividing of a path into two or more parallel paths (also known as an ANDSplit). It is a place in the Process where activities can be performed concurrently, rather than sequentially. • Inclusive - This Decision represents a branching point where Alternatives are based on conditional Expressions contained within the outgoing Sequence Flows. In some sense it is a grouping of related independent Binary (Yes/No) Decisions. Since each path is independent, all combinations of the paths MAY be taken, from zero to all. However, it should be designed so that at least one path is taken. A Default Condition could be used to ensure that at least one path is taken. ",
                intro_categories: catBeginer,
                intro_next_id:data36.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:true
           },
        ])
        .execute();
        console.log("Seeding Text 38/40");
        const data38 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Gateways Events and Activities are pretty easy to understand. The real magic in a process, though, happens at the gateways. Gateways can tell a process to continue exclusively down one path vs. another or instruct participants in the process to begin working in parallel. In still other scenarios, there could be multiple pathways in which some of the pathways only become active under certain circumstances. There are some pretty funky gateways out there. My personal favorite is the Eventbased gateway (also known as a Race Gateway) which basically creates a race between two alternative paths. For example, a company might have a cancelation policy where a customer can cancel an emitted insurance policy within 1 week; otherwise, it will print and mail the policy. In this case, either we get the cancelation within a week or we go down the path of emitting the policy. Wow – that is elegant. ",
                intro_categories: catBeginer,
                intro_next_id:data37.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();
        console.log("Seeding Text 39/40");
        const data39 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "A) Activities: An Activity is a generic term for work that an actor performs in a Process. What many people do not realize is that an Activity can be atomic or non-atomic (compound). In other words, an Activity can be a Task or it can be a Sub-process (a process within the main process). The fun part of activities is that you can also specify various types of activities. For example, tasks can be manual tasks, human tasks, message tasks (have the same function as a message event) script tasks, or service tasks (indicating, perhaps, that work is performed by a web service. ",
                intro_categories: catBeginer,
                intro_next_id:data38.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();
        console.log("Seeding Text 40/40");
        const data = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Start <br> Indicates where a particular Process will start. <br>2. Intermediate – occur between the start and end events and affect the flow of the process. <br>3. End – indicates where the process ends. <br>These are pretty simply. The important thing to remember is that there are variants. For example, if you add the picture of an envelop to any of these three events, you would have a message event. You could start a process by the arrival of a message, send a message (or catch a message) with an intermediate event somewhere in the middle of the process, or you could send a message at the end of a process.  <br><img src=\"data:image/png;base64,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\">",              
                intro_categories: catBeginer,
                intro_next_id:data39.identifiers[0].intro_id,
                intro_is_first:true,
                intro_currently_last_intropage:false
           },
        ])
        .execute();
        console.log("Seeding Intro Completed");
    }
}