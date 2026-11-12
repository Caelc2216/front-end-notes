import { StatsCard } from "./StatsCard"

export default function MiniDashboard() {

    return (
        <>
            <div className="txt-8 mx-[3rem]">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="font-bold font-Inter text-[2.25rem]">Dashboard</h1>
                        <p className="text-[1.0625rem] font-Inter font-[400] text-[#64748B]">Welcome back, Alex!</p>
                    </div>
                    <button className=" bg-(--company-primary) w-[12.125rem] rounded-[0.5rem] text-white p-[0.5rem]">+ New Project</button>
                </div>
                <div className="flex mt-[2rem] gap-[1.5rem]">
                    <StatsCard header="Projects" value="12" />
                    <StatsCard header="Tasks" value="48" />
                    <StatsCard header="Team Members" value="8" />
                </div>
                <div className="mt-[2rem] font-Inter bg-white rounded-[0.5rem] p-[1rem]">
                    <div className="font-bold text-[1.4375rem] font-Inter">Recent Projects</div>
                    <div className="flex justify-between mt-[1rem]">
                        <div className="text-[1.125rem] text-[#334155]">Website Redesign</div>
                        <div className="text-[#1D4ED8] text-[0.875rem] font-bold bg-[#DBEAFE] w-[9.5rem] flex items-center justify-center rounded-full">In Progress</div>
                    </div>
                    <div className="border-t-1 mt-[1rem] border-[#E2E8F0]"></div>
                    <div className="flex justify-between mt-[1rem]">
                        <div className="text-[1.125rem] text-[#334155]">Mobile Application</div>
                        <div className="text-[#475569] text-[0.875rem] font-bold bg-[#F1F5F9]  w-[9.5rem] flex items-center justify-center rounded-full">Planning</div>
                    </div>
                    <div className="border-t-1 mt-[1rem] border-[#E2E8F0]"></div>
                    <div className="flex justify-between mt-[1rem]">
                        <div className="text-[1.125rem] text-[#334155]">Customer Portal</div>
                        <div className="text-[#166534] text-[0.875rem] font-bold bg-[#DCFCE7]  w-[9.5rem] flex items-center justify-center rounded-full">Completed</div>
                    </div>
                </div>
            </div>
        </>




        // <section className="mx-auto max-w-[52rem] sm:max-w-[17rem] bg-canvas px-6 py-8 sm:px-12 sm:py-10">
        //     <header>
        //         <h1 className="text-[1.3125rem]"></h1>
        //     </header>
        // </section>
    )
}

<div className="my-class">

</div>