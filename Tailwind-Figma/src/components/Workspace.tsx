import { StatsCard } from "./StatsCard";

export type StatsIcon = {
    icon: string;
    color: string;
    backgroundColor: string;
}


export function Workspace() {

    return (
        <div className="font-Inter flex min-h-screen">
            <div className="w-[250px] bg-[#17263D] min-h-screen font-Inter flex flex-col">
                <div className="text-[#FFFFFF] justify-center flex pt-[1rem] gap-[0.75rem] ">
                    <div className="bg-[#36B6A0] text-[1.5rem] rounded-[0.5rem] px-[0.5rem] font-bold">N</div>
                    <div className="font-bold text-[1.4375rem]">Northstar</div>
                </div>
                <div className="text-[#8496AD] text-[0.6875rem] font-bold text-[] mt-[2rem] ml-[1.5rem]">WORKSPACE</div>
                <div>

                    <div className="flex gap-[0.5rem] items-center mt-[1rem] mx-[0.5rem] bg-[#29435D] p-[1rem] rounded-[0.5rem] text-[#FFFFFF]">
                        <div className="bg-[#36B6A0] w-[0.9375rem] h-[0.9375rem] rounded-[0.1rem]"></div>
                        <div className="font-bold text-[0.9375rem]">Overview</div>
                    </div>
                </div>
                <div className="flex gap-[0.5rem] items-center mt-[1rem] mx-[0.5rem] p-[1rem] rounded-[0.5rem] text-[#B5C2D1]">
                    <div className="w-[0.9375rem] h-[0.9375rem] rounded-[0.1rem]"></div>
                    <div className="text-[0.9375rem]">Employees</div>
                </div>
                <div className="flex gap-[0.5rem] items-center mt-[1rem] mx-[0.5rem] p-[1rem] rounded-[0.5rem] text-[#B5C2D1]">
                    <div className="w-[0.9375rem] h-[0.9375rem] rounded-[0.1rem]"></div>
                    <div className="text-[0.9375rem]">Projects</div>
                </div>
                <div className="flex gap-[0.5rem] items-center mt-[1rem] mx-[0.5rem] p-[1rem] rounded-[0.5rem] text-[#B5C2D1]">
                    <div className="w-[0.9375rem] h-[0.9375rem] rounded-[0.1rem]"></div>
                    <div className="text-[0.9375rem]">Reports</div>
                </div>
                <div className="text-[#8496AD] text-[0.6875rem] font-bold text-[] mt-[2rem] ml-[1.5rem]">MANAGEMENT</div>
                <div className="flex gap-[0.5rem] items-center mt-[1rem] mx-[0.5rem] p-[1rem] rounded-[0.5rem] text-[#B5C2D1]">
                    <div className="w-[0.9375rem] h-[0.9375rem] rounded-[0.1rem]"></div>
                    <div className="text-[0.9375rem]">Settings</div>
                </div>
                <div className="flex gap-[0.5rem] items-center mt-[1rem] mx-[0.5rem] p-[1rem] rounded-[0.5rem] text-[#B5C2D1]">
                    <div className="w-[0.9375rem] h-[0.9375rem] rounded-[0.1rem]"></div>
                    <div className="text-[0.9375rem]">Help Center</div>
                </div>
                <div className=" flex items-end gap-[0.5rem] items-end border-t-1 border-[#405269] p-[1rem] mt-auto mb-[2rem] ml-[0.5rem]">
                    <div className="flex bg-[#E2B59B] items-center text-[#51392C] font-bold rounded-full w-[2.5rem] h-[2.5rem] justify-center">CJ</div>
                    <div>
                        <div className="text-[#FFFFFF] text-[0.875rem] font-bold">Casey Jordan</div>
                        <div className="text-[#A9BACD] text-[0.75rem]">Administrator</div>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="bg-white flex h-[5.625rem] px-[2rem] items-center justify-between">
                    <div className="text-[1.0625rem] font-bold text-[#203148]">Workspace/Overview</div>
                    <div className="flex gap-[1rem] items-center">
                        <input placeholder="Search employees..." className="bg-[#E7EBF0] w-[14rem] h-[2.625rem] pl-[0.75rem] rounded-[0.5rem] text-[0.875rem]"></input>
                        <div className="bg-[#D8F2EB] rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center text-[#197A6A] text-[0.75rem] font-bold">CJ</div>
                    </div>
                </div>
                <div className="flex justify-between items-start p-[0.5rem] gap-[2rem]">
                    <div className="flex-1 flex justify-between gap-[2rem] items-center">
                        <div className="flex flex-col gap-[0.5rem] p-[2rem]">
                            <div className="text-[#1D2C40] text-[2rem] font-bold">Team overview</div>
                            <div className="text-[#748398] text-[0.9375rem] ">Here's what's happening across your team today.</div>
                        </div>
                        <button className="bg-[#168D7D] w-[11.75rem] h-[2.875rem] flex items-center justify-center text-white font-bold text-[0.9375rem] rounded-[0.5rem]">+ Add employee</button>
                    </div>
                </div>
                <div className="flex gap-[1.5rem] p-[2rem]">
                    <StatsCard header="Total employees" value="48" trend="up" trendValue="+6" icon={{ icon: "E", color: "#168D7D", backgroundColor: "#DDF4EF" } as StatsIcon} />
                    <StatsCard header="Active projects" value="12" trend="up" trendValue="+2" icon={{ icon: "P", color: "#4778D7", backgroundColor: "#E6EEFF" } as StatsIcon} />
                    <StatsCard header="Tasks completed" value="186" trend="up" trendValue="+18%" icon={{ icon: "T", color: "#8058D4", backgroundColor: "#F0E9FF" } as StatsIcon} />
                    <StatsCard header="Pending reviews" value="7" trend="needs-attention" icon={{ icon: "R", color: "#D18C29", backgroundColor: "#FFF1DB" } as StatsIcon} />
                </div>
                <div className="flex gap-[1rem] p-[2rem]">
                    <div className="flex flex-2 p-[2rem] rounded-[0.5rem] bg-white border-1 border-[#E5EAF0]">
                        <div className="flex flex-col flex-1 gap-[1rem]">
                            <div className="flex gap-[1rem] items-center justify-between">
                                <div>
                                    <div className="text-[#1D2C40] text-[1.3125rem] font-bold">Team members</div>
                                    <div className="text-[#7B899B] text-[0.875rem]">People working across your organization</div>
                                </div>
                                <div className="text-[#42566D] text-[0.8125rem] bg-[#F6F9FB] font-bold border-1 rounded-[0.25rem] py-[0.5rem] w-[7.625rem] px-[1rem] flex justify-center items-center border-[#E5EAF0]">{`View all ->`}</div>
                            </div>
                            <div>
                                <div className="grid grid-cols-[2fr_1.5fr_1fr] items-center mt-[0.5rem] py-[0.75rem] px-[1rem] border-y border-[#E8EDF2] text-[#8A97A7] text-[0.75rem] font-bold">
                                    <div>EMPLOYEE</div>
                                    <div>ROLE</div>
                                    <div>STATUS</div>
                                </div>
                                <div className="grid grid-cols-[2fr_1.5fr_1fr] items-center py-[1rem] px-[1rem] border-b border-[#E8EDF2]">
                                    <div className="flex items-center gap-[0.75rem]">
                                        <div className="text-[#704937] bg-[#F7D9C9] rounded-full flex justify-center items-center size-[2.75rem] text-[0.8125rem] font-bold">AM</div>
                                        <div>
                                            <div className="font-bold text-[#26364B] text-[0.9375rem]">Avery Morgan</div>
                                            <div className="text-[#8A97A7] text-[0.8125rem]">avery@northstar.co</div>
                                        </div>
                                    </div>
                                    <div className="text-[#42566D] text-[0.9375rem]">UI Designer</div>
                                    <div>
                                        <span className="bg-[#DCF5EA] text-[#1E7A55] text-[0.75rem] font-bold rounded-full px-[1.25rem] py-[0.25rem]">Active</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[2fr_1.5fr_1fr] items-center py-[1rem] px-[1rem] border-b border-[#E8EDF2]">
                                    <div className="flex items-center gap-[0.75rem]">
                                        <div className="text-[#3D5B95] bg-[#D9E6FF] rounded-full flex justify-center items-center size-[2.75rem] text-[0.8125rem] font-bold">JL</div>
                                        <div>
                                            <div className="font-bold text-[#26364B] text-[0.9375rem]">Jordan Lee</div>
                                            <div className="text-[#8A97A7] text-[0.8125rem]">jordan@northstar.co</div>
                                        </div>
                                    </div>
                                    <div className="text-[#42566D] text-[0.9375rem]">Developer</div>
                                    <div>
                                        <span className="bg-[#DCF5EA] text-[#1E7A55] text-[0.75rem] font-bold rounded-full px-[1.25rem] py-[0.25rem]">Active</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[2fr_1.5fr_1fr] items-center py-[1rem] px-[1rem] border-b border-[#E8EDF2]">
                                    <div className="flex items-center gap-[0.75rem]">
                                        <div className="text-[#7657A0] bg-[#EADFFF] rounded-full flex justify-center items-center size-[2.75rem] text-[0.8125rem] font-bold">SR</div>
                                        <div>
                                            <div className="font-bold text-[#26364B] text-[0.9375rem]">Sam Rivera</div>
                                            <div className="text-[#8A97A7] text-[0.8125rem]">sam@northstar.co</div>
                                        </div>
                                    </div>
                                    <div className="text-[#42566D] text-[0.9375rem]">Product Manager</div>
                                    <div>
                                        <span className="bg-[#FFF2D9] text-[#B47B21] text-[0.75rem] font-bold rounded-full px-[1.25rem] py-[0.25rem]">On leave</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[2fr_1.5fr_1fr] items-center py-[1rem] px-[1rem]">
                                    <div className="flex items-center gap-[0.75rem]">
                                        <div className="text-[#307C6D] bg-[#CFEFE7] rounded-full flex justify-center items-center size-[2.75rem] text-[0.8125rem] font-bold">TK</div>
                                        <div>
                                            <div className="font-bold text-[#26364B] text-[0.9375rem]">Taylor Kim</div>
                                            <div className="text-[#8A97A7] text-[0.8125rem]">taylor@northstar.co</div>
                                        </div>
                                    </div>
                                    <div className="text-[#42566D] text-[0.9375rem]">Developer</div>
                                    <div>
                                        <span className="bg-[#DCF5EA] text-[#1E7A55] text-[0.75rem] font-bold rounded-full px-[1.25rem] py-[0.25rem]">Active</span>
                                    </div>
                                </div>
                                <div className="text-[#8995A5] text-[0.8125rem] mt-[3rem] px-[1rem]">Showing 4 of 48 employees</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 p-[2rem] rounded-[0.5rem] flex-col bg-white border-1 border-[#E5EAF0]">
                        <div className="flex flex-col gap-[0.5rem] border-b border-[#E8EDF2]">
                            <div className="text-[#1D2C40] text-[1.3125rem] font-bold">Recent Activity</div>
                            <div className="text-[#7B899B] text-[0.875rem] pb-[1.25rem]">Latest team updates</div>
                        </div>
                        <div className="flex gap-[1rem] mt-[1rem] font-Inter">
                            <div className="text-[#168D7D] text-[0.8125rem] bg-[#DDF4EF] rounded-full w-[1.875rem] h-[1.875rem] flex items-center justify-center">C</div>
                            <div className="flex flex-col border-b border-[#E8EDF2] pb-[1rem]">
                                <div className="font-bold text-[#26364B] text-[0.8125rem]">Project completed</div>
                                <div className="text-[#7B899B] text-[0.75rem]">Website refresh - 2h ago</div>
                            </div>
                        </div>
                        <div className="flex gap-[1rem] mt-[1rem] font-Inter">
                            <div className="text-[#4778D7] text-[0.8125rem] bg-[#E6EEFF] rounded-full w-[1.875rem] h-[1.875rem] flex items-center justify-center">+</div>
                            <div className="flex flex-col border-b border-[#E8EDF2] pb-[1rem]">
                                <div className="font-bold text-[#26364B] text-[0.8125rem]">New team member</div>
                                <div className="text-[#7B899B] text-[0.75rem]">Morgan joined - Yesterday</div>
                            </div>
                        </div>
                        <div className="flex gap-[1rem] mt-[1rem] font-Inter">
                            <div className="text-[#B47B21] text-[0.8125rem] bg-[#FFF1DB] rounded-full w-[1.875rem] h-[1.875rem] flex items-center justify-center">!</div>
                            <div className="flex flex-col border-b border-[#E8EDF2] pb-[1rem]">
                                <div className="font-bold text-[#26364B] text-[0.8125rem]">Review requested</div>
                                <div className="text-[#7B899B] text-[0.75rem]">Mobile app - Yesterday</div>
                            </div>
                        </div>

                        <div className="flex gap-[1rem] mt-auto font-Inter items-end p-[1rem] rounded-[0.5rem] bg-[#EFF8F5]">
                            <div>
                                <div className="text-[#176D60] font-bold text-[0.8125rem]">Keep the team moving</div>
                                <div className="text-[#5A7B75] text-[0.6875rem]">Check pending reviews this week.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
