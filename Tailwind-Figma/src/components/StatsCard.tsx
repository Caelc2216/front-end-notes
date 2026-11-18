import type { StatsIcon } from "./Workspace";

export function StatsCard(props: { header: string; value: string; icon?: StatsIcon; trend?: 'up' | 'down' | 'needs-attention'; trendValue?: string }) {

    return (
        <div className="bg-white flex-1 rounded-[0.5rem] p-[1rem] border-1 border-[#E5EAF0]">
            <div className="flex justify-between items-center">
                <div className="font-[400] text-[#64748B] font-Inter text-[1.0625rem]">{props.header}</div>
                {props.icon && <div className="w-[2.25rem] h-[2.25rem] text-[1.25rem] rounded-full justify-center items-center flex" style={{ backgroundColor: props.icon.backgroundColor, color: props.icon.color }}>{props.icon.icon}</div>}
            </div>
            <div className="font-bold text-[2.625rem]">{props.value}</div>
            {props.trend && <div className="flex items-center gap-[0.5rem] text-[0.8125rem]" style={{ color: props.trend === 'up' ? '#168D7D' : props.trend === 'down' ? '#E53935' : '#D18C29' }}>{props.trend !== 'needs-attention' ? `${props.trendValue} this ${props.header?.includes('Tasks') ? 'week' : 'month'}` : "Needs Attention"}</div>}
        </div>
    )
}