
export default function ProfileCard() {


    return (
        // fix dropshadow
        <div className="rounded-lg bg-amber-600 profileCard drop-shadow-black">
            <div>
                <div>AJ</div>
                <div>
                    <div>Alex Johnson</div>
                    <div>Frontend Developer</div>
                </div>
            </div>
            <div>
                <div>Available</div>
            </div>
            <div>
                <div>
                    <button>View Profile</button>
                    <button>Message</button>
                </div>
            </div>
        </div>
    )
}