"use client";

import { useState } from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import IconFooer from "@/components/IconFooter";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function PrivacyPolicyAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="pt-16">
        <div
          className={`${roboto.className} text-[10px] uppercase p-6   pt-10 pl-10`}
        >
          <span className="text-gray-500 pr-2  ">
            <Link className="hover:text-black" href="/">
              Home
            </Link>
          </span>
          <span className="pr-2">|</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
      <header
        className="relative w-full h-[30vh]  bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://kouchinni.com/wp-content/uploads/2024/01/header-stairway.svg')",
        }}
      >
        {/* متن وسط صفحه */}
        <div className="relative flex flex-col justify-center items-start  h-full text-left">
          <h1 className=" text-3xl md:text-4xl font-bold px-4 sm:px-8      uppercase tracking-wide">
            terms & conditions
          </h1>
        </div>
      </header>
      <div className={`${roboto.className} w-full min-h-screen bg-white `}>
        <div className="max-w-4xl mx-auto px-4  py-12">
          <div className="text-sm text-gray-700  leading-relaxed">
            {accordionData.map((item, index) => (
              <div key={index} className="border-b border-gray-300 mb-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left text-black font-bold text-lg py-4 flex justify-between items-center focus:outline-none uppercase"
                >
                  {item.title}
                  <span className="text-gray-500">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>

                <div
                  className={`transition-all overflow-hidden ${
                    openIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div className="py-4 text-gray-600 text-sm">
                    {item.content.map((contentItem, contentIndex) => (
                      <div key={contentIndex}>
                        {contentItem.type === "p" ? (
                          <p className="pb-3">{contentItem.text}</p>
                        ) : contentItem.type === "ul" ? (
                          <ul className="list-none  pl-5 space-y-2">
                            {contentItem.items.map((listItem, listIndex) => (
                              <li key={listIndex}>{listItem}</li>
                            ))}
                          </ul>
                        ) : contentItem.type === "h3" ? (
                          <h3 className="font-bold text-black text-lg pt-4 pb-2">
                            {contentItem.text}
                          </h3>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <IconFooer />
    </>
  );
}

// Sample accordion data with mixed content
const accordionData = [
  {
    title: "Definitions",
    content: [
      {
        type: "p",
        text: "1 .  Kouchinni: Kouchinni V.o.F., established in Utrecht, Chamber of Commerce no. 9022661.",
      },
      {
        type: "p",
        text: "2 .  Customer: the party which Kouchinni has entered into an agreement with.",
      },
      {
        type: "p",
        text: "3 . Parties: Kouchinni and customer together.",
      },
      {
        type: "p",
        text: "4 . Consumer: a customer who is an individual acting for private purposes.",
      },
    ],
  },

  {
    title: "Applicability",
    content: [
      {
        type: "p",
        text: "1 . These terms and conditions will apply to all quotations, offers, activities, orders, agreements and deliveries ofservices or products by or on behalf of Kouchinni.",
      },
      {
        type: "p",
        text: "2 . Parties can only deviate from these conditions if they have explicitly agreed upon in writing.",
      },
      {
        type: "p",
        text: "3 . The parties expressly exclude the applicability of supplementary and/or deviating general terms and conditions of the customer or of third parties",
      },
    ],
  },
  {
    title: "Prices",
    content: [
      {
        type: "p",
        text: "1 .  All prices used by Kouchinni are in euros, are inclusive of VAT and exclusive of any other costs such asadministration costs, levies and travel-, shipping- or transport expenses, unless expressly stated otherwise or agreed otherwise.",
      },
      {
        type: "p",
        text: "2 .IKouchinni is entitled to adjust all prices for its products or services, shown in its shop, on its website or otherwise, at any time.",
      },
      {
        type: "p",
        text: "3 . Increases in the cost prices of products or parts thereof, which Kouchinni could not foresee at the time of making an",
      },
      {
        type: "p",
        text: "4 . The consumer has the right to terminate an agreement as a result of a price increase as referred to in paragraph 3,unless the increase is the result of statutory regulation.",
      },
    ],
  },
  {
    title: "Consequences of late payment",
    content: [
      {
        type: "p",
        text: "1 .  If the customer does not pay within the agreed term, Kouchinni is entitled to charge an interest of 2% per month for non-commercial transactions from the day the customer is in default, whereby a part of a month is counted for a whole month.",
      },
      {
        type: "p",
        text: "2 .When the customer is in default, he is also due to extrajudicial collection costs and may be obliged to pay any compensation to Kouchinni.",
      },
      {
        type: "p",
        text: "3 . The collection costs are calculated on the basis of the Reimbursement for extrajudicial collection costs.",
      },
      {
        type: "p",
        text: "4 .If the customer does not pay on time, Kouchinni may suspend its obligations until the customer has met his payment obligation.",
      },
      {
        type: "p",
        text: "5 . In the event of liquidation, bankruptcy, attachment or suspension of payment on behalf of the customer, the claims of Kouchinni on the customer are immediately due and payable.",
      },
      {
        type: "p",
        text: "6 .If the customer refuses to cooperate with the performance of the agreement by Kouchinni, he is still obliged to pay the agreed price to Kouchinni.",
      },
    ],
  },
  {
    title: "Right of recovery of goods",
    content: [
      {
        type: "p",
        text: "1 .  As soon as the customer is in default, Kouchinni is entitled to invoke the right of recovery with regard to the unpaid products delivered to the customer.",
      },
      {
        type: "p",
        text: "2 .Kouchinni invokes the right of recovery by means of a written or electronic announcement.",
      },
      {
        type: "p",
        text: "3 . As soon as the customer has been informed of the claimed right of recovery, the customer must immediately return the products concerned to Kouchinni, unless the parties agree to make other arrangements about this.",
      },
      {
        type: "p",
        text: "4 . The costs for the collection or return of the products are at the expense of the customer.",
      },
    ],
  },
  {
    title: "Right of withdrawal",
    content: [
      {
        type: "p",
        text: "A consumer may cancel an online purchase during a cooling-off period of 14 days without giving any reason, provided that:",
      },
      {
        type: "ul",
        items: [
          ". the product has not been used",
          ". the product is not specially tailored for the consumer or adapted to its special needs",
          ". it is not a product that may not be returned for hygienic reasons ",
          ". the consumer has not renounced his right of withdrawal",
        ],
      },
      {
        type: "p",
        text: "The cooling-off period of 14 days as referred to in paragraph 1 commences:",
      },
      {
        type: "ul",
        items: [
          ". on the day after the consumer has received the last product or part of 1 order",
          ". as soon as the consumer has received the first the product.",
        ],
      },
      {
        type: "p",
        text: "The consumer can notify his right of withdrawal via info@kouchinni.com. The consumer is obliged to return the product to Kouchinni within 14 days after the notification of his right of withdrawal, after which period his right of withdrawal will lapse.",
      },
    ],
  },
  {
    title: "Reimbursements of delivery/ return costs",
    content: [
      {
        type: "h3",
        text: "Delivery cost reimbursement:",
      },
      {
        type: "p",
        text: "1 .If the purchase costs and any other costs (such as shipping and return costs) are eligible for reimbursement according to the law, Kouchinni will refund these costs to the consumer within 14 days of receipt of the timely appeal to the right of withdrawal, provided that the consumer has returned the product to Kouchinni in time.",
      },
      {
        type: "p",
        text: "2 . The costs for return are only reimbursed by Kouchinni if the complete order is returned.",
      },
      {
        type: "h3",
        text: "Return cost reimbursement:",
      },
      {
        type: "p",
        text: "If the consumer invokes his right of withdrawal and returns the entire order on time, the costs for returning the complete order will be borne by the consumer.",
      },
    ],
  },

  {
    title: "Right of retention",
    content: [
      {
        type: "p",
        text: "1 .  Kouchinni can appeal to his right of retention of title and in that case retain the products sold by Kouchinni to the customer until the customer has paid all outstanding invoices with regard to Kouchinni, unless the customer has provided sufficient security for these payments.",
      },
      {
        type: "p",
        text: "2 . The right of retention of title also applies on the basis of previous agreements from which the customer still owes payments to Kouchinni.",
      },
      {
        type: "p",
        text: "3 . Kouchinni is never liable for any damage that the customer may suffer as a result of using his right of retention of title.",
      },
    ],
  },
  {
    title: "Retention of title",
    content: [
      {
        type: "p",
        text: "1 .  Kouchinni remains the owner of all delivered products until the customer has fully complied with all its payment obligations with regard to Kouchinni under whatever agreement with Kouchinni including of claims regarding the shortcomings in the performance",
      },
      {
        type: "p",
        text: "2 . Until then, Kouchinni can invoke its retention of title and take back the goods.",
      },
      {
        type: "p",
        text: "3 . Before the property is transferred to the customer, the customer may not pledge, sell, dispose of or otherwise encumber the products",
      },
      {
        type: "p",
        text: "4 .If Kouchinni invokes its retention of title, the agreement will be dissolved and Kouchinni has the right to claim compensation, lost profits and interest.",
      },
    ],
  },
  {
    title: "Delivery",
    content: [
      {
        type: "p",
        text: "1 . Delivery takes place while stocks last.",
      },
      {
        type: "p",
        text: "2 . Delivery of products ordered online takes place at the address indicated by the customer.",
      },
      {
        type: "p",
        text: "3 .If the agreed price is not paid on time, Kouchinni has the right to suspend its obligations until the agreed price is fully paid.",
      },
      {
        type: "p",
        text: "4 .In the event of late payment, the customer is automatically in default, and hereby he cannot object to late delivery by Kouchinni.",
      },
    ],
  },
  {
    title: "Delivery period",
    content: [
      {
        type: "p",
        text: "1 . Any delivery period specified by Kouchinni is indicative and does not give the customer the right to dissolution or compensation if this period is not met with, unless the parties have expressly agreed otherwise in writing.",
      },
      {
        type: "p",
        text: "2 . The delivery starts once the customer has fully completed the (electronic) ordering process and received an (electronic) confirmation of his order from Kouchinni.",
      },
      {
        type: "p",
        text: "3 .Exceeding the specified delivery period does not entitle the customer to compensation or the right to terminate the contract, unless Kouchinni cannot deliver within 14 days after the customer has urged him to do so in writing or if the parties have agreed upon otherwis",
      },
    ],
  },
  {
    title: "Actual delivery",
    content: [
      {
        type: "p",
        text: "The customer must ensure that the actual delivery of the products ordered by him can take place in time.",
      },
    ],
  },
  {
    title: "Transport costs",
    content: [
      {
        type: "p",
        text: "Transport costs are paid by the customer, unless the parties have agreed upon otherwise.",
      },
    ],
  },
  {
    title: "Packaging and shipping",
    content: [
      {
        type: "p",
        text: "1 . If the package of a delivered product is opened or damaged, the customer must have a note drawn up by the forwarder or delivery person before receiving the product. In the absence of which Kouchinni may not be held liable for any damage.",
      },
      {
        type: "p",
        text: "2 . If the customer himself takes care of the transport of a product, he must report any visible damage to products or the packaging prior to the transport to Kouchinni, failing which Kouchinni cannot be held liable for any damage.",
      },
    ],
  },
  {
    title: "Guarantee",
    content: [
      {
        type: "p",
        text: "1 . The warranty relating to products only applies to defects caused by faulty manufacture, construction or material.",
      },
      {
        type: "p",
        text: "2 . The warranty does not apply in the event of normal wear and tear and damage resulting from accidents, changes made to the product, negligence or improper use by the customer, or when the cause of the defect cannot clearly be established.",
      },
      {
        type: "p",
        text: "3 .The risk of loss, damage or theft of the products that are the subject of an agreement between the parties, will pass on to the customer when these products are legally and/or factually delivered, at least are in the power of the customer or of a third party who receives the product for the benefit of the customer.",
      },
    ],
  },
  {
    title: "Indemnity",
    content: [
      {
        type: "p",
        text: "The customer indemnifies Kouchinni against all third-party claims that are related to the products and/or services supplied by Kouchinni",
      },
    ],
  },
  {
    title: "Complaints",
    content: [
      {
        type: "p",
        text: "1 . The customer must examine a product provided by Kouchinni as soon as possible for possible shortcomings.",
      },
      {
        type: "p",
        text: "2 . If a delivered product or service does not comply with what the customer could reasonably expect from the agreement, the customer must inform Kouchinni of this as soon as possible, but in any case within 1 month after the discovery of the shortcomings.",
      },
      {
        type: "p",
        text: "3 .Consumers must inform Kouchinni of this within 14 days after detection of the shortcomings.",
      },
      {
        type: "p",
        text: "4 .The customer gives a detailed description as possible of the shortcomings, so that Kouchinni is able to respond adequately.",
      },
      {
        type: "p",
        text: "5 .The customer must demonstrate that the complaint relates to an agreement between the parties.",
      },
      {
        type: "p",
        text: "6 .If a complaint relates to ongoing work, this can in any case not lead to Kouchinni being forced to perform other work than has been agreed.",
      },
    ],
  },
  {
    title: "Expiry period",
    content: [
      {
        type: "p",
        text: "Every right of the customer to compensation from Kouchinni shall, in any case, expire within 12 months after the event from which the liability arises directly or indirectly. This does not exclude the provisions in article 6:89 Dutch Civil Code.",
      },
    ],
  },
  {
    title: "Dissolution",
    content: [
      {
        type: "p",
        text: "1 . The customer has the right to dissolve the agreement if Kouchinni imputably fails in the fulfillment of his obligations, unless this shortcoming does not justify termination due to its special nature or because it is of minor significance",
      },
      {
        type: "p",
        text: "2 . If the fulfillment of the obligations by Kouchinni is not permanent or temporarily impossible, dissolution can only take place after Kouchinni is in default.",
      },
      {
        type: "p",
        text: "3 .Kouchinni has the right to dissolve the agreement with the customer, if the customer does not fully or timely fulfill his obligations under the agreement, or if circumstances give Kouchinni good grounds to fear that the customer will not be able to fulfill his obligations properly.",
      },
    ],
  },
  {
    title: "Force majeure",
    content: [
      {
        type: "p",
        text: "1 . In addition to the provisions of article 6:75 Dutch Civil Code, a shortcoming of Kouchinni in the fulfillment of any obligation to the customer cannot be attributed to Kouchinni in any situation independent of the will of Kouchinni, when the fulfillment of its obligations towards the customer is prevented in whole or in part or when the fulfillment of its obligations cannot reasonably be required from Kouchinni.",
      },
      {
        type: "p",
        text: "2 . The force majeure situation referred to in paragraph 1 is also applicable - but not limited to: state of emergency (such as civil war, insurrection, riots, natural disasters, etc.); defaults and force majeure of suppliers, deliverymen or other third parties; unexpected disturbances of power, electricity, internet, computer or telecoms; computer viruses, strikes, government measures, unforeseen transport problems, bad weather conditions and work stoppages.",
      },
      {
        type: "p",
        text: "3 .If a situation of force majeure arises as a result of which Kouchinni cannot fulfill one or more obligations towards the customer, these obligations will be suspended until Kouchinni can comply with it.",
      },
      {
        type: "p",
        text: "4 .From the moment that a force majeure situation has lasted at least 30 calendar days, both parties may dissolve the agreement in writing in whole or in part.",
      },
      {
        type: "p",
        text: "5 .Kouchinni does not owe any (damage) compensation in a situation of force majeure, even if it has obtained any advantages as a result of the force majeure situation.",
      },
    ],
  },
  {
    title: "Modification of the agreement",
    content: [
      {
        type: "p",
        text: "If, after the conclusion of the agreement and before its implementation, it appears necessary to change or supplement its contents, the parties shall timely and in mutual consultation adjust the agreement accordingly.",
      },
    ],
  },
  {
    title: "Changes in the general terms and conditions",
    content: [
      {
        type: "p",
        text: "1 .Kouchinni is entitled to amend or supplement these general terms and conditions.",
      },
      {
        type: "p",
        text: "2 . Changes of minor importance can be made at any time.",
      },
      {
        type: "p",
        text: "3 .Major changes in content will be discussed by Kouchinni with the customer in advance as much as possible.",
      },
      {
        type: "p",
        text: "4 .Consumers are entitled to cancel the agreement in the event of a substantial change to the general terms and conditions.",
      },
    ],
  },
  {
    title: "Transfer of rights",
    content: [
      {
        type: "p",
        text: "1 .The customer cannot transfer its rights deferring from an agreement with Kouchinni to third parties without the prior written consent of Kouchinni.",
      },
      {
        type: "p",
        text: "2 . This provision applies as a clause with a property law effect as referred to in Section 3:83 (2) Dutch Civil Code.",
      },
    ],
  },
  {
    title: "Consequences of nullity or annullability",
    content: [
      {
        type: "p",
        text: "1 .If one or more provisions of these general terms and conditions prove null or annullable, this will not affect the other provisions of these terms and conditions.",
      },
      {
        type: "p",
        text: "2 . A provision that is null or annullable shall, in that case, be replaced by a provision that comes closest to what Kouchinni had in mind when drafting the conditions on that issue.",
      },
    ],
  },
  {
    title: "Applicable law and competent court",
    content: [
      {
        type: "p",
        text: "1 .Dutch law is exclusively applicable to all agreements between the parties.",
      },
      {
        type: "p",
        text: "2 . The Dutch court in the district where Kouchinni is established is exclusively competent in case of any disputes between parties, unless the law prescribes otherwise.",
      },
    ],
  },

];
