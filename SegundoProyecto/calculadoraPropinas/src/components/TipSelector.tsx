type TipSelectorProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>;
    tip: number;
    }

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

export default function TipSelector({ setTip, tip}: TipSelectorProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propinas</h3>
      <form>
        {tipOptions.map(option => (
            <div className="items-center first:mt-2" key={option.id}>
                <input 
                    type="radio" 
                    id={option.id} 
                    value={option.value} 
                    name="tip" 
                    className="m-2"
                    onChange={(e) => setTip(Number(e.target.value))}
                    checked={tip === option.value}
                />
                <label htmlFor="" >{option.label}</label>
            </div>
        ))}
      </form>
    </div>
  )
}
