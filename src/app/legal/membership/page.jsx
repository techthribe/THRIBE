import Link from "next/link";

const Membership = () => {
    return(
        <section className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-[34px] sm:pt-[74px] flex flex-col md:flex-row gap-[40px]">
            <div className="min-w-full md:min-w-[240px] text-secondaryColor font-clash tracking-[1%] space-y-[24px] sm:space-y-[40px] sm:shrink-0 leading-[100%]">
                <div><Link href="/legal/terms-of-service" >Terms of Service</Link></div>
                <div><Link href="/legal/privacy-policy">Privacy Policy</Link></div>
                <div><Link href="/legal/membership" className="font-[600] text-[#107269]">Premium membership</Link></div>         
            </div>
 
            <div className="w-full md:w-[690px] space-y-[24px] sm:space-y-[40px] text-secondaryColor leading-[150%] tracking-[1%]">
                <p>
                    By subscribing to THR!BE Premium, you agree to the following terms and conditions, 
                    which outline your rights and obligations as a premium member and our commitments to you.
                </p>
                <div>
                   <h2 className="font-[700]">1. Overview</h2>
                    <p>
                    By subscribing to THR!BE Premium, you gain access to exclusive tools, services, and experiences designed to help you grow,
                     connect, and thrive in your career and creative journey. 
                    These Terms of Service outline how Premium membership works 
                    and how to make the most of it - fairly and responsibly.
                    </p>
                </div>

                 <div>
                   <h2 className="font-[700]">2. Included Benefits</h2>
                    <p>As a Premium member, you will gain access to the following:</p>
                    <div className="space-y-[24px] sm:space-y-[40px]">
                    <div>
                        <h5>a. Discounts on External Paid Events</h5>
                        <ul className="list-disc list-outside pl-[30px]">
                            <li>THR!BE partners with external event organizers to provide discounts.</li>
                            <li>Discounts are valid only for events officially listed by THR!BE.</li>
                            <li>Discount levels may vary and are subject to availability.</li>
                        </ul>
                    </div>
                    <div>
                        <h5>b. Monthly Webinars</h5>
                         <ul className="list-disc list-outside pl-[30px]">
                            <li>Must be attended live or within the provided replay window.</li>
                        </ul>
                    </div>
                     <div>
                        <h5>c. Legal Employment Contract Reviews & Advice</h5>
                            <ul className="list-disc list-outside pl-[30px]">
                                <li>Limited to 2 contract reviews or consultations per year per member. Additional requests may incur a small service fee.</li>
                                <li>Reviews are done by licensed professionals or legal advisors affiliated with THR!BE.</li>
                                <li>Advice is general guidance, not a replacement for legal representation.</li>
                            </ul>
                    </div>
                    <div>
                        <h5>d. Yearly Merch & Rewards</h5>
                            <ul className="list-disc list-outside pl-[30px]">
                                <li>Each yearly REP merch item(s) is covered up to a ₦20,000 value cap. Members who prefer an upgrade or 
                                    custom option can pay the price difference and is eligible after 6 consecutive months of 
                                    Premium membership or full yearly payment.
                                </li>
                                <li>Shipping times and designs may vary.</li>
                                <li>Rewards may include digital products, discount codes, or gifts</li>
                            </ul>
                    </div>

                    </div>
                </div>

                <div>
                   <h2 className="font-[700]">3. Membership Fees</h2>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>The Premium plan is billed monthly, quaterly or annually, depending on your selection.</li>
                    <li>All fees are clearly displayed at checkout and are non-refundable once processed.</li>
                    <li>Prices are subject to change, with prior notice given to current subscribers.</li>
                   </ul>
                </div>

                <div>
                   <h2 className="font-[700]">4. Cancellations & Refunds</h2>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>You can cancel anytime via your account dashboard or by emailing support.</li>
                    <li>Cancellations take effect at the end of your current billing cycle.</li>
                    <li>There are no refunds for partial months or unused services once payment has been processed. 
                        However, you can cancel at any time to avoid future charges.
                    </li>
                   </ul>
                </div>

                <div>
                   <h2 className="font-[700]">5. Fair Use Policy</h2>
                   <p>To ensure fairness and sustainability:</p>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Reviews and legal consultations are limited as outlined above.</li>
                    <li>Abuse (e.g., spamming job board access, mass content downloads, or reselling benefits) may result in suspension without refund.</li>
                    <li>Membership is non-transferable.</li>
                   </ul>
                </div>

                <div>
                   <h2 className="font-[700]">6. THR!BE&#39;s Right</h2>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>We will notify you of major changes that impact your benefits or pricing.</li>
                    <li>THR!BE may terminate a subscription for breach of these terms, with or without refund, depending on the nature of the violation.</li>
                   </ul>
                </div>

                <div>
                   <h2 className="font-[700]">7. Liability Disclaimer</h2>
                   <p>
                    Legal support provided through THR!BE Premium is for advisory purposes only and should not replace personalized legal counsel. 
                    THR!BE is not liable for any professional outcomes resulting from third-party services or advice.
                   </p>
                </div>

                <div>
                   <h2 className="font-[700]">8. Acceptance</h2>
                   <p>
                    By paying for and maintaining a Premium membership, you agree to these Terms of Service and acknowledge 
                    that benefits, limits, and pricing may evolve to keep THR!BE fair and sustainable for all members.
                   </p>
                </div>

                <div>
                   <h2 className="font-[700]">9. Data & Privacy</h2>
                   <p>
                    Your data will be processed in accordance with our Privacy Policy. By subscribing, 
                    you consent to our data handling practices for communication, billing, and service delivery.
                   </p>
                </div>

                <div>
                   <h2 className="font-[700]">10. Governing Law</h2>
                   <p>
                    These terms are governed by the laws of 
                    [Insert Country/Jurisdiction]. Disputes will be resolved in [Insert Legal Location] under fair arbitration.
                   </p>
                </div>

                <div>
                   <h2 className="font-[700]">11. Contact</h2>
                   <p>
                     For support, cancellations, or inquiries:
                   </p>
                   <div>
                    <Link href="#" className="decoration text-[#107269]">Hello@thribe.com</Link>
                   </div>
                    <div>
                    <Link href="#" className="decoration text-[#107269]">www.thribe.com</Link>
                   </div>
                </div>




            </div>

        </section>
    )
}

export default Membership;