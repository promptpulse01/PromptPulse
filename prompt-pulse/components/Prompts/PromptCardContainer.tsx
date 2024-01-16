import React from 'react'
import PromptCard from './PromptCard'

type Props = {
    promptdata: any
}

const PromptCardContainer = ({ promptdata }: Props) => {
    return (
        <div className="w-full flex flex-wrap mt-5">
            {promptdata.map((item: any) => (
                <PromptCard item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default PromptCardContainer
