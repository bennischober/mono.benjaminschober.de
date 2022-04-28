import { forwardRef, Ref, useEffect, useImperativeHandle, useRef, useState } from "react";
import { NumberInput } from "@mantine/core";
import { ControlledNumberInputProps } from "../../../types/interfaces";
import { ControlledNumberInputRef } from "../../../types/refs";

export const ControlledNumberInput = forwardRef((
    props: ControlledNumberInputProps,
    ref: Ref<ControlledNumberInputRef>
) => {
    useImperativeHandle(ref, () => ({ changeValue }));

    function changeValue(value: number) {
        setValue(value);
    }

    const [value, setValue] = useState(0);
    return (
        <NumberInput
            value={value}
            onChange={(val: number) => {
                setValue(val);
                props.onChange(val, props.type);
            }}
        />
    );
});


// code below works!
// https://stackoverflow.com/questions/60554808/react-useref-with-typescript-and-functional-component
// interface RefObject {
//     SayHi: (value:number) => void
//   }

// const Child = forwardRef((props: {name: string}, ref: Ref<RefObject>)=> {
//     const {name} = props;  
//     useImperativeHandle(ref, () => ({ SayHi }));
//     function SayHi(value:number) { console.log("Hello " + name + value); }
  
//     return <div>{name}</div>;
//   });

// const Parent = () => {
//     const ref = useRef<RefObject>(null);
//     const onButtonClick = () => {
//       if (ref.current) {
//         ref.current.SayHi(1);
//       }
//     };
//     return (
//       <div>
//         <Child name="Adam" ref={ref}/>
//         <button onClick={onButtonClick}>Log console</button>
//       </div>
//     );
// }