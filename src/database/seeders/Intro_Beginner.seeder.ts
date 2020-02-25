import { Seeder, Factory } from 'typeorm-seeding';
import { IntroEntity } from '../../modules/tutorial/intro/intro.entity';
import { Connection, getRepository, getConnection, AdvancedConsoleLogger } from 'typeorm';
import { CategoryEntity } from '../../modules/tutorial/category/category.entity';
import { IsBase64 } from 'class-validator';
import { start } from 'repl';


//import * as page1 from '!!raw-loader!./seedFiles/introBeginner/intro_text1.md';
//import  page1  from './seedFiles/introBeginner/intro_text1.md!txt';
//import page1 from '../seeders/seedFiles/introBeginner/page1.txt';
/**
 * Seeder for the Intro Beginner,
 * define Pic as SVG
 * 
 */
export default class SeedIntroBeginner implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        
        console.log("Retreiving category id");
        const getCategory_id_b = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:'Beginner'})
        .getOne();


        //console.log("Assignactual ID to variable");
        const catBeginer = getCategory_id_b.category_id;
        const md1 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            // 1.Start Event - EN
            {
                intro_text: `

                <div class="introductionContainer">
                <table width="100%" cellspacing="0" cellpadding="0" border="0">
                <style>
                    table, th, td {
                    padding: 15px;
                    }
                </style>
                <tbody>
                  <tr>
                    <td width="10%" valign="top">
                      <p><strong>NOTATION&nbsp;</strong></p>
                    </td>
                    <td width="10%" valign="top">
                      <p><strong>ELEMENT NAME&nbsp;</strong></p>
                    </td>
                    <td width="40%" valign="top">
                      <p><strong>DESCRIPTION&nbsp;</strong></p>
                    </td>
                    <td width="40%" valign="top">
                      <p><strong>BEST PRACTICE&nbsp;</strong></p>
                    </td>
                  </tr>
                  <tr>
                    <td width="10%" valign="top">
                      <p>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="141 75 66 69" version="1.1"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_1rszp1h" transform="matrix(1, 0, 0, 1, 156, 81)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_1rszp1h_label" transform="matrix(1, 0, 0, 1, 147, 124)" style="display: block;"><g class="djs-visual"><text style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="0" y="9.899999999999999">Start Event</tspan></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="54" height="14"/><rect x="-6" y="-6" width="66" height="26" style="fill: none;" class="djs-outline"/></g></g></svg>
                      </p>
                      <p>&nbsp;</p>
                      <p>&nbsp;</p>
                    </td>
                    <td width="10%" valign="top">
                      <p>Start Event</p>
                    </td>
                    <td width="40%" valign="top">
                      <p>Indicates <strong>where</strong> a particular <strong>Process</strong> <strong>starts</strong>. It does not have any particular behavior.&nbsp;</p>
                      <p>&nbsp;</p>
                      <p>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60%" height="60%" viewBox="100 44 612 542" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Participant_1lkhtii" transform="matrix(1, 0, 0, 1, 106, 50)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="600" height="250" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><polyline points="30,0 30,250 " style="fill: none; stroke: black; stroke-width: 2px;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label" transform="matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 250)"><tspan x="125" y="18.6"/></text></g><rect x="-6" y="-6" width="612" height="262" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="600" height="250"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="30" height="250"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0r566is" style="display: block;"><g class="djs-visual"><path d="m  192,99L250,99 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="192,99 250,99 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="186" y="93" width="70" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0sg972u" style="display: block;"><g class="djs-visual"><path d="m  350,99L410,99 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="350,99 410,99 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="344" y="93" width="72" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_17n3asu" style="display: block;"><g class="djs-visual"><path d="m  510,99L572,99 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="510,99 572,99 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="504" y="93" width="74" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_1rszp1h" transform="matrix(1, 0, 0, 1, 156, 81)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1e1dfem" transform="matrix(1, 0, 0, 1, 250, 59)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1xhwqaw" transform="matrix(1, 0, 0, 1, 410, 59)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_1y7y2qq" transform="matrix(1, 0, 0, 1, 572, 81)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Participant_0d1j17w" transform="matrix(1, 0, 0, 1, 106, 330)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="600" height="250" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><polyline points="30,0 30,250 " style="fill: none; stroke: black; stroke-width: 2px;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label" transform="matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 250)"><tspan x="125" y="18.6"/></text></g><rect x="-6" y="-6" width="612" height="262" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="600" height="250"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="30" height="250"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_17bdkxb" style="display: block;"><g class="djs-visual"><path d="m  510,450L562,450 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="510,450 562,450 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="504" y="444" width="64" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1y8gn2q" transform="matrix(1, 0, 0, 1, 410, 410)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_1i86icp" transform="matrix(1, 0, 0, 1, 562, 432)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="MessageFlow_11xyv49" style="display: block;"><g class="djs-visual"><path d="m  300,139L300,450 L410,450 " style="fill: none; stroke-width: 1.5px; stroke: black; marker-end: url('#messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog'); marker-start: url('#messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog'); stroke-dasharray: 10px, 12px; stroke-linecap: round; stroke-linejoin: round;"/></g><polyline points="300,139 300,450 410,450 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="294" y="133" width="122" height="323" style="fill: none;" class="djs-outline"/></g></g></svg>
                      </p>
                      <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                      <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                      <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                    </td>
                    <td width="40%" valign="top">
                      <p>It is <strong>optional</strong> and can be <strong>replaced</strong> by a <strong>Start</strong> <strong>Message</strong> <strong>Event</strong> or <strong>no</strong> <strong>event</strong> at all, for example.</p>
                      <p>&nbsp;</p>
                      <p>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60%" height="60%" viewBox="144 74 452 332" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_1j88epq" style="display: block;"><g class="djs-visual"><path d="m  250,240L300,240 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="250,240 300,240 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="244" y="234" width="62" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_1g67vns" style="display: block;"><g class="djs-visual"><path d="m  440,240L490,240 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="440,240 490,240 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="434" y="234" width="62" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_11zrqmz" transform="matrix(1, 0, 0, 1, 150, 200)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="46" y="43.599999999999994">A</tspan></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_06qph17" transform="matrix(1, 0, 0, 1, 490, 200)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="45" y="43.599999999999994">D</tspan></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_0ja9d18" transform="matrix(1, 0, 0, 1, 300, 80)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="140" height="320" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="70" y="15.799999999999999"/></text></g><rect x="-6" y="-6" width="152" height="332" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="140" height="320"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="140" height="30"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1xmbyq6" transform="matrix(1, 0, 0, 1, 320, 130)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="45.5" y="43.599999999999994">B</tspan></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_0tcou45" transform="matrix(1, 0, 0, 1, 320, 270)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="45" y="43.599999999999994">C</tspan></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g></g></g></svg>    
                      </p>
                      <p>&nbsp;</p>
                      <p>If it is used, a start event must always occur at the <strong>beginning</strong> (as first element) of a process flow.</p>
                      <p>&nbsp;</p>
                      <p>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60%" height="60%" viewBox="100 44 612 542" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Participant_1lkhtii" transform="matrix(1, 0, 0, 1, 106, 50)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="600" height="250" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><polyline points="30,0 30,250 " style="fill: none; stroke: black; stroke-width: 2px;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label" transform="matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 250)"><tspan x="125" y="18.6"/></text></g><rect x="-6" y="-6" width="612" height="262" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="600" height="250"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="30" height="250"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0r566is" style="display: block;"><g class="djs-visual"><path d="m  192,99L250,99 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="192,99 250,99 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="186" y="93" width="70" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0sg972u" style="display: block;"><g class="djs-visual"><path d="m  350,99L410,99 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="350,99 410,99 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="344" y="93" width="72" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_17n3asu" style="display: block;"><g class="djs-visual"><path d="m  510,99L572,99 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="510,99 572,99 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="504" y="93" width="74" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_1rszp1h" transform="matrix(1, 0, 0, 1, 156, 81)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1e1dfem" transform="matrix(1, 0, 0, 1, 250, 59)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1xhwqaw" transform="matrix(1, 0, 0, 1, 410, 59)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_1y7y2qq" transform="matrix(1, 0, 0, 1, 572, 81)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Participant_0d1j17w" transform="matrix(1, 0, 0, 1, 106, 330)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="600" height="250" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><polyline points="30,0 30,250 " style="fill: none; stroke: black; stroke-width: 2px;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label" transform="matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 250)"><tspan x="125" y="18.6"/></text></g><rect x="-6" y="-6" width="612" height="262" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="600" height="250"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="30" height="250"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_17bdkxb" style="display: block;"><g class="djs-visual"><path d="m  510,450L562,450 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="510,450 562,450 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="504" y="444" width="64" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1y8gn2q" transform="matrix(1, 0, 0, 1, 410, 410)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_1i86icp" transform="matrix(1, 0, 0, 1, 562, 432)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="MessageFlow_11xyv49" style="display: block;"><g class="djs-visual"><path d="m  300,139L300,450 L410,450 " style="fill: none; stroke-width: 1.5px; stroke: black; marker-end: url('#messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog'); marker-start: url('#messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog'); stroke-dasharray: 10px, 12px; stroke-linecap: round; stroke-linejoin: round;"/></g><polyline points="300,139 300,450 410,450 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="294" y="133" width="122" height="323" style="fill: none;" class="djs-outline"/></g></g></svg>
                      </p>
                      <p>&nbsp;</p>
                      <p>&nbsp;</p>
                      <p>There <strong>MAY</strong> be multiple Start Events for a given Process level.</p>
                      <p>&nbsp;</p>
                      <p>Each Start Event is an <strong>independent</strong> Event. That is, a Process instance <strong>SHALL</strong> be generated when the Start</p>
                      <p>Event is triggered.</p>
                      <p>When the trigger for a Start Event occurs, a <strong>new</strong> Process will be <strong>instantiated</strong>, and a <strong>token</strong> will be <strong>generated</strong> for each <strong>outgoing Sequence Flow</strong> from that Event.</p>
                      <p>&nbsp;</p>
                      <p>If there is an <strong>End Event</strong>, then there <strong>MUST</strong> be <strong>at</strong> <strong>least one Start Event</strong>.</p>
                      <p>&nbsp;</p>
                      <p>If a Process is <strong>complex</strong> and/or the starting <strong>conditions</strong> are <strong>not obvious</strong>, then it is <strong>RECOMMENDED</strong> that a Start Event be used.</p>
                      <p>&nbsp;</p>
                      <p>When a start event is used, there <strong>MUST NOT</strong> be any other flow elements that do not have an incoming sequence flow. All other flow objects <strong>MUST</strong> be a target of <strong>at least one</strong> sequence flow.</p>
                      <p>&nbsp;</p>
                      <p>The following process was not modeled correctly, because on the lower left side a task is used as start.
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60%" height="60%" viewBox="224 124 612 262" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Participant_03a3xmy" transform="matrix(1, 0, 0, 1, 230, 130)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="600" height="250" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><polyline points="30,0 30,250 " style="fill: none; stroke: black; stroke-width: 2px;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label" transform="matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 250)"><tspan x="125" y="18.6"/></text></g><rect x="-6" y="-6" width="612" height="262" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="600" height="250"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="30" height="250"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0bndu2r" style="display: block;"><g class="djs-visual"><path d="m  328,200L380,200 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="328,200 380,200 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="322" y="194" width="64" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0qc3cb2" style="display: block;"><g class="djs-visual"><path d="m  480,200L510,200 L510,260 L540,260 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="480,200 510,200 510,260 540,260 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="474" y="194" width="72" height="72" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0y23qal" style="display: block;"><g class="djs-visual"><path d="m  480,310L510,310 L510,260 L540,260 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="480,310 510,310 510,260 540,260 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="474" y="254" width="72" height="62" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_1l3ul6n" style="display: block;"><g class="djs-visual"><path d="m  640,260L702,260 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="640,260 702,260 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="634" y="254" width="74" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_1vdkvga" transform="matrix(1, 0, 0, 1, 292, 182)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_0r3b1bp" transform="matrix(1, 0, 0, 1, 380, 160)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1v8457e" transform="matrix(1, 0, 0, 1, 540, 220)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1b8dkrl" transform="matrix(1, 0, 0, 1, 380, 270)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_19ujfh0" transform="matrix(1, 0, 0, 1, 702, 242)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g></g></g></svg>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
                </div>`,

                // --- 1. Start Event DE ---
                intro_text_de: `
                <div>
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <style>
                table, th, td {
                padding: 15px;}
                </style>
                <tbody>
                    <tr>
                    <td valign="top" width="10%">
                        <p><strong>NOTATION&nbsp;</strong></p>
                    </td>
                    <td valign="top" width="10%">
                        <p><strong>ELEMENT NAME&nbsp;</strong></p>
                    </td>
                    <td valign="top" width="40%">
                        <p><strong>BESCHREIBUNG&nbsp;</strong></p>
                    </td>
                    <td valign="top" width="40%">
                        <p><strong>BEST PRACTICE&nbsp;</strong></p>
                    </td>
                    </tr>
                    <tr>
                    <td valign="top" width="10%">
                        <p>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="66" height="69" viewBox="141 75 66 69" version="1.1"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_1rszp1h" transform="matrix(1, 0, 0, 1, 156, 81)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_1rszp1h_label" transform="matrix(1, 0, 0, 1, 147, 124)" style="display: block;"><g class="djs-visual"><text style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="0" y="9.899999999999999">Start Event</tspan></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="54" height="14"/><rect x="-6" y="-6" width="66" height="26" style="fill: none;" class="djs-outline"/></g></g></svg>
                        </p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                    </td>
                    <td valign="top" width="10%">
                        <p>Start Event</p>
                    </td>
                    <td valign="top" width="40%">
                        <p>Zeigt an, <strong>wo</strong> ein bestimmter <strong>Prozess beginnt</strong>. Das Start Event hat kein bestimmtes Verhalten.</p>
                        <p>&nbsp;</p>
                        <p>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="100 44 612 542" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Participant_1lkhtii" transform="matrix(1, 0, 0, 1, 106, 50)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="600" height="250" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><polyline points="30,0 30,250 " style="fill: none; stroke: black; stroke-width: 2px;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label" transform="matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 250)"><tspan x="125" y="18.6"/></text></g><rect x="-6" y="-6" width="612" height="262" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="600" height="250"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="30" height="250"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0r566is" style="display: block;"><g class="djs-visual"><path d="m  192,99L250,99 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="192,99 250,99 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="186" y="93" width="70" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0sg972u" style="display: block;"><g class="djs-visual"><path d="m  350,99L410,99 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="350,99 410,99 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="344" y="93" width="72" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_17n3asu" style="display: block;"><g class="djs-visual"><path d="m  510,99L572,99 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="510,99 572,99 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="504" y="93" width="74" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_1rszp1h" transform="matrix(1, 0, 0, 1, 156, 81)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1e1dfem" transform="matrix(1, 0, 0, 1, 250, 59)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1xhwqaw" transform="matrix(1, 0, 0, 1, 410, 59)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_1y7y2qq" transform="matrix(1, 0, 0, 1, 572, 81)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Participant_0d1j17w" transform="matrix(1, 0, 0, 1, 106, 330)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="600" height="250" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><polyline points="30,0 30,250 " style="fill: none; stroke: black; stroke-width: 2px;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label" transform="matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 250)"><tspan x="125" y="18.6"/></text></g><rect x="-6" y="-6" width="612" height="262" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="600" height="250"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="30" height="250"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_17bdkxb" style="display: block;"><g class="djs-visual"><path d="m  510,450L562,450 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="510,450 562,450 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="504" y="444" width="64" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1y8gn2q" transform="matrix(1, 0, 0, 1, 410, 410)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_1i86icp" transform="matrix(1, 0, 0, 1, 562, 432)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="MessageFlow_11xyv49" style="display: block;"><g class="djs-visual"><path d="m  300,139L300,450 L410,450 " style="fill: none; stroke-width: 1.5px; stroke: black; marker-end: url('#messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog'); marker-start: url('#messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog'); stroke-dasharray: 10px, 12px; stroke-linecap: round; stroke-linejoin: round;"/></g><polyline points="300,139 300,450 410,450 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="294" y="133" width="122" height="323" style="fill: none;" class="djs-outline"/></g></g></svg>
                        </p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                    </td>
                    <td valign="top" width="40%">
                        <p>Es ist <strong>optional</strong> und kann z.B. durch ein <strong>Start Message Event&nbsp;</strong>oder gar <strong>kein Event</strong> <strong>ersetzt</strong> werden.</p>
                        <p>&nbsp;</p>
                        <p>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="144 74 452 332" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_1j88epq" style="display: block;"><g class="djs-visual"><path d="m  250,240L300,240 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="250,240 300,240 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="244" y="234" width="62" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_1g67vns" style="display: block;"><g class="djs-visual"><path d="m  440,240L490,240 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="440,240 490,240 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="434" y="234" width="62" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_11zrqmz" transform="matrix(1, 0, 0, 1, 150, 200)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="46" y="43.599999999999994">A</tspan></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_06qph17" transform="matrix(1, 0, 0, 1, 490, 200)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="45" y="43.599999999999994">D</tspan></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_0ja9d18" transform="matrix(1, 0, 0, 1, 300, 80)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="140" height="320" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="70" y="15.799999999999999"/></text></g><rect x="-6" y="-6" width="152" height="332" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="140" height="320"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="140" height="30"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1xmbyq6" transform="matrix(1, 0, 0, 1, 320, 130)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="45.5" y="43.599999999999994">B</tspan></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_0tcou45" transform="matrix(1, 0, 0, 1, 320, 270)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="45" y="43.599999999999994">C</tspan></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g></g></g></svg>
                        </p>
                        <p>&nbsp;</p>
                        <p>Wenn es verwendet wird, muss ein Start Event immer am <strong>Anfang&nbsp;</strong>(als erstes Element) eines Prozesses auftreten.</p>
                        <p>&nbsp;</p>
                        <p>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="100 44 612 542" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Participant_1lkhtii" transform="matrix(1, 0, 0, 1, 106, 50)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="600" height="250" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><polyline points="30,0 30,250 " style="fill: none; stroke: black; stroke-width: 2px;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label" transform="matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 250)"><tspan x="125" y="18.6"/></text></g><rect x="-6" y="-6" width="612" height="262" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="600" height="250"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="30" height="250"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0r566is" style="display: block;"><g class="djs-visual"><path d="m  192,99L250,99 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="192,99 250,99 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="186" y="93" width="70" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0sg972u" style="display: block;"><g class="djs-visual"><path d="m  350,99L410,99 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="350,99 410,99 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="344" y="93" width="72" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_17n3asu" style="display: block;"><g class="djs-visual"><path d="m  510,99L572,99 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="510,99 572,99 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="504" y="93" width="74" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="StartEvent_1rszp1h" transform="matrix(1, 0, 0, 1, 156, 81)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1e1dfem" transform="matrix(1, 0, 0, 1, 250, 59)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1xhwqaw" transform="matrix(1, 0, 0, 1, 410, 59)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_1y7y2qq" transform="matrix(1, 0, 0, 1, 572, 81)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Participant_0d1j17w" transform="matrix(1, 0, 0, 1, 106, 330)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="600" height="250" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><polyline points="30,0 30,250 " style="fill: none; stroke: black; stroke-width: 2px;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label" transform="matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 250)"><tspan x="125" y="18.6"/></text></g><rect x="-6" y="-6" width="612" height="262" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="600" height="250"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="30" height="250"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_17bdkxb" style="display: block;"><g class="djs-visual"><path d="m  510,450L562,450 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="510,450 562,450 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="504" y="444" width="64" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1y8gn2q" transform="matrix(1, 0, 0, 1, 410, 410)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_1i86icp" transform="matrix(1, 0, 0, 1, 562, 432)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="MessageFlow_11xyv49" style="display: block;"><g class="djs-visual"><path d="m  300,139L300,450 L410,450 " style="fill: none; stroke-width: 1.5px; stroke: black; marker-end: url('#messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog'); marker-start: url('#messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog'); stroke-dasharray: 10px, 12px; stroke-linecap: round; stroke-linejoin: round;"/></g><polyline points="300,139 300,450 410,450 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="294" y="133" width="122" height="323" style="fill: none;" class="djs-outline"/></g></g></svg>
                        </p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>Es <strong>KANN</strong> mehrere Start Events für eine bestimmte Prozessebene geben.</p>
                        <p>&nbsp;</p>
                        <p>Jedes Start Event ist ein <strong>unabhängiges</strong> Event. Das heißt, eine Prozessinstanz <strong>SOLLTE</strong> erzeugt werden, wenn das Start</p>
                        <p>Event ausgelöst wird.</p>
                        <p>Wenn der Auslöser für ein Start Event eintritt, wird ein <strong>neuer</strong> Prozess <strong>instanziiert</strong> und für jeden <strong>ausgehenden Sequenzfluss</strong> aus diesem Event ein Token <strong>generiert</strong>.</p>
                        <p>&nbsp;</p>
                        <p>Wenn es ein <strong>End Event&nbsp;</strong>gibt, dann <strong>MUSS</strong> es <strong>mindestens ein Start Event</strong> geben.</p>
                        <p>&nbsp;</p>
                        <p>Wenn ein Prozess <strong>komplex</strong> ist und/oder die <strong>Startbedingungen nicht offensichtlich</strong> sind, dann wird <strong>EMPFOHLEN</strong>, ein Start Event zu verwenden.</p>
                        <p>&nbsp;</p>
                        <p>Wenn ein Start Event verwendet wird, <strong>DARF&nbsp;</strong>es<strong>&nbsp;KEINE</strong> anderen Flow Elemente geben, die keinen eingehenden Sequenzfluss haben. Alle anderen Flow-Objekte <strong>MÜSSEN</strong> ein Ziel von <strong>mindestens einem</strong> Sequenzfluss sein.</p>
                        <p>&nbsp;</p>
                        <p>Der folgende Prozess wurde nicht korrekt modelliert, da auf der linken unteren Seite ein Task als Start verwendet wird.
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="224 124 612 262" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Participant_03a3xmy" transform="matrix(1, 0, 0, 1, 230, 130)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="600" height="250" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><polyline points="30,0 30,250 " style="fill: none; stroke: black; stroke-width: 2px;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label" transform="matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 250)"><tspan x="125" y="18.6"/></text></g><rect x="-6" y="-6" width="612" height="262" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="600" height="250"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="30" height="250"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0bndu2r" style="display: block;"><g class="djs-visual"><path d="m  328,200L380,200 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="328,200 380,200 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="322" y="194" width="64" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0qc3cb2" style="display: block;"><g class="djs-visual"><path d="m  480,200L510,200 L510,260 L540,260 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="480,200 510,200 510,260 540,260 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="474" y="194" width="72" height="72" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0y23qal" style="display: block;"><g class="djs-visual"><path d="m  480,310L510,310 L510,260 L540,260 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="480,310 510,310 510,260 540,260 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="474" y="254" width="72" height="62" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_1l3ul6n" style="display: block;"><g class="djs-visual"><path d="m  640,260L702,260 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="640,260 702,260 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="634" y="254" width="74" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_1vdkvga" transform="matrix(1, 0, 0, 1, 292, 182)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_0r3b1bp" transform="matrix(1, 0, 0, 1, 380, 160)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1v8457e" transform="matrix(1, 0, 0, 1, 540, 220)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1b8dkrl" transform="matrix(1, 0, 0, 1, 380, 270)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_19ujfh0" transform="matrix(1, 0, 0, 1, 702, 242)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g></g></g></svg>
                        </p>
                    </td>
                    </tr>
                </tbody>
                </table>
                </div>`,
                intro_categories: catBeginer,
                intro_identifier:'1',
           },
           
            //--- 2.End Event --- EN ---
            {
                intro_text: `
                <div>
                <h3>End Event</h3>
                <table width="100%" cellspacing="0" cellpadding="0" border="0">
                <style>
                    table, th, td {
                    padding: 15px;
                    }
                </style>
                <tbody>
                    <tr>
                    <td width="10%" valign="top">
                        <p><strong>NOTATION&nbsp;</strong></p>
                    </td>
                    <td width="10%" valign="top">
                        <p><strong>ELEMENT NAME&nbsp;</strong></p>
                    </td>
                    <td width="40%" valign="top">
                        <p><strong>DESCRIPTION&nbsp;</strong></p>
                    </td>
                    <td width="40%" valign="top">
                        <p><strong>BEST PRACTICE&nbsp;</strong></p>
                    </td>
                    </tr>
                    <tr>
                    <td width="10%" valign="top">
                        <p>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="268 186 64 69" version="1.1"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_0vg1ktu" style="display: block;" transform="matrix(1 0 0 1 282 192)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_0vg1ktu_label" style="display: block;" transform="matrix(1 0 0 1 274 235)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">End Event</tspan></text></g><rect class="djs-hit djs-hit-all" x="0" y="0" width="52" height="14" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="64" height="26" class="djs-outline" style="fill: none;"/></g></g></svg>
                        </p>
                    </td>
                    <td width="10%" valign="top">
                        <p>End Event</p>
                    </td>
                    <td width="40%" valign="top">
                        <p>Indicates when the Process <strong>ends</strong>.</p>
                        <p>&nbsp;</p>
                        <p>In terms of Sequence Flows, the End Event <strong>ends</strong> the flow of the <strong>Process</strong>, and thus, will <strong>not have</strong> any <strong>outgoing Sequence Flows</strong>.</p>
                        <p>&nbsp;</p>
                        <p>The End Event shares the same basic shape of the Start Event and Intermediate Event, a circle with an open center so that markers can be placed within the circle to indicate variations of the Event.</p>
                        <p>&nbsp;</p>
                        <p><strong>End Event consumes</strong> a <strong>token</strong> that had been <strong>generated</strong> from a <strong>Start</strong> Event within the <strong>same</strong> level of <strong>Process</strong>.</p>
                    </td>
                    <td width="40%" valign="top">
                        <p>End Event <strong>indicates</strong> where a Process will <strong>end</strong>.</p>
                        <p>&nbsp;</p>
                        <p>If <strong>parallel</strong> Sequence Flows <strong>targets</strong> the <strong>End Event</strong>, then the <strong>tokens</strong> will be <strong>consumed</strong> as they <strong>arrive</strong>.</p>
                        <p>All the tokens that were generated within the Process <strong>MUST</strong> be consumed by an End Event <strong>before</strong> the Process has been <strong>completed</strong>.</p>
                        <p>&nbsp;</p>
                        <p>In <strong>exception flow</strong>, if the Process is a Sub-Process, it can be <strong>stopped prior</strong> to <strong>normal</strong> completion through <strong>interrupting Intermediate Events</strong></p>
                        <ul type="disc">
                        <li>In this situation the <strong>tokens</strong> will be <strong>consumed</strong> by an <strong>Intermediate</strong> Event attached to the <strong>boundary</strong> of the <strong>Sub-Process</strong>.</li>
                        </ul>
                        <p>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60%" height="60%" viewBox="276 94 220 212" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0ihmorq" style="display: block;"><g class="djs-visual"><path d="m  320,198L320,260 L390,260 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="320,198 320,260 390,260 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="314" y="192" width="82" height="74" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_0nhaq89" transform="matrix(1, 0, 0, 1, 290, 100)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1645169" transform="matrix(1, 0, 0, 1, 390, 220)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_07lyy5l" transform="matrix(1, 0, 0, 1, 302, 162)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 1;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="m 7.2,25.991999999999997 0.09350000000000001,-0.025300000000000003 7.3392,-9.610700000000001 7.667000000000001,8.9661 4.7003,-18.2204 -5.8707,11.6501 -7.299600000000001,-9.585400000000002 z" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Flow_0ihmorq_label" transform="matrix(1, 0, 0, 1, 282, 263)" style="display: block;"><g class="djs-visual"><text style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="0" y="9.899999999999999">Exception Flow</tspan></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="75" height="14"/><rect x="-6" y="-6" width="87" height="26" style="fill: none;" class="djs-outline"/></g></g></svg>
                        </p>
                    </td>
                    </tr>
                </tbody>
                </table>
                </div>`,

                // --- 2. End Event --- DE ---
                intro_text_de: `
                <div>
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <style>
                table, th, td {
                padding: 15px;}
                </style>
                <tbody>
                    <tr>
                    <td valign="top" width="10%">
                        <p><strong>NOTATION&nbsp;</strong></p>
                    </td>
                    <td valign="top" width="10%">
                        <p><strong>ELEMENT NAME&nbsp;</strong></p>
                    </td>
                    <td valign="top" width="40%">
                        <p><strong>BESCHREIBUNG</strong></p>
                    </td>
                    <td valign="top" width="40%">
                        <p><strong>BEST PRACTICE&nbsp;</strong></p>
                    </td>
                    </tr>
                    <tr>
                    <td valign="top" width="10%">
                        <p>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="69" viewBox="268 186 64 69" version="1.1"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_0vg1ktu" style="display: block;" transform="matrix(1 0 0 1 282 192)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_0vg1ktu_label" style="display: block;" transform="matrix(1 0 0 1 274 235)"><g class="djs-visual"><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;"><tspan x="0" y="9.899999999999999">End Event</tspan></text></g><rect class="djs-hit djs-hit-all" x="0" y="0" width="52" height="14" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="64" height="26" class="djs-outline" style="fill: none;"/></g></g></svg>
                        </p>
                    </td>
                    <td valign="top" width="10%">
                        <p>End Event</p>
                    </td>
                    <td valign="top" width="40%">
                        <p>Zeigt an, wann der Prozess <strong>endet</strong>.</p>
                        <p>&nbsp;</p>
                        <p>In Bezug auf Sequenzflüsse <strong>beendet</strong> das End Event den Fluss des <strong>Prozesses</strong> und <strong>hat daher keine ausgehenden Sequenzflüsse</strong>.</p>
                        <p>&nbsp;</p>
                        <p>Das End Event hat die gleiche Grundform wie das Start und Intermediate Event, einen Kreis mit einem offenen Zentrum, so dass innerhalb des Kreises Markierungen platziert werden können, um Variationen des Events anzuzeigen.</p>
                        <p>&nbsp;</p>
                        <p>Das <strong>End Event verbraucht</strong> einen <strong>Token</strong>, welcher aus einem <strong>Start</strong> Event innerhalb der <strong>gleichen</strong> <strong>Prozessebene</strong> <strong>erzeugt</strong> wurde.</p>
                    </td>
                    <td valign="top" width="40%">
                        <p>Das End Event <strong>zeigt an</strong>, wo ein Prozess <strong>endet</strong>.</p>
                        <p>&nbsp;</p>
                        <p>Wenn <strong>parallele</strong> Sequenzflüsse auf das <strong>End Event abzielen</strong>, werden die <strong>Token</strong> bei ihrer <strong>Ankunft verbraucht.</strong></p>
                        <p>&nbsp;</p>
                        <p>Alle Token, die innerhalb des Prozesses erzeugt wurden, <strong>MÜSSEN</strong> von einem End Event verbraucht werden, <strong>bevor</strong> der Prozess <strong>abgeschlossen</strong> ist.</p>
                        <p>&nbsp;</p>
                        <p>Wenn der Prozess ein Subprozess ist, kann er im&nbsp;<strong>Ausnahmefluss</strong> durch die&nbsp;<strong>Unterbrechung</strong> von&nbsp;<strong>Intermediate Events</strong> vor dem&nbsp;<strong>normalen&nbsp;</strong>Abschluss&nbsp;<strong>angehalten</strong> werden.</p>
                        <ul type="disc">
                        <li>In dieser Situation werden die <strong>Token</strong> durch ein <strong>Intermediate</strong> Event an der <strong>Grenze</strong> des <strong>Subprozesses</strong> verbraucht.</li>
                        </ul>
                        <p>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="276 94 220 212" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0ihmorq" style="display: block;"><g class="djs-visual"><path d="m  320,198L320,260 L390,260 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="320,198 320,260 390,260 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="314" y="192" width="82" height="74" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_0nhaq89" transform="matrix(1, 0, 0, 1, 290, 100)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1645169" transform="matrix(1, 0, 0, 1, 390, 220)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_07lyy5l" transform="matrix(1, 0, 0, 1, 302, 162)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 1;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="m 7.2,25.991999999999997 0.09350000000000001,-0.025300000000000003 7.3392,-9.610700000000001 7.667000000000001,8.9661 4.7003,-18.2204 -5.8707,11.6501 -7.299600000000001,-9.585400000000002 z" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Flow_0ihmorq_label" transform="matrix(1, 0, 0, 1, 282, 263)" style="display: block;"><g class="djs-visual"><text style="font-family: Arial, sans-serif; font-size: 11px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="0" y="9.899999999999999">Exception Flow</tspan></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="75" height="14"/><rect x="-6" y="-6" width="87" height="26" style="fill: none;" class="djs-outline"/></g></g></svg>
                        </p>
                    </td>
                    </tr>
                </tbody>
                </table>
                </div>`,
                intro_categories: catBeginer,
                intro_identifier:'2',
        },

        // --- 3.Task EN ---
        {
        intro_text: `
        <div>
        <table width="100%" cellspacing="0" cellpadding="0" border="0">
        <style>
        table, th, td {
        padding: 15px;}
        </style>
        <tbody>
            <tr>
            <td width="10%" valign="top">
                <p><strong>NOTATION&nbsp;</strong></p>
            </td>
            <td width="10%" valign="top">
                <p><strong>ELEMENT NAME&nbsp;</strong></p>
            </td>
            <td width="40%" valign="top">
                <p><strong>DESCRIPTION&nbsp;</strong></p>
            </td>
            <td width="40%" valign="top">
                <p><strong>BEST PRACTICE&nbsp;</strong></p>
            </td>
            </tr>
            <tr>
            <td width="10%" valign="top">
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="194 144 112 92" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_0vfye2t" transform="matrix(1, 0, 0, 1, 200, 150)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g></svg>
                </p>
            </td>
            <td width="10%" valign="top">
                <p>Task</p>
            </td>
            <td width="40%" valign="top">
                <p>A Task is <strong>work</strong> that is <strong>performed</strong> within a Business Process</p>
                <ul type="disc">
                <li>it can be <strong>atomic</strong> or <strong>non-atomic</strong> (compound)</li>
                <li><strong>represent</strong> <strong>points</strong> in a Process flow where <strong>work</strong> is <strong>performed</strong></li>
                <li>is a <strong>executable</strong> <strong>element</strong> of a BPMN</li>
                </ul>
            </td>
            <td width="40%" valign="top">
                <p><strong>&nbsp;</strong></p>
                <p><strong>A activity can be:</strong></p>
                <p><strong>Task</strong></p>
                <ul type="disc">
                <li>an <strong>atomic</strong> Activity within a <strong>Process flow</strong></li>
                <li>is used when the <strong>work</strong> in the Process <strong>cannot</strong> be <strong>broken down</strong> to a <strong>finer level</strong> of detail</li>
                <li>an <strong>end-user</strong> or <strong>applications</strong> are used to <strong>perform</strong> the Task when it is <strong>executed</strong></li>
                </ul>
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="112" height="92" viewBox="244 34 112 92" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_16meoi6" transform="matrix(1, 0, 0, 1, 250, 40)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 5px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text><rect x="0" y="0" width="14" height="14" rx="0" ry="0" style="stroke: black; stroke-width: 1px; fill: white;" transform="matrix(1, 0, 0, 1, 42.5, 60)"/><path d="m42.5,60 m 7,2 l 0,10 m -5,-5 l 10,0" style="fill: white; stroke-width: 2px; stroke: black;" data-marker="sub-process"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g></svg>
                </p>
                <p><strong>Sub-Process</strong></p>
                <p><strong>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="112" height="92" viewBox="304 234 112 92" version="1.1"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1x15bp8" style="display: block;" transform="matrix(1 0 0 1 310 240)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="50" y="43.599999999999994"/></text><rect x="0" y="0" width="14" height="14" rx="0" ry="0" style="stroke: black; stroke-width: 1px; fill: white;" transform="matrix(1 0 0 1 42.5 60)"/><path d="m42.5,60 m 7,2 l 0,10 m -5,-5 l 10,0" data-marker="sub-process" style="fill: white; stroke-width: 2px; stroke: black;"/></g><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/><rect class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_05gvqho" style="display: none;" transform="matrix(1 0 0 1 225 262)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g></g></g></svg>    
                </strong></p>
                <p><strong>Call Activity</strong></p>
                <ul type="disc">
                <li>allows the <strong>inclusion</strong> of <strong>re-usable</strong> Tasks and Processes in the diagram</li>
                </ul>
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="112" height="92" viewBox="244 34 112 92" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_16meoi6" transform="matrix(1, 0, 0, 1, 250, 40)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 5px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text><rect x="0" y="0" width="14" height="14" rx="0" ry="0" style="stroke: black; stroke-width: 1px; fill: white;" transform="matrix(1, 0, 0, 1, 42.5, 60)"/><path d="m42.5,60 m 7,2 l 0,10 m -5,-5 l 10,0" style="fill: white; stroke-width: 2px; stroke: black;" data-marker="sub-process"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g></svg>
                </p>
            </td>
            </tr>
        </tbody>
        </table>
        </div>`,


        // ---  3. Task --- DE ---
        intro_text_de: `
        <div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <style>
        table, th, td {
        padding: 15px;}
        </style>
        <tbody>
            <tr>
            <td valign="top" width="10%">
                <p><strong>NOTATION&nbsp;</strong></p>
            </td>
            <td valign="top" width="10%">
                <p><strong>ELEMENT NAME&nbsp;</strong></p>
            </td>
            <td valign="top" width="40%">
                <p><strong>BESCHREIBUNG</strong></p>
            </td>
            <td valign="top" width="40%">
                <p><strong>BEST PRACTICE&nbsp;</strong></p>
            </td>
            </tr>
            <tr>
            <td valign="top" width="10%">
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="112" height="92" viewBox="194 144 112 92" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_0vfye2t" transform="matrix(1, 0, 0, 1, 200, 150)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g></svg>
                </p>
            </td>
            <td valign="top" width="10%">
                <p>Task</p>
            </td>
            <td valign="top" width="40%">
                <p>Ein Task ist <strong>Arbeit</strong>, die innerhalb eines Geschäftsprozesses <strong>ausgeführt</strong> wird.</p>
                <ul type="disc">
                <li>kann <strong>atomar</strong> oder <strong>nicht atomar&nbsp;</strong>(zusammengesetzt) sein</li>
                <li><strong>repräsentiert Punkte</strong> in einem Prozessablauf, an denen&nbsp;<strong>Arbeit verrichtet&nbsp;</strong>wird</li>
                <li>ist ein <strong>ausführbares Element</strong> eines BPMN</li>
                </ul>
            </td>
            <td valign="top" width="40%">
                <p><strong>Eine Aktivität kann folgendes sein:</strong></p>
                <p><strong>Task</strong></p>
                <ul type="disc">
                <li>eine&nbsp;<strong>atomare</strong> Aktivität innerhalb eines&nbsp;<strong>Prozessablaufs</strong></li>
                <li>wird verwendet, wenn die <strong>Arbeit</strong> im Prozess <strong>nicht</strong> auf eine <strong>feinere Detailstufe</strong> <strong>heruntergebrochen</strong> werden kann</li>
                <li>ein&nbsp;<strong>Endbenutzer</strong> oder&nbsp;<strong>Anwendungen</strong> zur&nbsp;<strong>Ausführung</strong> des Tasks verwendet werden, wenn dieser&nbsp;<strong>ausgeführt&nbsp;</strong>wird</li>
                </ul>
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="244 34 112 92" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_16meoi6" transform="matrix(1, 0, 0, 1, 250, 40)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 5px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text><rect x="0" y="0" width="14" height="14" rx="0" ry="0" style="stroke: black; stroke-width: 1px; fill: white;" transform="matrix(1, 0, 0, 1, 42.5, 60)"/><path d="m42.5,60 m 7,2 l 0,10 m -5,-5 l 10,0" style="fill: white; stroke-width: 2px; stroke: black;" data-marker="sub-process"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g></svg>
                </p>
                <p><strong>Sub-Process</strong></p>
                <p><strong>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="304 234 112 92" version="1.1"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1x15bp8" style="display: block;" transform="matrix(1 0 0 1 310 240)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="50" y="43.599999999999994"/></text><rect x="0" y="0" width="14" height="14" rx="0" ry="0" style="stroke: black; stroke-width: 1px; fill: white;" transform="matrix(1 0 0 1 42.5 60)"/><path d="m42.5,60 m 7,2 l 0,10 m -5,-5 l 10,0" data-marker="sub-process" style="fill: white; stroke-width: 2px; stroke: black;"/></g><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/><rect class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_05gvqho" style="display: none;" transform="matrix(1 0 0 1 225 262)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g></g></g></svg>
                </strong></p>
                <p><strong>Call Activity</strong></p>
                <ul type="disc">
                <li>erlaubt die <strong>Aufnahme</strong> <strong>wiederverwendbarer</strong> Tasks und Prozesse in das Diagramm</li>
                </ul>
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="244 34 112 92" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_16meoi6" transform="matrix(1, 0, 0, 1, 250, 40)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 5px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text><rect x="0" y="0" width="14" height="14" rx="0" ry="0" style="stroke: black; stroke-width: 1px; fill: white;" transform="matrix(1, 0, 0, 1, 42.5, 60)"/><path d="m42.5,60 m 7,2 l 0,10 m -5,-5 l 10,0" style="fill: white; stroke-width: 2px; stroke: black;" data-marker="sub-process"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g></svg>
                </p>
            </td>
            </tr>
        </tbody>
        </table>
        </div>`,
        intro_categories: catBeginer,
        intro_identifier:'3',
    },



        // --- 4.User Task --- EN ---
        {
        intro_text: `
        <div>
        <table width="100%" cellspacing="0" cellpadding="0" border="0">
        <style>
        table, th, td {
        padding: 15px;}
        </style>
        <tbody>
            <tr>
            <td width="10%" valign="top">
                <p><strong>NOTATION&nbsp;</strong></p>
            </td>
            <td width="10%" valign="top">
                <p><strong>ELEMENT NAME&nbsp;</strong></p>
            </td>
            <td width="40%" valign="top">
                <p><strong>DESCRIPTION&nbsp;</strong></p>
            </td>
            <td width="40%" valign="top">
                <p><strong>BEST PRACTICE&nbsp;</strong></p>
            </td>
            </tr>
            <tr>
            <td width="10%" valign="top">
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="174 134 112 92" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_0kly9p0" transform="matrix(1, 0, 0, 1, 180, 140)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text><path d="m 15,12 c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5" style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 " style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z" style="fill: black; stroke-width: 0.5px; stroke: black;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g></svg>
                </p>
            </td>
            <td width="10%" valign="top">
                <p>User Task</p>
            </td>
            <td width="40%" valign="top">
                <p>Is a typical “<strong>workflow</strong>” Task where a <strong>human performer</strong> performs the Task with the <strong>assistance</strong> of a <strong>software application</strong>&nbsp;</p>
                <p><strong>Examples</strong>:</p>
                <ul>
                <li>Phone operator updates customer record</li>
                <li>User changing their password</li>
                </ul>
            </td>
            <td width="40%" valign="top">
                <p>The task is <strong>scheduled</strong> through a <strong>task list</strong> <strong>manager</strong> of some sort</p>
                <p><strong>Examples</strong>:</p>
                <ul type="disc">
                <li>Updating customers master data</li>
                <li>User changing password of customer account</li>
                </ul>
            </td>
            </tr>
        </tbody>
        </table>
        </div>`,

        // --- 4. User Task --- DE ---
        intro_text_de: `
        <div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <style>
        table, th, td {
        padding: 15px;}
        </style>
        <tbody>
            <tr>
            <td valign="top" width="10%">
                <p><strong>NOTATION&nbsp;</strong></p>
            </td>
            <td valign="top" width="10%">
                <p><strong>ELEMENT NAME&nbsp;</strong></p>
            </td>
            <td valign="top" width="40%">
                <p><strong>BESCHREIBUNG</strong></p>
            </td>
            <td valign="top" width="40%">
                <p><strong>BEST PRACTICE&nbsp;</strong></p>
            </td>
            </tr>
            <tr>
            <td valign="top" width="10%">
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="112" height="92" viewBox="174 134 112 92" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_0kly9p0" transform="matrix(1, 0, 0, 1, 180, 140)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text><path d="m 15,12 c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5" style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 " style="fill: white; stroke-width: 0.5px; stroke: black;"/><path d="m 15,12 m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z" style="fill: black; stroke-width: 0.5px; stroke: black;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g></svg>
                </p>
            </td>
            <td valign="top" width="10%">
                <p>User Task</p>
            </td>
            <td valign="top" width="40%">
                <p>Ist ein typischer „<strong>Workflow</strong>“-Task, bei dem eine&nbsp;<strong>Person</strong> die Aufgabe mit&nbsp;<strong>Hilfe einer Softwareanwendung</strong> ausführt.&nbsp;</p>
                <p><strong>Beispiele</strong>:</p>
                <ul>
                <li>Telefonanbieter aktualisiert den Kundendatensatz</li>
                <li>Benutzer, der sein Passwort ändert</li>
                </ul>
            </td>
            <td valign="top" width="40%">
                <p>Der Task wird durch eine Art <strong>Aufgabenlisten-Manager</strong> <strong>geplant</strong></p>
                <p><strong>Beispiele</strong>:</p>
                <ul type="disc">
                <li>Aktualisierung von Kundenstammdaten</li>
                <li>Benutzer, der das Passwort des Kundenkontos ändert</li>
                </ul>
            </td>
            </tr>
        </tbody>
        </table>
        </div>`,
        intro_categories: catBeginer,
        intro_identifier:'4',
            },



            {
        // ------ 5.Manual Task --- EN ------
        intro_text: `
        <div>
        <table width="100%" cellspacing="0" cellpadding="0" border="0">
        <style>
        table, th, td {
        padding: 15px;}
        </style>
        <tbody>
            <tr>
            <td width="10%" valign="top">
                <p><strong>NOTATION&nbsp;</strong></p>
            </td>
            <td width="10%" valign="top">
                <p><strong>ELEMENT NAME&nbsp;</strong></p>
            </td>
            <td width="40%" valign="top">
                <p><strong>DESCRIPTION&nbsp;</strong></p>
            </td>
            <td width="40%" valign="top">
                <p><strong>BEST PRACTICE&nbsp;</strong></p>
            </td>
            </tr>
            <tr>
            <td width="10%" valign="top">
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="174 134 112 92" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_0kly9p0" transform="matrix(1, 0, 0, 1, 180, 140)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text><path d="m 17,15 c 0.234,-0.01 5.604,0.008 8.029,0.004 0.808,0 1.271,-0.172 1.417,-0.752 0.227,-0.898 -0.334,-1.314 -1.338,-1.316 -2.467,-0.01 -7.886,-0.004 -8.108,-0.004 -0.014,-0.079 0.016,-0.533 0,-0.61 0.195,-0.042 8.507,0.006 9.616,0.002 0.877,-0.007 1.35,-0.438 1.353,-1.208 0.003,-0.768 -0.479,-1.09 -1.35,-1.091 -2.968,-0.002 -9.619,-0.013 -9.619,-0.013 v -0.591 c 0,0 5.052,-0.016 7.225,-0.016 0.888,-0.002 1.354,-0.416 1.351,-1.193 -0.006,-0.761 -0.492,-1.196 -1.361,-1.196 -3.473,-0.005 -10.86,-0.003 -11.0829995,-0.003 -0.022,-0.047 -0.045,-0.094 -0.069,-0.139 0.3939995,-0.319 2.0409995,-1.626 2.4149995,-2.017 0.469,-0.4870005 0.519,-1.1650005 0.162,-1.6040005 -0.414,-0.511 -0.973,-0.5 -1.48,-0.236 -1.4609995,0.764 -6.5999995,3.6430005 -7.7329995,4.2710005 -0.9,0.499 -1.516,1.253 -1.882,2.19 -0.37000002,0.95 -0.17,2.01 -0.166,2.979 0.004,0.718 -0.27300002,1.345 -0.055,2.063 0.629,2.087 2.425,3.312 4.859,3.318 4.6179995,0.014 9.2379995,-0.139 13.8569995,-0.158 0.755,-0.004 1.171,-0.301 1.182,-1.033 0.012,-0.754 -0.423,-0.969 -1.183,-0.973 -1.778,-0.01 -5.824,-0.004 -6.04,-0.004 10e-4,-0.084 0.003,-0.586 10e-4,-0.67 z" style="fill: white; stroke-width: 0.5px; stroke: black;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g></svg>
                </p>
            </td>
            <td width="10%" valign="top">
                <p>Manual Task</p>
            </td>
            <td width="40%" valign="top">
                <p>It is expected to be <strong>performed</strong> <strong>without</strong> the aid of <strong>any business process</strong> <strong>execution engine</strong> or any <strong>application</strong></p>
                <p><strong>Example</strong>:</p>
                <ul>
                <li>Picking goods from warehouses storage bin</li>
                </ul>
                <p>&nbsp;</p>
            </td>
            <td width="40%" valign="top">
                <p>&nbsp; 
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="70%" height="70%" viewBox="146 114 308 92" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="association-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_1lp0hhf" style="display: block;"><g class="djs-visual"><path d="m  188,160L250,160 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="188,160 250,160 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="182" y="154" width="74" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0t60zdz" style="display: block;"><g class="djs-visual"><path d="m  350,160L412,160 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="350,160 412,160 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="344" y="154" width="74" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_15kp7gh" transform="matrix(1, 0, 0, 1, 250, 120)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="20" y="36.4">Inform CIO </tspan><tspan x="8.5" y="50.8">about changes</tspan></text><path d="m 17,15 c 0.234,-0.01 5.604,0.008 8.029,0.004 0.808,0 1.271,-0.172 1.417,-0.752 0.227,-0.898 -0.334,-1.314 -1.338,-1.316 -2.467,-0.01 -7.886,-0.004 -8.108,-0.004 -0.014,-0.079 0.016,-0.533 0,-0.61 0.195,-0.042 8.507,0.006 9.616,0.002 0.877,-0.007 1.35,-0.438 1.353,-1.208 0.003,-0.768 -0.479,-1.09 -1.35,-1.091 -2.968,-0.002 -9.619,-0.013 -9.619,-0.013 v -0.591 c 0,0 5.052,-0.016 7.225,-0.016 0.888,-0.002 1.354,-0.416 1.351,-1.193 -0.006,-0.761 -0.492,-1.196 -1.361,-1.196 -3.473,-0.005 -10.86,-0.003 -11.0829995,-0.003 -0.022,-0.047 -0.045,-0.094 -0.069,-0.139 0.3939995,-0.319 2.0409995,-1.626 2.4149995,-2.017 0.469,-0.4870005 0.519,-1.1650005 0.162,-1.6040005 -0.414,-0.511 -0.973,-0.5 -1.48,-0.236 -1.4609995,0.764 -6.5999995,3.6430005 -7.7329995,4.2710005 -0.9,0.499 -1.516,1.253 -1.882,2.19 -0.37000002,0.95 -0.17,2.01 -0.166,2.979 0.004,0.718 -0.27300002,1.345 -0.055,2.063 0.629,2.087 2.425,3.312 4.859,3.318 4.6179995,0.014 9.2379995,-0.139 13.8569995,-0.158 0.755,-0.004 1.171,-0.301 1.182,-1.033 0.012,-0.754 -0.423,-0.969 -1.183,-0.973 -1.778,-0.01 -5.824,-0.004 -6.04,-0.004 10e-4,-0.084 0.003,-0.586 10e-4,-0.67 z" style="fill: white; stroke-width: 0.5px; stroke: black;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_0ua4r1s" transform="matrix(1, 0, 0, 1, 152, 142)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_125fztt" transform="matrix(1, 0, 0, 1, 412, 142)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g></svg>
                </p>
            </td>
            </tr>
        </tbody>
        </table>
        </div>`,

        // ------ 5.Manual Task --- DE ------
        intro_text_de: `
        <div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <style>
        table, th, td {
        padding: 15px;}
        </style>
        <tbody>
            <tr>
            <td valign="top" width="10%">
                <p><strong>NOTATION&nbsp;</strong></p>
            </td>
            <td valign="top" width="10%">
                <p><strong>ELEMENT NAME&nbsp;</strong></p>
            </td>
            <td valign="top" width="40%">
                <p><strong>BESCHREIBUNG</strong></p>
            </td>
            <td valign="top" width="40%">
                <p><strong>BEST PRACTICE&nbsp;</strong></p>
            </td>
            </tr>
            <tr>
            <td valign="top" width="10%">
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="112" height="92" viewBox="174 134 112 92" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_0kly9p0" transform="matrix(1, 0, 0, 1, 180, 140)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text><path d="m 17,15 c 0.234,-0.01 5.604,0.008 8.029,0.004 0.808,0 1.271,-0.172 1.417,-0.752 0.227,-0.898 -0.334,-1.314 -1.338,-1.316 -2.467,-0.01 -7.886,-0.004 -8.108,-0.004 -0.014,-0.079 0.016,-0.533 0,-0.61 0.195,-0.042 8.507,0.006 9.616,0.002 0.877,-0.007 1.35,-0.438 1.353,-1.208 0.003,-0.768 -0.479,-1.09 -1.35,-1.091 -2.968,-0.002 -9.619,-0.013 -9.619,-0.013 v -0.591 c 0,0 5.052,-0.016 7.225,-0.016 0.888,-0.002 1.354,-0.416 1.351,-1.193 -0.006,-0.761 -0.492,-1.196 -1.361,-1.196 -3.473,-0.005 -10.86,-0.003 -11.0829995,-0.003 -0.022,-0.047 -0.045,-0.094 -0.069,-0.139 0.3939995,-0.319 2.0409995,-1.626 2.4149995,-2.017 0.469,-0.4870005 0.519,-1.1650005 0.162,-1.6040005 -0.414,-0.511 -0.973,-0.5 -1.48,-0.236 -1.4609995,0.764 -6.5999995,3.6430005 -7.7329995,4.2710005 -0.9,0.499 -1.516,1.253 -1.882,2.19 -0.37000002,0.95 -0.17,2.01 -0.166,2.979 0.004,0.718 -0.27300002,1.345 -0.055,2.063 0.629,2.087 2.425,3.312 4.859,3.318 4.6179995,0.014 9.2379995,-0.139 13.8569995,-0.158 0.755,-0.004 1.171,-0.301 1.182,-1.033 0.012,-0.754 -0.423,-0.969 -1.183,-0.973 -1.778,-0.01 -5.824,-0.004 -6.04,-0.004 10e-4,-0.084 0.003,-0.586 10e-4,-0.67 z" style="fill: white; stroke-width: 0.5px; stroke: black;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g></svg>
                </p>
            </td>
            <td valign="top" width="10%">
                <p>Manual Task</p>
            </td>
            <td valign="top" width="40%">
                <p>Es wird erwartet, dass der Task&nbsp;<strong>ohne</strong> die Hilfe einer&nbsp;<strong>Geschäftsprozessausführungs-Engine</strong> oder einer&nbsp;<strong>Anwendung</strong> <strong>durchgeführt</strong> wird.</p>
                <p><strong>Beispiel</strong>:</p>
                <ul>
                <li>Kommissionierung von Waren aus dem Lagerhaus</li>
                </ul>
                <p>&nbsp;</p>
            </td>
            <td valign="top" width="40%">
                <p>&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="146 114 308 92" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="association-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0t60zdz" style="display: block;"><g class="djs-visual"><path d="m  350,160L412,160 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="350,160 412,160 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="344" y="154" width="74" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_1lp0hhf" style="display: block;"><g class="djs-visual"><path d="m  188,160L250,160 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="188,160 250,160 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="182" y="154" width="74" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape selected" data-element-id="Activity_15kp7gh" transform="matrix(1, 0, 0, 1, 250, 120)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="25" y="29.200000000000003">CIO über </tspan><tspan x="16" y="43.6">Änderungen </tspan><tspan x="18" y="58">informieren</tspan></text><path d="m 17,15 c 0.234,-0.01 5.604,0.008 8.029,0.004 0.808,0 1.271,-0.172 1.417,-0.752 0.227,-0.898 -0.334,-1.314 -1.338,-1.316 -2.467,-0.01 -7.886,-0.004 -8.108,-0.004 -0.014,-0.079 0.016,-0.533 0,-0.61 0.195,-0.042 8.507,0.006 9.616,0.002 0.877,-0.007 1.35,-0.438 1.353,-1.208 0.003,-0.768 -0.479,-1.09 -1.35,-1.091 -2.968,-0.002 -9.619,-0.013 -9.619,-0.013 v -0.591 c 0,0 5.052,-0.016 7.225,-0.016 0.888,-0.002 1.354,-0.416 1.351,-1.193 -0.006,-0.761 -0.492,-1.196 -1.361,-1.196 -3.473,-0.005 -10.86,-0.003 -11.0829995,-0.003 -0.022,-0.047 -0.045,-0.094 -0.069,-0.139 0.3939995,-0.319 2.0409995,-1.626 2.4149995,-2.017 0.469,-0.4870005 0.519,-1.1650005 0.162,-1.6040005 -0.414,-0.511 -0.973,-0.5 -1.48,-0.236 -1.4609995,0.764 -6.5999995,3.6430005 -7.7329995,4.2710005 -0.9,0.499 -1.516,1.253 -1.882,2.19 -0.37000002,0.95 -0.17,2.01 -0.166,2.979 0.004,0.718 -0.27300002,1.345 -0.055,2.063 0.629,2.087 2.425,3.312 4.859,3.318 4.6179995,0.014 9.2379995,-0.139 13.8569995,-0.158 0.755,-0.004 1.171,-0.301 1.182,-1.033 0.012,-0.754 -0.423,-0.969 -1.183,-0.973 -1.778,-0.01 -5.824,-0.004 -6.04,-0.004 10e-4,-0.084 0.003,-0.586 10e-4,-0.67 z" style="fill: white; stroke-width: 0.5px; stroke: black;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_0ua4r1s" transform="matrix(1, 0, 0, 1, 152, 142)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_125fztt" transform="matrix(1, 0, 0, 1, 412, 142)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g></svg>
                </p>
            </td>
            </tr>
        </tbody>
        </table>
        </div>`,
        intro_categories: catBeginer,
        intro_identifier:'5',
        },


        
        {
        // ------ 6.Receive Task --- EN ------
        intro_text: `
        <div>
        <table width="100%" cellspacing="0" cellpadding="0" border="0">
        <style>
        table, th, td {
        padding: 15px;}
        </style>
        <tbody>
            <tr>
            <td width="10%" valign="top">
                <p><strong>NOTATION&nbsp;</strong></p>
            </td>
            <td width="10%" valign="top">
                <p><strong>ELEMENT NAME&nbsp;</strong></p>
            </td>
            <td width="40%" valign="top">
                <p><strong>DESCRIPTION&nbsp;</strong></p>
            </td>
            <td width="40%" valign="top">
                <p><strong>BEST PRACTICE&nbsp;</strong></p>
            </td>
            </tr>
            <tr>
            <td width="10%" valign="top">
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="244 184 112 92" version="1.1"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1pg6lpq" style="display: block;" transform="matrix(1 0 0 1 250 190)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="50" y="43.599999999999994"/></text><path d="m 6.3,5.6000000000000005 l 0,12.6 l 18.900000000000002,0 l 0,-12.6 z l 9.450000000000001,5.4 l 9.450000000000001,-5.4" style="fill: white; stroke-width: 1px; stroke: black;"/></g><rect class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g></svg>
                </p>
            </td>
            <td width="10%" valign="top">
                <p>Receive Task</p>
            </td>
            <td width="40%" valign="top">
                <p>Waits for a <strong>Message</strong> to <strong>arrive</strong> from an <strong>internal</strong> or <strong>external</strong> <strong>Participant</strong> (<strong>lane</strong> or <strong>pool</strong>)</p>
                <p>Once the Message has <strong>been received</strong>, the <strong>Task is completed</strong></p>
            </td>
            <td width="40%" valign="top">
                <p>&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="65%" height="65%" viewBox="176 104 288 92" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="association-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_13ru1br" style="display: block;"><g class="djs-visual"><path d="m  218,150L270,150 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="218,150 270,150 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="212" y="144" width="64" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_199vy18" style="display: block;"><g class="djs-visual"><path d="m  370,150L422,150 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="370,150 422,150 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="364" y="144" width="64" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_0ywe162" transform="matrix(1, 0, 0, 1, 182, 132)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_1il0i7h" transform="matrix(1, 0, 0, 1, 422, 132)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_0gdln0o" transform="matrix(1, 0, 0, 1, 270, 110)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="9" y="36.4">Receive E-Mail </tspan><tspan x="9.5" y="50.8">from customer</tspan></text><path d="m 6.3,5.6000000000000005 l 0,12.6 l 18.900000000000002,0 l 0,-12.6 z l 9.450000000000001,5.4 l 9.450000000000001,-5.4" style="fill: white; stroke-width: 1px; stroke: black;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g></svg>
                </p>
            </td>
            </tr>
        </tbody>
        </table>
        </div>`,

        // ------ 6.Receive Task DE ------
        intro_text_de: `
        <div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <style>
        table, th, td {
        padding: 15px;}
        </style>
        <tbody>
            <tr>
            <td valign="top" width="10%">
                <p><strong>NOTATION&nbsp;</strong></p>
            </td>
            <td valign="top" width="10%">
                <p><strong>ELEMENT NAME&nbsp;</strong></p>
            </td>
            <td valign="top" width="40%">
                <p><strong>BESCHREIBUNG&nbsp;</strong></p>
            </td>
            <td valign="top" width="40%">
                <p><strong>BEST PRACTICE&nbsp;</strong></p>
            </td>
            </tr>
            <tr>
            <td valign="top" width="10%">
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="112" height="92" viewBox="244 184 112 92" version="1.1"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1pg6lpq" style="display: block;" transform="matrix(1 0 0 1 250 190)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="50" y="43.599999999999994"/></text><path d="m 6.3,5.6000000000000005 l 0,12.6 l 18.900000000000002,0 l 0,-12.6 z l 9.450000000000001,5.4 l 9.450000000000001,-5.4" style="fill: white; stroke-width: 1px; stroke: black;"/></g><rect class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g></svg>
                </p>
            </td>
            <td valign="top" width="10%">
                <p>Receive Task</p>
            </td>
            <td valign="top" width="40%">
                <p>Wartet auf eine&nbsp;<strong>Nachricht</strong> von einem&nbsp;<strong>internen&nbsp;</strong>oder<strong>&nbsp;externen</strong> <strong>Teilnehmer</strong> (<strong>Lane&nbsp;</strong>oder<strong>&nbsp;Pool</strong>). Sobald die Nachricht&nbsp;<strong>empfangen</strong> <strong>wurde</strong>, ist der&nbsp;<strong>Task abgeschlossen</strong>.</p>
            </td>
            <td valign="top" width="40%">
                <p>&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="176 104 288 92" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="association-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_13ru1br" style="display: block;"><g class="djs-visual"><path d="m  218,150L270,150 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="218,150 270,150 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="212" y="144" width="64" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_199vy18" style="display: block;"><g class="djs-visual"><path d="m  370,150L422,150 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="370,150 422,150 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="364" y="144" width="64" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_0ywe162" transform="matrix(1, 0, 0, 1, 182, 132)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_1il0i7h" transform="matrix(1, 0, 0, 1, 422, 132)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_0gdln0o" transform="matrix(1, 0, 0, 1, 270, 110)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="21.5" y="29.200000000000003">E-Mail von </tspan><tspan x="28" y="43.6">Kunden </tspan><tspan x="27" y="58">erhalten</tspan></text><path d="m 6.3,5.6000000000000005 l 0,12.6 l 18.900000000000002,0 l 0,-12.6 z l 9.450000000000001,5.4 l 9.450000000000001,-5.4" style="fill: white; stroke-width: 1px; stroke: black;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g></svg>
                </p>
            </td>
            </tr>
        </tbody>
        </table>        
        </div>`,
        intro_categories: catBeginer,
        intro_identifier:'6',
        },



        {
        // ------ 7.Send Task EN ------
        intro_text: `
        <div>
        <table width="100%" cellspacing="0" cellpadding="0" border="0">
        <style>
        table, th, td {
        padding: 15px;}
        </style>
        <tbody>
            <tr>
            <td width="10%" valign="top">
                <p><strong>NOTATION&nbsp;</strong></p>
            </td>
            <td width="10%" valign="top">
                <p><strong>ELEMENT NAME&nbsp;</strong></p>
            </td>
            <td width="40%" valign="top">
                <p><strong>DESCRIPTION&nbsp;</strong></p>
            </td>
            <td width="40%" valign="top">
                <p><strong>BEST PRACTICE&nbsp;</strong></p>
            </td>
            </tr>
            <tr>
            <td width="10%" valign="top">
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="284 174 112 92" version="1.1"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_151jrzp" style="display: block;" transform="matrix(1 0 0 1 290 180)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="50" y="43.599999999999994"/></text><path d="m 5.984999999999999,4.997999999999999 l 0,14 l 21,0 l 0,-14 z l 10.5,6 l 10.5,-6" style="fill: black; stroke-width: 1px; stroke: white;"/></g><rect class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g></svg>
                </p>
            </td>
            <td width="10%" valign="top">
                <p>Send Task</p>
            </td>
            <td width="40%" valign="top">
                <p><strong>&nbsp;</strong></p>
                <p><strong>Sends</strong> a <strong>Message</strong> to an <strong>internal</strong> or <strong>external</strong> <strong>Participant</strong> (<strong>lane</strong> or <strong>pool</strong>)</p>
            </td>
            <td width="40%" valign="top">
                <p>&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="70%" height="70%" viewBox="146 114 308 92" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="association-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0t60zdz" style="display: block;"><g class="djs-visual"><path d="m  350,160L412,160 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="350,160 412,160 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="344" y="154" width="74" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_1lp0hhf" style="display: block;"><g class="djs-visual"><path d="m  188,160L250,160 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="188,160 250,160 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="182" y="154" width="74" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_0ua4r1s" transform="matrix(1, 0, 0, 1, 152, 142)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_125fztt" transform="matrix(1, 0, 0, 1, 412, 142)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_15kp7gh" transform="matrix(1, 0, 0, 1, 250, 120)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="10" y="36.4">Send E-Mail to </tspan><tspan x="23.5" y="50.8">customer</tspan></text><path d="m 5.984999999999999,4.997999999999999 l 0,14 l 21,0 l 0,-14 z l 10.5,6 l 10.5,-6" style="fill: black; stroke-width: 1px; stroke: white;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g></svg>
                </p>
            </td>
            </tr>
        </tbody>
        </table>
        </div>`,

        // ------ 7. Send Task --- DE ------
        intro_text_de: `
        <div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <style>
        table, th, td {
        padding: 15px;}
        </style>
        <tbody>
            <tr>
            <td valign="top" width="10%">
                <p><strong>NOTATION&nbsp;</strong></p>
            </td>
            <td valign="top" width="10%">
                <p><strong>ELEMENT NAME&nbsp;</strong></p>
            </td>
            <td valign="top" width="40%">
                <p><strong>BESCHREIBUNG</strong></p>
            </td>
            <td valign="top" width="40%">
                <p><strong>BEST PRACTICE&nbsp;</strong></p>
            </td>
            </tr>
            <tr>
            <td valign="top" width="10%">
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="112" height="92" viewBox="284 174 112 92" version="1.1"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_151jrzp" style="display: block;" transform="matrix(1 0 0 1 290 180)"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;"><tspan x="50" y="43.599999999999994"/></text><path d="m 5.984999999999999,4.997999999999999 l 0,14 l 21,0 l 0,-14 z l 10.5,6 l 10.5,-6" style="fill: black; stroke-width: 1px; stroke: white;"/></g><rect class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="112" height="92" class="djs-outline" style="fill: none;"/></g></g></svg>
                </p>
            </td>
            <td valign="top" width="10%">
                <p>Send Task</p>
            </td>
            <td valign="top" width="40%">
                <p><strong>Versenden</strong> einer <strong>Nachricht</strong> an einen <strong>internen</strong> oder <strong>externen Teilnehmer</strong> (<strong>Lane</strong> oder <strong>Pool</strong>)</p>
            </td>
            <td valign="top" width="40%">
                <p>&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="146 114 308 92" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="association-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0t60zdz" style="display: block;"><g class="djs-visual"><path d="m  350,160L412,160 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="350,160 412,160 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="344" y="154" width="74" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_1lp0hhf" style="display: block;"><g class="djs-visual"><path d="m  188,160L250,160 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="188,160 250,160 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="182" y="154" width="74" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_0ua4r1s" transform="matrix(1, 0, 0, 1, 152, 142)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_125fztt" transform="matrix(1, 0, 0, 1, 412, 142)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_15kp7gh" transform="matrix(1, 0, 0, 1, 250, 120)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="13" y="36.4">Sende E-Mail </tspan><tspan x="19.5" y="50.8">an Kunden</tspan></text><path d="m 5.984999999999999,4.997999999999999 l 0,14 l 21,0 l 0,-14 z l 10.5,6 l 10.5,-6" style="fill: black; stroke-width: 1px; stroke: white;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g></svg>
                </p>
            </td>
            </tr>
        </tbody>
        </table>       
        </div>`,
        intro_categories: catBeginer,
        intro_identifier:'7',
        },



        {
        // ------ 8.Script Task EN ------
        intro_text: `
        <div>
        <table width="100%" cellspacing="0" cellpadding="0" border="0">
        <style>
        table, th, td {
        padding: 15px;}
        </style>
        <tbody>
            <tr>
            <td width="10%" valign="top">
                <p><strong>NOTATION&nbsp;</strong></p>
            </td>
            <td width="10%" valign="top">
                <p><strong>ELEMENT NAME&nbsp;</strong></p>
            </td>
            <td width="40%" valign="top">
                <p><strong>DESCRIPTION&nbsp;</strong></p>
            </td>
            <td width="40%" valign="top">
                <p><strong>BEST PRACTICE&nbsp;</strong></p>
            </td>
            </tr>
            <tr>
            <td width="10%" valign="top">
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="174 134 112 92" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape selected" data-element-id="Activity_0kly9p0" transform="matrix(1, 0, 0, 1, 180, 140)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text><path d="m 15,20 c 9.966553,-6.27276 -8.000926,-7.91932 2.968968,-14.938 l -8.802728,0 c -10.969894,7.01868 6.997585,8.66524 -2.968967,14.938 z m -7,-12 l 5,0 m -4.5,3 l 4.5,0 m -3,3 l 5,0m -4,3 l 5,0" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" style="fill: none;" class="djs-outline"/></g></g></svg>
                </p>
            </td>
            <td width="10%" valign="top">
                <p>Script Task</p>
            </td>
            <td width="40%" valign="top">
                <p>It is <strong>executed</strong> by a <strong>business process engine</strong>.</p>
                <p>A <strong>modeler</strong> or <strong>implementer</strong> <strong>defines</strong> a <strong>script</strong> in a <strong>language</strong> that the <strong>engine</strong> can <strong>interpret</strong>.</p>
                <p>When the <strong>Task</strong> is <strong>ready</strong> to <strong>start</strong>, the <strong>engine</strong> will <strong>execute</strong> the <strong>script</strong>.</p>
                <p>When the <strong>script</strong> is <strong>completed</strong>, the <strong>Task</strong> will also be <strong>completed</strong>.</p>
            </td>
            <td width="40%" valign="top">
                <p>&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="70%" height="70%" viewBox="146 114 308 92" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="association-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0t60zdz" style="display: block;"><g class="djs-visual"><path d="m  350,160L412,160 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="350,160 412,160 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="344" y="154" width="74" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_1lp0hhf" style="display: block;"><g class="djs-visual"><path d="m  188,160L250,160 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="188,160 250,160 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="182" y="154" width="74" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_0ua4r1s" transform="matrix(1, 0, 0, 1, 152, 142)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_125fztt" transform="matrix(1, 0, 0, 1, 412, 142)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_15kp7gh" transform="matrix(1, 0, 0, 1, 250, 120)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="6" y="43.599999999999994">Filter by amount</tspan></text><path d="m 15,20 c 9.966553,-6.27276 -8.000926,-7.91932 2.968968,-14.938 l -8.802728,0 c -10.969894,7.01868 6.997585,8.66524 -2.968967,14.938 z m -7,-12 l 5,0 m -4.5,3 l 4.5,0 m -3,3 l 5,0m -4,3 l 5,0" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g></svg>
                </p>
            </td>
            </tr>
        </tbody>
        </table>
        </div>`,

        // ------ 8.Script Task DE ------
        intro_text_de: `
        <div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <style>
        table, th, td {
        padding: 15px;}
        </style>
        <tbody>
            <tr>
            <td valign="top" width="10%">
                <p><strong>NOTATION&nbsp;</strong></p>
            </td>
            <td valign="top" width="10%">
                <p><strong>ELEMENT NAME&nbsp;</strong></p>
            </td>
            <td valign="top" width="40%">
                <p><strong>BESCHREIBUNG&nbsp;</strong></p>
            </td>
            <td valign="top" width="40%">
                <p><strong>BEST PRACTICE&nbsp;</strong></p>
            </td>
            </tr>
            <tr>
            <td valign="top" width="10%">
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="308" height="92" viewBox="146 114 308 92" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="association-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0t60zdz" style="display: block;"><g class="djs-visual"><path d="m  350,160L412,160 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="350,160 412,160 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="344" y="154" width="74" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_1lp0hhf" style="display: block;"><g class="djs-visual"><path d="m  188,160L250,160 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="188,160 250,160 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="182" y="154" width="74" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_0ua4r1s" transform="matrix(1, 0, 0, 1, 152, 142)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_125fztt" transform="matrix(1, 0, 0, 1, 412, 142)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_15kp7gh" transform="matrix(1, 0, 0, 1, 250, 120)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="15" y="36.4">Nach Menge </tspan><tspan x="25" y="50.8">sortieren</tspan></text><path d="m 15,20 c 9.966553,-6.27276 -8.000926,-7.91932 2.968968,-14.938 l -8.802728,0 c -10.969894,7.01868 6.997585,8.66524 -2.968967,14.938 z m -7,-12 l 5,0 m -4.5,3 l 4.5,0 m -3,3 l 5,0m -4,3 l 5,0" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g></svg>
                </p>
            </td>
            <td valign="top" width="10%">
                <p>Script Task</p>
            </td>
            <td valign="top" width="40%">
                <p>Der Task wird von einer <strong>Geschäftsprozess-Engine ausgeführt</strong>. Ein <strong>Modellierer</strong> oder <strong>Implementierer definiert</strong> ein <strong>Skript</strong> in einer <strong>Sprache</strong>, die die <strong>Engine interpretieren</strong> kann. Wenn der <strong>Task startbereit</strong> ist, <strong>führt</strong> die <strong>Engine</strong> das <strong>Skript aus</strong>. Wenn das <strong>Skript abgeschlossen</strong> ist, wird auch der <strong>Task abgeschlossen</strong>.</p>
            </td>
            <td valign="top" width="40%">
                <p>&nbsp; 
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="174 134 112 92" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape selected" data-element-id="Activity_0kly9p0" transform="matrix(1, 0, 0, 1, 180, 140)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text><path d="m 15,20 c 9.966553,-6.27276 -8.000926,-7.91932 2.968968,-14.938 l -8.802728,0 c -10.969894,7.01868 6.997585,8.66524 -2.968967,14.938 z m -7,-12 l 5,0 m -4.5,3 l 4.5,0 m -3,3 l 5,0m -4,3 l 5,0" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g></svg>
                </p>
            </td>
            </tr>
        </tbody>
        </table>        
        </div>`,
        intro_categories: catBeginer,
        intro_identifier:'8',
        },



        {
        // ------ 9.Sequence Flow EN ------
        intro_text: `
        <div>
        <table width="100%" cellspacing="0" cellpadding="0" border="0">
        <style>
        table, th, td {
        padding: 15px;}
        </style>
        <tbody>
            <tr>
            <td width="10%" valign="top">
                <p><strong>NOTATION&nbsp;</strong></p>
            </td>
            <td width="10%" valign="top">
                <p><strong>ELEMENT NAME&nbsp;</strong></p>
            </td>
            <td width="40%" valign="top">
                <p><strong>DESCRIPTION&nbsp;</strong></p>
            </td>
            <td width="40%" valign="top">
                <p><strong>BEST PRACTICE&nbsp;</strong></p>
            </td>
            </tr>
            <tr>
            <td width="10%" valign="top">
                <p>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAAAcCAMAAADofvVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAByUExURf////7+/u7u7gAAAGtra9LS0vT09F5eXrCwsPDw8ENDQ4aGhurq6ikpKXx8fOPj4w4ODvn5+U9PT/j4+BwcHFVVVcvLyycnJ2dnZ9ra2jw8PJaWlt/f3z8/P7W1tTg4ON7e3v39/RcXF2NjY9vb2wAAAEDgl0YAAAAmdFJOU/////////////////////////////////////////////////8Ap3qBvAAAAAlwSFlzAAAh1QAAIdUBBJy0nQAAAIFJREFUWEft1r0KgCAYhWHRJQyixR8Isvu/yqy+QqO2Bk+cZzJ0eDWJFBEREX1Em7hoGQPSJnOdPMHZ8zPbQ76DMz8LA94OivxNfN2BLGie9RJc8TLbvOAe+9t0uzwhLjKBocxPE1Z7duWnGfHLeeQnuGMX2oxg170G/MNDRP+k1ArtOwd+dquHuQAAAABJRU5ErkJggg==" width="83">
                </p>
            </td>
            <td width="10%" valign="top">
                <p>Sequence Flow</p>
            </td>
            <td width="40%" valign="top">
                <p>The Sequence Flow <strong>represents</strong> the <strong>order</strong> in which all <strong>activities</strong> in the <strong>process</strong> are <strong>executed</strong>.</p>
            </td>
            <td width="40%" valign="top">
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="106 64 1008 202" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="association-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_1wke65b" style="display: block;"><g class="djs-visual"><path d="m  148,110L200,110 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="148,110 200,110 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="142" y="104" width="64" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0q6g6uz" style="display: block;"><g class="djs-visual"><path d="m  300,110L355,110 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="300,110 355,110 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="294" y="104" width="67" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_11gclmp" style="display: block;"><g class="djs-visual"><path d="m  405,110L460,110 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="405,110 460,110 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="399" y="104" width="67" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0rhpfng" style="display: block;"><g class="djs-visual"><path d="m  380,135L380,220 L460,220 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="380,135 380,220 460,220 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="374" y="129" width="92" height="97" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_1pm8u2h" style="display: block;"><g class="djs-visual"><path d="m  560,110L620,110 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="560,110 620,110 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="554" y="104" width="72" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_1q5dkcv" style="display: block;"><g class="djs-visual"><path d="m  720,110L810,110 L810,145 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="720,110 810,110 810,145 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="714" y="104" width="102" height="47" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_1a1gwp1" style="display: block;"><g class="djs-visual"><path d="m  560,220L810,220 L810,195 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="560,220 810,220 810,195 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="554" y="189" width="262" height="37" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0h9uyfi" style="display: block;"><g class="djs-visual"><path d="m  835,170L900,170 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="835,170 900,170 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="829" y="164" width="77" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0szue2e" style="display: block;"><g class="djs-visual"><path d="m  1000,170L1072,170 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="1000,170 1072,170 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="994" y="164" width="84" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_1g2szpk" transform="matrix(1, 0, 0, 1, 112, 92)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_09bzctc" transform="matrix(1, 0, 0, 1, 200, 70)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1je1p32" transform="matrix(1, 0, 0, 1, 460, 70)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1xhzsm6" transform="matrix(1, 0, 0, 1, 460, 180)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_0imnsxh" transform="matrix(1, 0, 0, 1, 620, 70)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Gateway_0xi4r93" transform="matrix(1, 0, 0, 1, 785, 145)" style="display: block;"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 23,10 0,12.5 -12.5,0 0,5 12.5,0 0,12.5 5,0 0,-12.5 12.5,0 0,-5 -12.5,0 0,-12.5 -5,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="50" height="50"/><rect x="-6" y="-6" width="62" height="62" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Gateway_1j57ffs" transform="matrix(1, 0, 0, 1, 355, 85)" style="display: block;"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 23,10 0,12.5 -12.5,0 0,5 12.5,0 0,12.5 5,0 0,-12.5 12.5,0 0,-5 -12.5,0 0,-12.5 -5,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="50" height="50"/><rect x="-6" y="-6" width="62" height="62" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_0wkpos9" transform="matrix(1, 0, 0, 1, 900, 130)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_1l63f7p" transform="matrix(1, 0, 0, 1, 1072, 152)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g></svg>
                </p>
            </td>
            </tr>
        </tbody>
        </table>
        </div>`,


        // ------ 9.Sequence Flow DE ------
        intro_text_de: `
        <div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <style>
        table, th, td {
        padding: 15px;}
        </style>
        <tbody>
            <tr>
            <td valign="top" width="10%">
                <p><strong>NOTATION&nbsp;</strong></p>
            </td>
            <td valign="top" width="10%">
                <p><strong>ELEMENT NAME&nbsp;</strong></p>
            </td>
            <td valign="top" width="40%">
                <p><strong>BESCHREIBUNG</strong></p>
            </td>
            <td valign="top" width="40%">
                <p><strong>BEST PRACTICE&nbsp;</strong></p>
            </td>
            </tr>
            <tr>
            <td valign="top" width="10%">
                <p>
                <img width="83" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAAAcCAMAAADofvVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAByUExURf////7+/u7u7gAAAGtra9LS0vT09F5eXrCwsPDw8ENDQ4aGhurq6ikpKXx8fOPj4w4ODvn5+U9PT/j4+BwcHFVVVcvLyycnJ2dnZ9ra2jw8PJaWlt/f3z8/P7W1tTg4ON7e3v39/RcXF2NjY9vb2wAAAEDgl0YAAAAmdFJOU/////////////////////////////////////////////////8Ap3qBvAAAAAlwSFlzAAAh1QAAIdUBBJy0nQAAAIFJREFUWEft1r0KgCAYhWHRJQyixR8Isvu/yqy+QqO2Bk+cZzJ0eDWJFBEREX1Em7hoGQPSJnOdPMHZ8zPbQ76DMz8LA94OivxNfN2BLGie9RJc8TLbvOAe+9t0uzwhLjKBocxPE1Z7duWnGfHLeeQnuGMX2oxg170G/MNDRP+k1ArtOwd+dquHuQAAAABJRU5ErkJggg==">
                </p>
            </td>
            <td valign="top" width="10%">
                <p>Sequence Flow</p>
            </td>
            <td valign="top" width="40%">
                <p>Der Sequenzfluss <strong>stellt die Reihenfolge da</strong>r, in der alle <strong>Prozessaktivitäten</strong> <strong>ausgeführt&nbsp;</strong>werden.</p>
            </td>
            <td valign="top" width="40%">
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="106 64 1008 202" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="association-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_1wke65b" style="display: block;"><g class="djs-visual"><path d="m  148,110L200,110 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="148,110 200,110 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="142" y="104" width="64" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0q6g6uz" style="display: block;"><g class="djs-visual"><path d="m  300,110L355,110 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="300,110 355,110 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="294" y="104" width="67" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_11gclmp" style="display: block;"><g class="djs-visual"><path d="m  405,110L460,110 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="405,110 460,110 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="399" y="104" width="67" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0rhpfng" style="display: block;"><g class="djs-visual"><path d="m  380,135L380,220 L460,220 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="380,135 380,220 460,220 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="374" y="129" width="92" height="97" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_1pm8u2h" style="display: block;"><g class="djs-visual"><path d="m  560,110L620,110 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="560,110 620,110 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="554" y="104" width="72" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_1q5dkcv" style="display: block;"><g class="djs-visual"><path d="m  720,110L810,110 L810,145 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="720,110 810,110 810,145 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="714" y="104" width="102" height="47" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_1a1gwp1" style="display: block;"><g class="djs-visual"><path d="m  560,220L810,220 L810,195 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="560,220 810,220 810,195 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="554" y="189" width="262" height="37" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0h9uyfi" style="display: block;"><g class="djs-visual"><path d="m  835,170L900,170 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="835,170 900,170 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="829" y="164" width="77" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-connection" data-element-id="Flow_0szue2e" style="display: block;"><g class="djs-visual"><path d="m  1000,170L1072,170 " style="fill: none; stroke-width: 2px; stroke: black; stroke-linejoin: round; marker-end: url('#sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog');"/></g><polyline points="1000,170 1072,170 " style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-stroke"/><rect x="994" y="164" width="84" height="12" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_1g2szpk" transform="matrix(1, 0, 0, 1, 112, 92)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_09bzctc" transform="matrix(1, 0, 0, 1, 200, 70)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1je1p32" transform="matrix(1, 0, 0, 1, 460, 70)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_1xhzsm6" transform="matrix(1, 0, 0, 1, 460, 180)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_0imnsxh" transform="matrix(1, 0, 0, 1, 620, 70)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Gateway_0xi4r93" transform="matrix(1, 0, 0, 1, 785, 145)" style="display: block;"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 23,10 0,12.5 -12.5,0 0,5 12.5,0 0,12.5 5,0 0,-12.5 12.5,0 0,-5 -12.5,0 0,-12.5 -5,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="50" height="50"/><rect x="-6" y="-6" width="62" height="62" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Gateway_1j57ffs" transform="matrix(1, 0, 0, 1, 355, 85)" style="display: block;"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 23,10 0,12.5 -12.5,0 0,5 12.5,0 0,12.5 5,0 0,-12.5 12.5,0 0,-5 -12.5,0 0,-12.5 -5,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="50" height="50"/><rect x="-6" y="-6" width="62" height="62" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Activity_0wkpos9" transform="matrix(1, 0, 0, 1, 900, 130)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="100" height="80" rx="10" ry="10" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label"><tspan x="50" y="43.599999999999994"/></text></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="100" height="80"/><rect x="-6" y="-6" width="112" height="92" style="fill: none;" class="djs-outline"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Event_1l63f7p" transform="matrix(1, 0, 0, 1, 1072, 152)" style="display: block;"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="36" height="36"/><rect x="-6" y="-6" width="48" height="48" style="fill: none;" class="djs-outline"/></g></g></svg>
                </p>
            </td>
            </tr>
        </tbody>
        </table>        
        </div>`,
        intro_categories: catBeginer,
        intro_identifier:'9',
        },



        {
        // ------ 10.Message Flow EN ------
        intro_text: `
        <div>
        <table width="100%" cellspacing="0" cellpadding="0" border="0">
        <style>
        table, th, td {
        padding: 15px;}
        </style>
        <tbody>
            <tr>
            <td width="10%" valign="top">
                <p><strong>NOTATION&nbsp;</strong></p>
            </td>
            <td width="10%" valign="top">
                <p><strong>ELEMENT NAME&nbsp;</strong></p>
            </td>
            <td width="40%" valign="top">
                <p><strong>DESCRIPTION&nbsp;</strong></p>
            </td>
            <td width="40%" valign="top">
                <p><strong>BEST PRACTICE&nbsp;</strong></p>
            </td>
            </tr>
            <tr>
            <td width="10%" valign="top">
                <p>&nbsp;
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAAAZCAMAAAC4s2T5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFiUExURf///ygoKImJieXl5QAAAJqamv39/Tk5OQsLC/b29uLi4o+Pj19fX4WFhd/f3/7+/oCAgA8PD/Ly8ru7u7m5uff39xMTE4SEhO3t7ezs7AwMDLCwsL+/vwMDAwICAvHx8fn5+Xp6eg4ODu7u7qCgoIyMjMPDwzc3N2RkZKqqquvr63Z2dsfHx9DQ0GZmZm5ubu/v77a2tn19ffv7+5ubm5eXl+bm5nR0dOjo6M7OzmVlZVpaWpKSkhkZGQYGBoODg2NjY/X19RAQEPr6+h4eHkJCQnFxcRYWFtPT0wgICAUFBfT09OPj4xISEpCQkCkpKTo6OtfX15iYmKenp9TU1ElJSZSUlMLCwsnJyZOTk5GRkeHh4bGxsY6OjpycnJmZmY2Njdvb2woKCre3t8/PzwEBAYKCgq6urpaWlvz8/KGhofPz83x8fHNzc9ra2q+vrxoaGnh4eG1tbWtraxQUFAAAAJPXAUcAAAB2dFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wABYqlHAAAACXBIWXMAACHVAAAh1QEEnLSdAAABN0lEQVRYR+2UMa7DIAyGI+Q5S47AEEVI3hFb1JyD+9+iBv8JpE3b6ekRiS8Z7B8JbGM8dDqdzp/xMDBuiSWiCPuGWJolgW83YE0wI+zmsFJ78y2BSRaJJnitMebWMaskYFU5I821WEnhcvH/SdVPuHQDFzHGvO5p5sD7v+iSdUVi9ir6SgqMDadKYqfaEIsUeH9+rkgccOWWaxFbenHkC8fDdekGYBeYct/nDjrIK5JZzariBldhFWXnCk00zYwKjepFzFru7cJDxfRiFfUFOeXtjUZKtfa0xcJefQM/g1L5k4hSLXAze4ngAohXW57PQYQ4xxwVZ8lk36Ug9ZgGv7be+x+nz5Jv6D2vNtDJE6VvPkVo5Tk1PfcXCd412h0/GIkleEyI+5FG1Qb7hth1htXpdO7PMDwB/dlMNAyyuucAAAAASUVORK5CYII=" width="83">
                </p>
            </td>
            <td width="10%" valign="top">
                <p>Message Flow</p>
            </td>
            <td width="40%" valign="top">
                <p>Is used to <strong>show</strong> the <strong>flow</strong> of <strong>messages</strong> between <strong>two</strong> <strong>objects</strong> that are about to <strong>send</strong> and <strong>receive</strong> them.</p>
            </td>
            <td width="40%" valign="top">
                <p>It is used to show the flow of <strong>messages</strong> <strong>between separate</strong> <strong>pools</strong> and <strong>lanes</strong>. You <strong>cannot</strong> use message flow to <strong>connect</strong> <strong>flow objects</strong> within the <strong>same</strong> <strong>participant</strong>.</p>
            </td>
            </tr>
        </tbody>
        </table>
        </div>`,

        // ------ 10.Message Flow DE ------
        intro_text_de: `
        <div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <style>
        table, th, td {
        padding: 15px;}
        </style>
        <tbody>
            <tr>
            <td valign="top" width="10%">
                <p><strong>NOTATION&nbsp;</strong></p>
            </td>
            <td valign="top" width="10%">
                <p><strong>ELEMENT NAME&nbsp;</strong></p>
            </td>
            <td valign="top" width="40%">
                <p><strong>BESCHREIBUNG</strong></p>
            </td>
            <td valign="top" width="40%">
                <p><strong>BEST PRACTICE&nbsp;</strong></p>
            </td>
            </tr>
            <tr>
            <td valign="top" width="10%">
                <p>
                <img width="83" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAAAZCAMAAAC4s2T5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFiUExURf///ygoKImJieXl5QAAAJqamv39/Tk5OQsLC/b29uLi4o+Pj19fX4WFhd/f3/7+/oCAgA8PD/Ly8ru7u7m5uff39xMTE4SEhO3t7ezs7AwMDLCwsL+/vwMDAwICAvHx8fn5+Xp6eg4ODu7u7qCgoIyMjMPDwzc3N2RkZKqqquvr63Z2dsfHx9DQ0GZmZm5ubu/v77a2tn19ffv7+5ubm5eXl+bm5nR0dOjo6M7OzmVlZVpaWpKSkhkZGQYGBoODg2NjY/X19RAQEPr6+h4eHkJCQnFxcRYWFtPT0wgICAUFBfT09OPj4xISEpCQkCkpKTo6OtfX15iYmKenp9TU1ElJSZSUlMLCwsnJyZOTk5GRkeHh4bGxsY6OjpycnJmZmY2Njdvb2woKCre3t8/PzwEBAYKCgq6urpaWlvz8/KGhofPz83x8fHNzc9ra2q+vrxoaGnh4eG1tbWtraxQUFAAAAJPXAUcAAAB2dFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wABYqlHAAAACXBIWXMAACHVAAAh1QEEnLSdAAABN0lEQVRYR+2UMa7DIAyGI+Q5S47AEEVI3hFb1JyD+9+iBv8JpE3b6ekRiS8Z7B8JbGM8dDqdzp/xMDBuiSWiCPuGWJolgW83YE0wI+zmsFJ78y2BSRaJJnitMebWMaskYFU5I821WEnhcvH/SdVPuHQDFzHGvO5p5sD7v+iSdUVi9ir6SgqMDadKYqfaEIsUeH9+rkgccOWWaxFbenHkC8fDdekGYBeYct/nDjrIK5JZzariBldhFWXnCk00zYwKjepFzFru7cJDxfRiFfUFOeXtjUZKtfa0xcJefQM/g1L5k4hSLXAze4ngAohXW57PQYQ4xxwVZ8lk36Ug9ZgGv7be+x+nz5Jv6D2vNtDJE6VvPkVo5Tk1PfcXCd412h0/GIkleEyI+5FG1Qb7hth1htXpdO7PMDwB/dlMNAyyuucAAAAASUVORK5CYII=">
                </p>
            </td>
            <td valign="top" width="10%">
                <p>Message Flow</p>
            </td>
            <td valign="top" width="40%">
                <p>Wird verwendet, um den <strong>Nachrichtenfluss</strong> zwischen <strong>zwei Objekten</strong> <strong>anzuzeigen</strong>, die im Begriff sind Nachrichten zu <strong>senden</strong> und <strong>zu empfangen</strong>.</p>
            </td>
            <td valign="top" width="40%">
                <p>Wird verwendet, um den <strong>Nachrichtenfluss zwischen den einzelnen Pools</strong> und<strong>&nbsp;Lanes</strong> anzuzeigen. Sie können den Nachrichtenfluss <strong>nicht verwenden</strong>, um <strong>Flow-Objekte</strong> <strong>innerhalb desselben Teilnehmers</strong> zu <strong>verbinden</strong>.</p>
            </td>
            </tr>
        </tbody>
        </table>        
        </div>`,
        intro_categories: catBeginer,
        intro_identifier:'10',
        },


        {
        // ------ 11.Pool EN ------
        intro_text: `
        <div>
        <table width="100%" cellspacing="0" cellpadding="0" border="0">
        <style>
        table, th, td {
        padding: 15px;}
        </style>
        <tbody>
            <tr>
            <td width="10%" valign="top">
                <p><strong>NOTATION&nbsp;</strong></p>
            </td>
            <td width="10%" valign="top">
                <p><strong>ELEMENT NAME&nbsp;</strong></p>
            </td>
            <td width="40%" valign="top">
                <p><strong>DESCRIPTION&nbsp;</strong></p>
            </td>
            <td width="40%" valign="top">
                <p><strong>BEST PRACTICE&nbsp;</strong></p>
            </td>
            </tr>
            <tr>
            <td width="10%" valign="top">
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-16 104 612 262" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape selected" data-element-id="Participant_1scgqhw" transform="matrix(1, 0, 0, 1, -10, 110)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="600" height="250" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><polyline points="30,0 30,250 " style="fill: none; stroke: black; stroke-width: 2px;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label" transform="matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 250)"><tspan x="125" y="18.6"/></text></g><rect x="-6" y="-6" width="612" height="262" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="600" height="250"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="30" height="250"/></g></g></svg>
                </p>
            </td>
            <td width="10%" valign="top">
                <p>Pool</p>
            </td>
            <td width="40%" valign="top">
                <p>A pool is a <strong>limited</strong> <strong>space</strong> of a <strong>single process</strong> (contains the <strong>sequence flows</strong> between <strong>activities</strong>).&nbsp;</p>
                <p>A <strong>process</strong> is <strong>completely</strong> <strong>contained</strong> in the <strong>pool</strong>. There is always <strong>at least one pool</strong> in our process model.</p>
            </td>
            <td width="40%" valign="top">
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="154 94 552 172" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="association-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Participant_0ezcdyr" transform="matrix(1, 0, 0, 1, 160, 100)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="540" height="160" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><polyline points="30,0 30,160 " style="fill: none; stroke: black; stroke-width: 2px;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label" transform="matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 160)"><tspan x="53" y="18.6">Company</tspan></text></g><rect x="-6" y="-6" width="552" height="172" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="540" height="160"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="30" height="160"/></g></g></svg>
                </p>
            </td>
            </tr>
        </tbody>
        </table>
        </div>`,

        // ------ 11.Pool DE ------
        intro_text_de: `
        <div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <style>
        table, th, td {
        padding: 15px;}
        </style>
        <tbody>
            <tr>
            <td valign="top" width="10%">
                <p><strong>NOTATION&nbsp;</strong></p>
            </td>
            <td valign="top" width="10%">
                <p><strong>ELEMENT NAME&nbsp;</strong></p>
            </td>
            <td valign="top" width="40%">
                <p><strong>BESCHREIBUNG</strong></p>
            </td>
            <td valign="top" width="40%">
                <p><strong>BEST PRACTICE&nbsp;</strong></p>
            </td>
            </tr>
            <tr>
            <td valign="top" width="10%">
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="612" height="262" viewBox="-16 104 612 262" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape selected" data-element-id="Participant_1scgqhw" transform="matrix(1, 0, 0, 1, -10, 110)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="600" height="250" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><polyline points="30,0 30,250 " style="fill: none; stroke: black; stroke-width: 2px;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label" transform="matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 250)"><tspan x="125" y="18.6"/></text></g><rect x="-6" y="-6" width="612" height="262" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="600" height="250"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="30" height="250"/></g></g></svg>
                </p>
            </td>
            <td valign="top" width="10%">
                <p>Pool</p>
            </td>
            <td valign="top" width="40%">
                <p>Ein Pool ist ein <strong>begrenzter Bereich</strong> eines <strong>einzelnen Prozesses</strong> (enthält die <strong>Sequenzflüsse</strong> zwischen den <strong>Aktivitäten</strong>). Ein <strong>Prozess ist vollständig im Pool enthalten</strong>. In unserem Prozessmodell gibt es immer <strong>mindestens einen Pool</strong>.</p>
            </td>
            <td valign="top" width="40%">
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="154 94 552 172" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="association-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Participant_0ezcdyr" transform="matrix(1, 0, 0, 1, 160, 100)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="540" height="160" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><polyline points="30,0 30,160 " style="fill: none; stroke: black; stroke-width: 2px;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label" transform="matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 160)"><tspan x="63.5" y="18.6">Firma</tspan></text></g><rect x="-6" y="-6" width="552" height="172" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="540" height="160"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="30" height="160"/></g></g></svg>
                </p>
            </td>
            </tr>
        </tbody>
        </table>       
        </div>`,
        intro_categories: catBeginer,
        intro_identifier:'11',
        },



        {
        // ------ 12.Lane EN ------
        intro_text: `
        <div>
        <table width="100%" cellspacing="0" cellpadding="0" border="0">
        <style>
        table, th, td {
        padding: 15px;}
        </style>
        <tbody>
            <tr>
            <td width="10%" valign="top">
                <p><strong>NOTATION&nbsp;</strong></p>
            </td>
            <td width="10%" valign="top">
                <p><strong>ELEMENT NAME&nbsp;</strong></p>
            </td>
            <td width="40%" valign="top">
                <p><strong>DESCRIPTION&nbsp;</strong></p>
            </td>
            <td width="40%" valign="top">
                <p><strong>BEST PRACTICE&nbsp;</strong></p>
            </td>
            </tr>
            <tr>
            <td width="10%" valign="top">
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-16 104 612 262" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Participant_1scgqhw" transform="matrix(1, 0, 0, 1, -10, 110)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="600" height="250" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><polyline points="30,0 30,250 " style="fill: none; stroke: black; stroke-width: 2px;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label" transform="matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 250)"><tspan x="125" y="18.6"/></text></g><rect x="-6" y="-6" width="612" height="262" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="600" height="250"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="30" height="250"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_09hpxt9" transform="matrix(1, 0, 0, 1, 20, 110)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="570" height="125" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label" transform="matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 125)"><tspan x="62.5" y="18.6"/></text></g><rect x="-6" y="-6" width="582" height="137" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="570" height="125"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="30" height="125"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_0kyviue" transform="matrix(1, 0, 0, 1, 20, 235)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="570" height="125" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label" transform="matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 125)"><tspan x="62.5" y="18.6"/></text></g><rect x="-6" y="-6" width="582" height="137" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="570" height="125"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="30" height="125"/></g></g></g></g></svg>
                </p>
            </td>
            <td width="10%" valign="top">
                <p>Lane</p>
            </td>
            <td width="40%" valign="top">
                <p>Is a <strong>subdivision</strong> within the <strong>process</strong>. <strong>Lanes</strong> are used to <strong>distinguish elements</strong> such as <strong>internal roles</strong>, <strong>position</strong>, <strong>department</strong>, etc. The <strong>representation</strong> of <strong>larger processes</strong> usually <strong>requires</strong> the use of <strong>lanes</strong> <strong>within</strong> the <strong>pool</strong>. They <strong>represent</strong> <strong>functional</strong> <strong>areas</strong> that can be <strong>responsible</strong> for <strong>tasks</strong>.</p>
            </td>
            <td width="40%" valign="top">
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="114 134 572 212" version="1.1"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Participant_01t8d67" style="display: block;" transform="matrix(1 0 0 1 120 140)"><g class="djs-visual"><rect x="0" y="0" width="560" height="200" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><polyline points="30,0 30,200 " style="fill: none; stroke: black; stroke-width: 2px;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 200)"><tspan x="74.3203125" y="18.6">Company</tspan></text></g><rect x="-6" y="-6" width="572" height="212" class="djs-outline" style="fill: none;"/><rect class="djs-hit djs-hit-click-stroke" x="0" y="0" width="560" height="200" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect class="djs-hit djs-hit-all" x="0" y="0" width="30" height="200" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_0izhhl5" style="display: block;" transform="matrix(1 0 0 1 150 140)"><g class="djs-visual"><rect x="0" y="0" width="530" height="100" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 100)"><tspan x="12.484375" y="18.6">Department Y</tspan></text></g><rect x="-6" y="-6" width="542" height="112" class="djs-outline" style="fill: none;"/><rect class="djs-hit djs-hit-click-stroke" x="0" y="0" width="530" height="100" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect class="djs-hit djs-hit-all" x="0" y="0" width="30" height="100" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_1f5keix" style="display: block;" transform="matrix(1 0 0 1 150 240)"><g class="djs-visual"><rect x="0" y="0" width="530" height="100" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text lineHeight="1.2" class="djs-label" style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" transform="matrix(-1.83697e-16 -1 1 -1.83697e-16 0 100)"><tspan x="12.484375" y="18.6">Department X</tspan></text></g><rect x="-6" y="-6" width="542" height="112" class="djs-outline" style="fill: none;"/><rect class="djs-hit djs-hit-click-stroke" x="0" y="0" width="530" height="100" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect class="djs-hit djs-hit-all" x="0" y="0" width="30" height="100" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/></g></g></g></g></svg>
                </p>
            </td>
            </tr>
        </tbody>
        </table>
        </div>`,

        // ------ 12.Lane DE ------
        intro_text_de: `
        <div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <style>
        table, th, td {
        padding: 15px;}
        </style>
        <tbody>
            <tr>
            <td valign="top" width="10%">
                <p><strong>NOTATION&nbsp;</strong></p>
            </td>
            <td valign="top" width="10%">
                <p><strong>ELEMENT NAME&nbsp;</strong></p>
            </td>
            <td valign="top" width="40%">
                <p><strong>BESCHREIBUNG</strong></p>
            </td>
            <td valign="top" width="40%">
                <p><strong>BEST PRACTICE&nbsp;</strong></p>
            </td>
            </tr>
            <tr>
            <td valign="top" width="10%">
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="612" height="262" viewBox="-16 104 612 262" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Participant_1scgqhw" transform="matrix(1, 0, 0, 1, -10, 110)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="600" height="250" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><polyline points="30,0 30,250 " style="fill: none; stroke: black; stroke-width: 2px;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label" transform="matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 250)"><tspan x="125" y="18.6"/></text></g><rect x="-6" y="-6" width="612" height="262" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="600" height="250"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="30" height="250"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_09hpxt9" transform="matrix(1, 0, 0, 1, 20, 110)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="570" height="125" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label" transform="matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 125)"><tspan x="62.5" y="18.6"/></text></g><rect x="-6" y="-6" width="582" height="137" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="570" height="125"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="30" height="125"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_0kyviue" transform="matrix(1, 0, 0, 1, 20, 235)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="570" height="125" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label" transform="matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 125)"><tspan x="62.5" y="18.6"/></text></g><rect x="-6" y="-6" width="582" height="137" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="570" height="125"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="30" height="125"/></g></g></g></g></svg>
                </p>
            </td>
            <td valign="top" width="10%">
                <p>Lane</p>
            </td>
            <td valign="top" width="40%">
                <p>Ist eine <strong>Unterteilung</strong> innerhalb des <strong>Prozesses</strong>. <strong>Lanes</strong> werden verwendet, um <strong>Elemente</strong> wie <strong>interne Rollen, Positionen, Abteilungen</strong> usw. zu <strong>unterscheiden</strong>. Die<strong>&nbsp;Darstellung größerer Prozesse erfordert</strong> in der Regel die Verwendung von<strong>&nbsp;Lanes</strong> <strong>innerhalb</strong> des <strong>Pools</strong>. Sie <strong>stellen Funktionsbereiche dar</strong>, die für <strong>Aufgaben verantwortlich</strong> sein können.</p>
            </td>
            <td valign="top" width="40%">
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="154 94 552 172" version="1.1"><defs><marker id="sequenceflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="8.5" refY="5" markerWidth="20" markerHeight="20" orient="auto"><path d="m 1 5 l 0 -3 l 7 3 l -7 3 z" style="fill: white; stroke-width: 1px; stroke-linecap: butt; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="messageflow-start-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="6" refY="6" markerWidth="20" markerHeight="20" orient="auto"><circle cx="6" cy="6" r="3.5" style="fill: white; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker><marker id="association-end-white-black-27cahvklw56q3f0y0qdbjzmog" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000px, 1px; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Participant_0ezcdyr" transform="matrix(1, 0, 0, 1, 160, 100)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="540" height="160" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><polyline points="30,0 30,160 " style="fill: none; stroke: black; stroke-width: 2px;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label" transform="matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 160)"><tspan x="63.5" y="18.6">Firma</tspan></text></g><rect x="-6" y="-6" width="552" height="172" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="540" height="160"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="30" height="160"/></g><g class="djs-children"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_0cw02dv" transform="matrix(1, 0, 0, 1, 190, 100)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="510" height="80" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label" transform="matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 80)"><tspan x="9" y="18.6">Abteilung Y</tspan></text></g><rect x="-6" y="-6" width="522" height="92" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="510" height="80"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="30" height="80"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="Lane_1q5nljs" transform="matrix(1, 0, 0, 1, 190, 180)" style="display: block;"><g class="djs-visual"><rect x="0" y="0" width="510" height="80" rx="0" ry="0" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.35;"/><text style="font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; fill: black;" lineHeight="1.2" class="djs-label" transform="matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 80)"><tspan x="9" y="18.6">Abteilung X</tspan></text></g><rect x="-6" y="-6" width="522" height="92" style="fill: none;" class="djs-outline"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-click-stroke" x="0" y="0" width="510" height="80"/><rect style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;" class="djs-hit djs-hit-all" x="0" y="0" width="30" height="80"/></g></g></g></g></svg>
                </p>
            </td>
            </tr>
        </tbody>
        </table>      
        </div>`,
        intro_categories: catBeginer,
        intro_identifier:'12',
        },

            
        ])
        .execute();

        //console.log("GET Text from File");
       // const someTextContent = require('./seedFiles/introBeginner/');

        //let reader = new FileReader();

        //let content = reader.readAsText("./seedFiles/introBeginner/page1.txt");
        // var fs = require("fs");
        // var text = fs.readFileSync(".seedFiles/introBeginner/page1.md").toString('utf-8');
        // console.log(text);
        
        // //console.log("Start Seeding Page 1");
        // const md1 = await connection
        // .createQueryBuilder()
        // .insert()
        // .into(IntroEntity)
        // .values([
        //     {
        //         intro_text: text,
        //         intro_categories: catBeginer,
        //         intro_identifier:'1',
        //    },
        // ])
        // .execute();
    }
}