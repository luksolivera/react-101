import { typeColors } from "../../constants/types";
import { Pokemon } from "../../interfaces/pokemon";
import style from "./style.module.css";
interface PokeCardProps {
  data: Pokemon;
}
export default function PokeCard({ data }: PokeCardProps) {
    const renderStast = () => data.stats.map((v, i) =>{
        return <PokeStats label={v.stat.name} value={v.base_stat} key={i}/>
    })
    const colorType = typeColors[data.types[0].type.name];
  return (
    <div className={style.pokecard}>
      <div className={style.pokecard_header} style={{
            backgroundImage: `linear-gradient(to bottom, ${colorType} 50%, white 50%)`
        }}>
        <div className={style.pokecard_img}>
          <img
            src={data.sprites.other.dream_world.front_default}
            alt={data.name}
            height={200}
            width={200}
          />
        </div>
      </div>
      <div className={style.pokecard_body}>
        <h3>{data.name}</h3>
        <label>{data.types[0].type.name}</label>
        <label>{data.base_experience} exp</label>
      </div>
      <hr style={{width:'100%'}}/>
      <div className={style.pokecard_footer}>
        {renderStast()}
      </div>
    </div>
  );
}


interface PokeStatsProps{
    label : string
    value : number
}
const PokeStats = (props : PokeStatsProps) =>{
    return <div className={style.pokestats}>
        <h5>{props.value}</h5>
        <p>{props.label}</p>
    </div>
}