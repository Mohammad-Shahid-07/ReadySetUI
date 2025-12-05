import { Layout } from "./layout";
import { SlantedSection } from "./slanted-section";
import { ScheduleTable } from "./schedule-table";

export default function Page() {
    return (
        <Layout>
            <div className="bg-black pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-6xl font-black text-white uppercase italic mb-6">
                        Class <span className="text-yellow-500">Schedule</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Find your time. Book your spot. Crush your workout.
                    </p>
                </div>
            </div>

            <SlantedSection angle="none" background="zinc">
                <ScheduleTable />

                <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm uppercase tracking-widest">
                        * Schedule is subject to change. Please check the app for real-time updates.
                    </p>
                </div>
            </SlantedSection>
        </Layout>
    );
}
