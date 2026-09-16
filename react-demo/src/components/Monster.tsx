type MonsterProps = {
    name: string;
    health: number;
    damage: number;
    boss: boolean;
}



function Monster(props: MonsterProps) {
    let bossText = "";
    if (props.boss) {
        bossText = "Boss"
    }
    return (

        <div>
            <h2>{props.name}</h2>
            <h2>{bossText}</h2>
            <p>Health: {props.health}</p>
            <p>Damage: {props.damage}</p>
        </div>
    )
}


// destructuring
function Monster2({ name, health, damage, boss }: MonsterProps) {
    let bossText = "";
    if (boss) {
        bossText = "Boss"
    }
    return (

        <div>
            <h2>{name}</h2>
            {boss && <h1>BOSS</h1>}
            <p>Health: {health}</p>
            <p>Damage: {damage}</p>
        </div>
    )
}

export default Monster;
export { Monster2 };