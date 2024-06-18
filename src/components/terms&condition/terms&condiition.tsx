import termscondition from "../../assets/image/termsandcondition-banner.webp";

const Termsandcondition = () => {
    const images = [
        { src: termscondition, alt: "Terms and Conditions" }
    ];

    return (
        <div className=" pt-5 w-full h-auto">
            {images.map((image, index) => (
                <div key={index} className="w-auto h-64"> 
                    <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-auto h-full object-cover"
                    />
                </div>
            ))}
            <div className="pt-5 text-center">
            <div className="text-black font-extrabold text-4xl ">Terms and Condition</div>
            </div>
            <div className="pt-5 px-4 mt-5">
                <div className="text-gray-700 text-lg leading-relaxed sm:px-28"> 
                <p className="pb-3 text-justify">
                These are the <label className="font-semibold">Terms and Conditions</label> that will apply to your booking. Please read them carefully as they will bind you. These Terms shall constitute the entire agreement between the Company and the Client relating to the subject matter herein, and shall constitute a binding agreement. There is no verbal or written; representation, warranty, prior agreement, or description of services, other than as expressed herein.
 
                The contract and booking is made with, and services will be provided by, Travel Nepal Pty Ltd (The Company). By booking a Trip (Packages/Products), you agree to be bound by these Terms and Conditions that govern the relationship, the cancellation policy and limitations of liability. These Terms and Conditions affect your rights and designate the governing law and forum for the resolution of any and all disputes.
 
                </p>
                
                <p className="pt-3  font-3xl text-black font-semibold">1. THE CONTRACT</p>
                <p className="pb-3 pt-4 text-justify">All persons wishing to make a booking have carefully read and understand the Terms and Conditions that follow. By making a booking with the Company, you accept on behalf of yourself and all those named on the booking including minors and persons under a disability to be bound by these Terms and Conditions. A booking is accepted and becomes definite only from the date when the Company sends a confirmation invoice or email. It is at this point that a contract between the Company and the Client comes into existence. Before your booking is confirmed and a contract comes into force, the Company reserves the right to increase or decrease tours/products prices. The Company reserves the right to decline any booking at our discretion. The person or persons named on the booking are hereafter referred to as the “Client”.  All bookings are made with the Company, which sells the tours described in this website or brochure. 
                    Bespoke/Tailored Tour is defined as booking anything included in the Bespoke /Tailored Tour section. These Terms and Conditions shall constitute the entire agreement between the Company and the Client relating to the subject matter herein, and shall constitute a binding agreement. There is no verbal or written; representation, warranty, prior agreement, or description of services, other than as expressed herein. The service to be provided is/are the tour(s) referred to in the booking confirmation.

                </p>


                <p className="pt-3  font-3xl text-black font-semibold">2. PASSPORT AND VISAS</p>
                <p className="pb-3 pt-4 text-justify">All travellers must have a valid passport for international travel and many countries require at least 6 months validity from the date of return and some countries require a machine-readable passport (MRP). It is important that you ensure that you have valid passports, visas and re-entry permits which meet the requirements of immigration and other government authorities. Any fines, penalties, payments or expenditures incurred as a result of such documents not meeting the requirements of those authorities will be your sole responsibility. 

                    If you need information regarding visas, passports and other travel document requirements for your trip, please visit the link in our Resource Centre or contact us at <a href="info@travelnepal.com.au" className="text-blue-500 underline">info@travelnepal.com.au</a>
                </p>

                <p className="pt-3  font-3xl text-black font-semibold">3. MEDICAL CONDITIONS AND SPECIAL REQUIREMENTS</p>
                <p  className="pb-3 pt-4 text-justify">The Client must notify the Company in writing during the process of booking of any medical conditions, pregnancy, disability or any other mental and or physical condition, which may affect fitness to travel, and or any medical condition. Failure to notify the Company may result in the Client being refused travel. Failure to notify the Company of any such condition that results in cancellation will have full cancellation fees to the Client. Some trips may be unsuitable for Clients due to age, mobility, disability, pregnancy or physical or mental conditions. It is the Client’s responsibility to check prior to booking. The Company may refuse to carry pregnant women over 24 weeks or Clients with certain conditions. The Company is not required to provide any special facilities unless it has agreed to do so in writing. The Company will do its best to meet Clients special requests including dietary, but such requests do not form part of the Contract and therefore the Company is not liable for not providing these requests.<br/>
                Trekking in Nepal is to not be considered a risky affair as far as your health is concerned. But very little medical care along the trail is available, so make sure you are physically fit and healthy before departing. In case of serious illness or injury, you'll be promptly evacuated to Kathmandu, which is the best remedy. Helicopter rescue services could cost as much as us$ 2000.00 (Approx.) per hour and it normally takes about 2-3 hours for rescue flights in the Everest or Annapurna area. Please be informed that the helicopter evacuation costs of the trekkers are charged in full to the concerned Clients. Take care of yourself along the trail by ensuring that water is boiled. Diarrhea and headaches can be the curse for trekkers. Bring appropriate medication and use them with caution. Sunburn can also be a problem at altitude, bring sunscreen to protect your skin and quality sunglasses are necessary. Blisters are another problem for the trekker and adequate supplies of Band-Aids are advisable.<br/>
                Often known as Acute Mountain Sickness (AMS) is particularly an important medical consideration while trekking in Nepal. Altitude sickness means the effect of altitude on those who ascend too rapidly to elevation above 3500 m. The initial symptoms of AMS are as following: <br/>
                <ul className="list-disc ml-5">
                        <li>Nausea, vomiting.</li>
                        <li>Loss of appetite.</li>
                        <li>Insomnia / Sleeplessness.</li>
                        <li>Persistent headache.</li>
                        <li>Dizziness, confusion.</li>
                        <li>Disorientation, drunken gait.</li>
                        <li>Weakness, fatigue, lassitude, heavy legs.</li>
                        <li>Slight swelling of hands and face.</li>
                        <li>Breathlessness and breathing irregularity.</li>
                        <li>Reduced urine output.</li>
                    </ul>
                    <br/>
                
                These symptoms are to be taken seriously. The only cure for the altitude sickness is to descend to lower elevations immediately and it has no other cure or substitute. Acclimatization by ascending to no more than 300 to 500 meters per day above 3500 meters and the proper amount of rest are the best methods for prevention of AMS. So far, only a few trekkers have minor effects from the altitude. However, we advise specially the guests with known heart, lunges or blood diseases to consult their doctor before taking a trekking trip that goes over 4000 meters. Our advice: Drink 4 liters of water minimum a day, don't exhaust yourself so much and breathe deep and take more rest than usual.
                </p>
                <p className="pt-3  font-3xl text-black font-semibold">4. TRAVEL INSURANCE</p>
                <p className="pb-3 pt-4 text-justify">We strongly recommend that you take out appropriate travel insurance to cover your travel arrangements. Travel insurance is also strongly recommended by the Department of Foreign Affairs and Trade for all overseas travel. If you plan to do extreme sports like skydiving, bungee jumping, paragliding, rafting etc. but not limited to trekking, hiking, mountaineering or expedition, please make sure your insurance covers these "dangerous activities." Remember to keep your receipts to make claims. In order to make claims on lost or stolen items, you will need to file a police report.</p>

                <p className="pt-3  font-3xl text-black font-semibold">5. PRICES</p>
                <p className="pb-3 pt-4 text-justify">All prices are subject to availability and can be withdrawn or varied without notice. The price is only guaranteed once paid for in full by the Client. Please note that prices quoted are subject to change. Price changes may occur by reason of matters outside our control, which increase the cost of the product or service. Such factors include adverse currency fluctuations, fuel surcharges, taxes, high and low seasons but not limited to. 
                    All tour packages are without Tax. Standard Government Tax are payable if you require Tax Invoice. 
                </p>

                <p className="pt-3  font-3xl text-black font-semibold">6. ONLINE BOOKING FEES</p>
                <p className="pb-3 pt-4 text-justify">IT’s on Us. No hassle for booking fees. The company could change this policy without prior notice in future. </p>
                
                <p className="pt-3  font-3xl text-black font-semibold">7. REFUNDS AND CANCELLATIONS FEES</p>
                <p className="pb-3 pt-4 text-justify">
                <ul className="list-disc ml-5">
                    <li>45-31 days prior to date of travel : 25%</li>
                    <li>30-15 days prior to date of travel : 60%</li>
                    <li>14-07 days prior to date of travel : 80%</li>
                    <li>06- 0 days prior to date of travel : 100%</li>
                </ul>
                There will be AUD $100 Refund service charge for each cancelled tour package.  
                </p>

                <p  className="pt-3  font-3xl text-black font-semibold">8. CHANGING TRIP DATES</p>
                <p className="pb-3 pt-4 text-justify">If provided notice prior to 30 days of a trip, the Company will charge a 10% service charge for each package to make amendments on bookings. Strictly, No Name changes.  Company will not guarantee the availability of the same trip or the hotel's accommodation that was booked previously. However, Company will do our best to accommodate similar category hotels and trips. Incase of unavailability of the trip on Clients requested dates, Client must cancel the booking and make another bookings. 
                Company reserves rights to change this policy without prior notice.
                </p>

                <p  className="pt-3  font-3xl text-black font-semibold">9. DEPOSITS</p>
                <p className="pb-3 pt-4 text-justify">Company requires 100% payment in advance to secure all the trips that are readily available to purchase online. However, if there were a larger group from Corporates, Students, or Social Services, We would consider 60% of Total Trip in advance and remaining 40% upon Arrival. Please contact our Sales team at <a href="sales@travelnepal.com.au" className="text-blue-500 underline">sales@travelnepal.com.au</a> to discuss further and special group rates. Company reserves the right to payment conditions at all times. </p>
                
                <p  className="pt-3  font-3xl text-black font-semibold">10. UNUSED SERVICES</p>
                <p className="pb-3 pt-4 text-justify"> There will be no discounts or monies refunded for missed or unused services, this includes voluntary or involuntary termination/departure from tour, i.e. sickness, death of a family member etc., late arrival on the tour, or premature departure either voluntarily or involuntarily.
                    IF the Client has to cancel or shorten the trip Due to FACTORS OUTSIDE THE COMPANY’S CONTROL (FORCE MAJEURE, see No. Clause No. 15) while on the trip will not be refunded or deducted. Company reserves the right to cancel any trip prior to informing Client if any of these factors arise. 
                    </p>

                <p  className="pt-3  font-3xl text-black font-semibold">11. FLEXIBILITY</p>
                <p className="pb-3 pt-4 text-justify">The Client understands and acknowledges the nature of this type of travel requires considerable flexibility and should allow for reasonable alterations by the Company. It is understood that the route, schedules, itineraries, amenities and mode of transport may be subject to alteration without prior notice due to local circumstances or events, which may include sickness or mechanical breakdown, flight cancellations, strikes, events emanating from political disputes, entry or border difficulties, extreme weather and other unpredictable or unforeseeable circumstances or any other reason whatsoever.</p>

                <p  className="pt-3  font-3xl text-black font-semibold">12. AIRFARE</p>
                <p className="pb-3 pt-4 text-justify">All trip packages do not include international airfare.  Local airfares are included if given in the Itinerary.  Company does not take responsibility for Flight Cancellations or delays of airlines and its consequences.</p>
                
                <p  className="pt-3  font-3xl text-black font-semibold">13. MAIRLINE, AIRPORTS OR WEATHERS DELAYS. </p>
                <p className="pb-3 pt-4 text-justify">The Company will not be held responsible for any additional expenses or loss that may arise from airline, airport or weather delays. The Company will not reimburse for any additional expenses incurred by the Client as a result. The company will not refund any unused portion of air tickets; our unused Tour Package purchased in the event of such delays due to conditions beyond its control. Some airports could be closed with short notice due to severe weather conditions; Company will not pay for food and accommodation if Clients have to stay overnight. </p>

                <p  className="pt-3  font-3xl text-black font-semibold">14.  AUTHORITY ON TOUR</p>
                <p className=" pb-3 pt-4 text-justify">At all times the decision of the Company’s tour leader or representative (Royal Mountain Travel-Nepal) will be final on all matters likely to endanger the safety and well being of the trip. By booking with the Company, the Client agrees to abide by the authority of the tour leader or Company representative. The Client must at all times strictly comply with the laws, customs, and foreign exchange and drug regulations of all countries visited. If the Client is affected by any condition, medical or otherwise, that might affect other people’s enjoyment of the tour, the Client must advise the Company at the time of booking. Should the Client fail to comply with the above or commit any illegal act when on the tour or, if in the opinion of the tour leader, the Client’s behaviour is causing or is likely to cause danger, distress or annoyance to others the Company may terminate that Client’s travel arrangements without any liability on the Company’s part and the Client will not be entitled to any refund for unused or missed services or costs incurred resulting from the termination of the travel arrangements. </p>

                <p  className="pt-3  font-3xl text-black font-semibold">15. FACTORS OUTSIDE THE COMPANY’S CONTROL (FORCE   MAJEURE)</p>
                <p className=" pb-3 pt-4 text-justify">The Company shall not be liable in any way to the Client for death, bodily injury, illness, damage, delay or other loss or detriment to person or property, or financial costs both direct and indirect incurred, or for the Company's failure to commence, perform and/ or complete any duty owed to the Client if such death, delay, bodily injury (including emotional distress or injury), illness, damage or other loss or detriment to person or property is caused by Act of God, war or war like operations, mechanical breakdowns, terrorist activities or threat thereof, civil commotions, labour difficulties, interference by authorities, political disturbance, howsoever and where so ever any of the same may arise or be caused, riot, insurrection and government restraint, fire, safety and security concerns as deemed by the Company, extreme weather or any other cause whatsoever beyond the reasonable control of the Company the consequences of which could not have been avoided even if all due care had been exercised; or an event which the Company or the supplier of services, even with all due care, could not foresee.</p>


                <p  className="pt-3  font-3xl text-black font-semibold">16. DISCOUNTS AND PROMOTIONS</p>
                <p className=" pb-3 pt-4 text-justify">All discounts and reduced pricing are applied at the Company’s discretion. From time-to-time the Company may offer reduced pricing on selected tours. The reduced pricing applies strictly to new bookings, and bookings that have already provided deposit are locked into their original price and are not entitled to the reduced pricing. A booking may not be cancelled.</p>

                <p className="pt-3  font-3xl text-black font-semibold">17. CLAIMS AND COMPLAINTS</p>
                <p className=" pb-3 pt-4 text-justify">If a Client has a complaint against the Company, the Client must first inform the tour leader at the earliest opportunity to allow the grievance to be rectified. If satisfaction is not reached, contact the Company representative or local Office Manager whilst on tour in order that the Company is provided the opportunity to rectify the matter. Failure to indicate dissatisfaction whilst on tour will result in the Client’s ability to claim compensation from the Company being extinguished or at least reduced. If satisfaction is still not reached through these means on tour then any further complaint must be put in writing to the Company via its Agents or directly to head office at customerservice@travelnepal.com.au within 21 days of the end of the tour. The Company will not accept any liability for claims received after this period.</p>

                <p className="pt-3  font-3xl text-black font-semibold">18. CLIENT RESPONSIBILITY</p>
                <p className=" pb-3 pt-4 text-justify">The Client acknowledges he or she will be visiting places where the political, cultural and geographical attributes present certain risks, dangers and physical challenges greater than those present in his or her daily lives. By booking travel with the Company, the Client acknowledges she or he has considered the potential risks, dangers and challenges, and expressly assumes the risks attendant to such travel conditions. The Client is solely responsible for acquainting themselves with customs, weather conditions, physical challenges and laws in effect at each stop along the itinerary, and are encouraged to locate or make contact prior to embarkation with his/her local embassy or consulate in each destination.</p>

                <p className="pt-3  font-3xl text-black font-semibold">19. PRIVACY POLICY</p>
                <p className=" pb-3 pt-4 text-justify">The Company will provide personal information, as well as any personal information provided in relation to persons whose travel arrangements have been requested by the Client, to suppliers and carriers to enable the operation of the services requested. The Company will do all reasonably possible in endeavouring to protect personal information. Please visit our Privacy Policy for more detail.<br/> <br/>
                By providing personal information to us, you agree that our Privacy Policy will apply to how we handle your personal information and you consent to us collecting, using and disclosing your personal information as detailed in our Privacy Policy. In particular, you agree that in certain circumstances (such as where you request us to book international travel for you), we are permitted to disclose your personal information to overseas recipients. Such recipients may include the overseas travel service providers (e.g. airlines, accommodation or tour providers) with whom you make a booking. These travel service providers will in most cases receive your personal information in the country in which they will provide the services to you or in which their business is based. We may also disclose your personal information to our overseas-related entities and to service providers who perform services for us within and outside of Australia. Generally, we will only disclose your personal information to these persons in connection with facilitation of your travel booking and/or to enable the performance of administrative and technical services by them on our behalf. When we disclose your personal information to any person (including any overseas recipients), you agree that we will not be required to ensure that person’s compliance with Australian privacy laws or otherwise be accountable for how they handle your personal information. When used above, “disclose” includes transferring, sharing, sending, or otherwise making available or accessible to another person or entity.
                </p>

                <p className="pt-3  font-3xl text-black font-semibold">20. ONLINE BOOKINGS</p>
                <p className=" pb-3 pt-4 text-justify">All online reservations shall be deemed as booked in Australia, and shall be subject to Australian law and jurisdiction.</p>

                <p className="pt-3  font-3xl text-black font-semibold">21. Liability</p>
                <p className=" pb-3 pt-4 text-justify">To the extent permitted by law, neither Travel Nepal Pty Ltd nor any of its related employees or agents accept any liability in contract, tort or otherwise for any injury, damage, loss (including consequential loss), delay, additional expense or inconvenience caused directly or indirectly by the acts, omissions or default, whether negligent or otherwise, of third party providers over whom we have no direct control, force majeure or any other event which is beyond our control or which is not preventable by reasonable diligence on our part. Under circumstances where our liability cannot be excluded and where liability may be lawfully limited, such liability is limited to the remedies required of us under applicable law (including the Australian Consumer Law).
                This liability clause is subject to your rights under the Australian Consumer Law and nothing in these terms and conditions is intended to limit any rights you may have under the Competition and Consumer Act 2010 (Cth).</p>

                <p className="pt-3  font-3xl text-black font-semibold">22. IMAGES AND MARKETING</p>
                <p className=" pb-3 pt-4 text-justify">The Client agrees that during the trip the Company will take photos, videos and testimonials of a Client and other participants in a trip in part or in whole. The Client agrees that these materials may be reproduced by the Company and the Client grants perpetual, royalty-free, worldwide, irrevocable license to reproduce such images, photos or video in any medium for promotion and publicity purposes.</p>

                <p className="pt-3  font-3xl text-black font-semibold">23. GOVERNING LAW</p>
                <p className=" pb-3 pt-4 text-justify">If any dispute arises between The Company and Client, the laws of Australia will apply. You irrevocably and unconditionally submit to the exclusive jurisdiction of the courts of Australia, and waive any right that you may have to object to an action being brought in those courts.</p>

                <p className="pt-3  font-3xl text-black font-semibold">24. UPDATING OF TERMS AND CONDITIONS</p>
                <p className=" pb-3 pt-4">The Company reserves the right to update and/or alter these terms and conditions at any time, and it is the Client's responsibility to be familiar with them. </p>

                <p className="pt-3  font-3xl text-black font-semibold">25. ACCEPTANCE OF RISK</p>
                <p className=" pb-3 pt-4 text-justify">The Client acknowledges that the nature of the tour is adventurous and may involve a significant amount of personal risk. The Client hereby assumes all such risk and does hereby release the Company from all claims and causes of action arising from any damages or injuries or death resulting from these inherent risks. Prior to tour commencement, the Client may be asked to sign a participation form, with the following wording:
                    “I understand traveling with Travel Nepal Pty Ltd may involve risks (and rewards) above and beyond those encountered on a more conventional holiday, and that I am undertaking an adventure trip with inherent dangers.  I understand I am traveling to geographical areas where, amongst other things, the standard of accommodation, transport, safety, hygiene, cleanliness, medical facilities, telecommunications and infrastructure development may not be of the standard I am used to at home or would find on conventional holiday.  I have read and understood the Travel Nepal Pty Ltd Trip Details for this trip I am undertaking and have provided details of any pre-existing medical conditions I may have to Travel Nepal Pty Ltd representatives. I accept these risks and obligations and I fully assume the risks of travel.
                    <br/>
                    <label className="text-black font-semibold pt-5">Optional Activities</label>
                    <br/>

                    I understand during my trip there may be opportunities to undertake activities, which do not form part of the itinerary. I understand Travel Nepal Pty Ltd makes no representations about the safety or quality of the activity, or the standard of the independent operator running it. I also understand Travel Nepal Pty Ltd is in no way responsible for my safety should I elect to enter into such optional activities. With full knowledge of the above, I may still elect to partake in the activity, and if I do so, I assume full responsibility for any risks involved, and the waiver and release of the Releases set out in the foregoing paragraph shall apply to such optional activities.”
                    <br/>

                    Hotels, Tea Houses, Airlines, Transports services or other elements of a Package will be arranged by the Company with local suppliers, the services of local who may themselves engage operators and/or sub-contractors.  Standards of hygiene, accommodation and transport in some countries where excursions take place are often lower than comparable standards than what the Client may reasonably expect at home. The Company will at all times endeavour to appoint reputable and competent local suppliers.  The terms and conditions of the suppliers will be applicable and are expressly incorporated into the Contract.  These may limit or exclude liability of the supplier.  The liability of the Company will not exceed that of any supplier.  Local laws and regulations of the relevant country will be relevant in assessing performance of the services of any supplier.  In the event of a complaint by a Client, this Contract will be regarded as having been performed if local laws and regulations relating to those services have been satisfied, even if the laws of Australia have not been met.
                    <br/>

                    <label>Acknowledgement</label>
                    I acknowledge that I am 18 years of age or older and that I understand and agree with the above terms and conditions.



                </p>
                </div>
            </div>
        </div>
    );
}

export default Termsandcondition;
