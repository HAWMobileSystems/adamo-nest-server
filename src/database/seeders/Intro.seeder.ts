import { Seeder, Factory } from 'typeorm-seeding';
import { IntroEntity } from '../../modules/tutorial/intro/intro.entity';
import { Connection, getRepository, getConnection, AdvancedConsoleLogger } from 'typeorm';
import { CategoryEntity } from '../../modules/tutorial/category/category.entity';
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

        const catBeginer = getCategory_id_b.category_id;
        const catAdvanced = getCategory_id_a.category_id;

        
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
                intro_text: "Start – indicates where a particular Process will start. 2. Intermediate – occur between the start and end events and affect the flow of the process. 3. End – indicates where the process ends. These are pretty simply. The important thing to remember is that there are variants. For example, if you add the picture of an envelop to any of these three events, you would have a message event. You could start a process by the arrival of a message, send a message (or catch a message) with an intermediate event somewhere in the middle of the process, or you could send a message at the end of a process. ",
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