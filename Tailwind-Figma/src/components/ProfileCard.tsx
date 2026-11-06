


export default function ProfileCard() {


    return (
        // fix dropshadow
        <div className="rounded-lg border-1 bg-white profileCard drop-shadow-black">
            <div className="flex p-5 flex-wrap items-center justify-left gap-4">
                <div className="bg-[#DBEAFE] profileIcon flex justify-center items-center rounded-full">
                    <p>AJ</p>
                </div>
                <div className="">
                    <div className="font-bold ">Alex Johnson</div>
                    <div className="text-[#64748B]">Frontend Developer</div>
                </div>
            </div>
            <div className="px-4">
                <div className="w-[105px] px-4 py-0.5 rounded-[3rem] text-[#166534] bg-[#DCFCE7] flex justify-center">Available</div>
            </div>
            <div className="p-4 ">
                <div className="flex border-t-1 border-[#E2E8F0] justify-between pt-4 items-center flex-wrap">
                    <button className="w-[48%] bg-[#234E70] p-3 text-white rounded-[0.70rem]">View Profile</button>
                    <button className="w-[48%] border-1 border-[#CBD5E1] p-3 rounded-[0.7rem]">Message</button>
                </div>
            </div>
        </div>
    )
}