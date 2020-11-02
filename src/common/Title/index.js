import React, { useRef, useEffect } from "react";
import { SectionTitle } from "./styled";

export const Title = ({ title }) => {
    const ref = useRef();

    useEffect(() => {
        if(ref.current) {
            console.log(ref.current.getBoundingClientRect())
        }
    }, [ref.current])

    return  (
        <SectionTitle
            ref={ref}
        >
            {title}
        </SectionTitle>
    )
};