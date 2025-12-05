import { Layout } from "./layout";
import { SlantedSection } from "./slanted-section";
import { PricingTable } from "./pricing-table";
import { Check } from "lucide-react";

export default function Page() {
    return (
        <Layout>
            <div className="bg-black pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-6xl font-black text-white uppercase italic mb-6">
                        Membership <span className="text-yellow-500">Plans</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Invest in yourself. Choose the plan that fits your ambition.
                    </p>
                </div>
            </div>

            <SlantedSection angle="none" background="zinc">
                <PricingTable />

                <div className="mt-20 max-w-4xl mx-auto">
                    <h3 className="text-3xl font-bold text-white uppercase italic mb-8 text-center">All Plans Include</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FeatureItem text="Access to state-of-the-art equipment" />
                        <FeatureItem text="Free filtered water stations" />
                        <FeatureItem text="Locker room access with showers" />
                        <FeatureItem text="Free parking" />
                        <FeatureItem text="Mobile app access" />
                        <FeatureItem text="Community events" />
                    </div>
                </div>
            </SlantedSection>
        </Layout>
    );
}

function FeatureItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3 p-4 bg-black border border-white/10">
            <Check className="w-5 h-5 text-yellow-500" />
            <span className="text-gray-300 font-bold uppercase tracking-wide">{text}</span>
        </div>
    )
}
