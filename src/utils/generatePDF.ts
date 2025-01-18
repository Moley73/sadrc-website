import jsPDF from 'jspdf';

export const generateConstitutionPDF = () => {
  const doc = new jsPDF();
  
  // Set initial position
  let y = 20;
  
  // Title
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('Rules of Skegness and District Running Club', 105, y, { align: 'center' });
  y += 20;

  // Content styling
  const normalFont = () => {
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
  };
  
  const headingFont = () => {
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
  };

  const addSection = (title: string, content: string) => {
    // Check if we need a new page
    if (y > 270) {
      doc.addPage();
      y = 20;
    }

    headingFont();
    doc.text(title, 20, y);
    y += 10;

    normalFont();
    const lines = doc.splitTextToSize(content, 170);
    doc.text(lines, 20, y);
    y += lines.length * 7 + 10;
  };

  // Add content sections
  addSection('1. Interpretation', 
    'Unless the context requires otherwise, the following terms in these Rules shall have the following meaning respectively: AGM has the meaning given in rule 12.1; Committee means the management committee of the Club from time to time; Chair means the person from time to time appointed as chair of the Club in accordance with these Rules; Club means Skegness and District Running Club; EA means England Athletics Limited; General Meeting means a general meeting of the Club; Member means a member of the Club; Objects means the objects of the Club set out in Rule 3; Officers means the members of the Committee; Secretary means the person from time to time appointed as secretary of the Club in accordance with these Rules; Treasurer means the person from time to time appointed as treasurer of the Club in accordance with these Rules.');

  addSection('2. Name and Office',
    'The Club shall be called Skegness and District Running Club. The principal office of the Club shall be situated in England. The Club colours shall be Orange and Black.');

  addSection('3. Objects',
    'The objects of the Club are for the public benefit generally but with particular reference to the inhabitants of Skegness and its surrounding areas: to promote community participation in healthy recreation by providing facilities for athletics; to provide and assist in the provision of facilities for recreation and other leisure-time occupation of such persons who have need for such facilities by reason of their youth, age, infirmity or disability, financial hardship or social circumstances in the interests of social welfare and with the object of improving their conditions of life; to advance the education of the public in the subject of athletics.');

  addSection('4. Ethos',
    'The Club is committed to ensuring that equity is incorporated across all aspects of its operations, activities and development. The Club respects the rights, dignity and worth of every person and shall treat everyone equally regardless of age, ability, gender, race, ethnicity, religious belief, sexuality or social/economic status. The Club is committed to everyone having the right to enjoy their sport in an environment free from threat of intimidation, harassment and abuse. All Club members have a responsibility to oppose discriminatory behavior and promote equality of opportunity. The Club will deal with any incidence of discriminatory behavior seriously, according to the Club\'s disciplinary procedures.');

  addSection('5. Exercise of Powers',
    'In furtherance of the Objects but not otherwise the Club may exercise the following powers: to carry on a sports club; to provide sports coaching, training and equipment; to participate in and organise leagues, competitions, tournaments and matches and related activities; to provide information, advice and guidance in running and/or competitions, coach development and other related activities; to publish or distribute information; to draw, make, accept, endorse, discount, execute and issue bills, cheques and other instruments and to open and operate bank accounts in the name of the Club; to accept or disclaim gifts of money or any other property; to raise funds and to invite and receive contributions; to purchase, take on, hire, lease, acquire, alter, improve, construct and maintain property and equip it for use.');

  addSection('6. Club Finances and Property',
    'A bank account shall be opened and maintained in the name of the Club. Designated account signatories shall be the Chair, the Secretary and the Treasurer. No sum shall be expended from the Club Account except by cheque signed by two of the designated signatories or by electronic transfer approved by at least one of the designated signatories subject to a maximum amount fixed by the Committee. All monies payable to the Club shall be received by the Treasurer and deposited in the Club Account as soon as is reasonably practicable. The Club\'s financial year shall end on 5th April each year. The Treasurer shall present accounts for the previous financial year to the annual general meeting for consideration and copies of these will be available to Members at the meeting.');

  addSection('7. Club Membership',
    'The Members from time to time shall be those persons listed in the Club\'s register of members which shall be maintained by the Membership Secretary. The Committee may establish different classes of membership and decide who will be eligible for admission to them and what their rights and obligations will be. Membership of the Club shall be open, on application, to anyone interested in recreational or competitive running, regardless of sex, age, disability, ethnicity, race, nationality, sexual orientation, occupation, religion, political or other beliefs. The Committee may refuse membership only for good cause such as conduct likely to bring the Club or athletics into disrepute. Appeal against refusal of membership may be made to the Members.');

  addSection('8. Membership Fees',
    'The Club may, as a condition of membership, require annual or other periodic subscription fees to be paid by Members of the Club, as determined from time to time by the Committee provided that the Committee shall ensure that the subscription fees are set on a non-discriminatory basis and do not preclude open membership of the club. Membership fees shall be paid annually and are due on the anniversary of joining the club. Members having arrears of subscriptions of more than three months will have their membership automatically terminated and will not be eligible to participate in the affairs or activities of the Club, including voting in any General Meeting.');

  addSection('9. Resignation',
    'A Member may withdraw from membership of the Club by giving seven days advance notice in writing to the Membership Secretary. Membership shall not be transferable and shall cease immediately on death or on the failure of the Member to comply with any condition of membership set out in these Rules.');

  addSection('10. The Committee',
    'Subject to these Rules the Committee shall be responsible for the management of all the affairs of the Club. The Committee shall consist of the Officers of the Club: Chair, Vice Chair, Club Secretary, Membership Secretary, Treasurer, Welfare Officer, and other Officers elected at the AGM. The Committee shall decide in its discretion how Members may be nominated to be Officers of the Club. Any Officer must be a Member of the Club. Any Officer may be re-elected without limit. The Committee may exercise all such powers of the Club, and do on behalf of the Club all such acts as may be exercised and done by the Club, and as are not by these Rules required to be exercised or done by the Club in General Meeting.');

  addSection('11. Committee Meetings',
    'The Committee shall meet at least four times each year at mutually agreed times and places. The quorum for Committee meetings shall be three Officers. The Chair, or in their absence a member selected by the Committee, shall take the chair. Each Officer present shall have one vote and resolutions shall be passed by a simple majority. The Secretary, or in their absence a member of the Committee, shall take minutes. In the case of deadlock on any matter the Chair shall have a casting vote.');

  addSection('12. Annual General Meetings',
    'The Club shall hold an AGM once in every calendar year and not more than 15 months after the last AGM. The AGM shall be held at such time and place as the Committee shall decide. The AGM shall be called by the Secretary with at least fourteen days\' notice to all Members. The business of an AGM shall include: the receipt of a report of the activities of the Club over the previous year; the receipt of a report of the Club\'s finances over the previous year; the election and retirement of Officers; and any other business. All Members shall be entitled to attend and vote at any AGM.');

  addSection('13. Extraordinary General Meetings',
    'An EGM may be called at any time by the Committee and shall be called within twenty-one days of the receipt by the Secretary of a requisition in writing, signed by not less than five Members stating the purposes for which the EGM is required and the resolutions proposed. Business at an EGM may be any business that may be transacted at an AGM.');

  addSection('14. Discipline and Appeals',
    'All complaints regarding the behavior of Members should be lodged in writing with the Secretary. The Committee shall appoint a Disciplinary sub-committee who will meet to hear complaints within twenty-one days of a complaint being lodged. Any Member requested to attend a Disciplinary sub-committee shall be entitled to be accompanied by a friend or other representative and to call witnesses. The Committee (or its sub-committee) has the power to take appropriate disciplinary action, including the termination of membership. The outcome of the disciplinary hearing shall be put in writing to the person who lodged the complaint and the Member against whom the complaint was made within seven days following the hearing. There shall be a right of appeal to the Committee against either the finding or the sanction imposed or both following disciplinary action being taken.');

  addSection('15. Amendments to the Constitution',
    'These Rules may be amended at a General Meeting by two-thirds of the votes cast but not (if relevant) so as to jeopardise the Club\'s status as a Community Amateur Sports Club as first provided for by the Finance Act 2002 and not in any event to alter its Objects and dissolution provisions.');

  addSection('16. Dissolution',
    'A resolution to dissolve the Club can only be passed at an AGM or EGM through a majority vote of the membership. In the event of dissolution, any assets of the club that remain will become the property of England Athletics or another registered CASC for Skegness and District.');

  // Add footer with page numbers
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(10);
    doc.text(`Page ${i} of ${pageCount}`, 105, 290, { align: 'center' });
  }

  return doc;
}
