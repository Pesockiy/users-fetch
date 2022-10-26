import { useState } from 'react'

import useValiadtion from './useValidation'

export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setIsDirty] = useState(false)
    const [isChanged, setIsChanged] = useState(false)
    const valid = useValiadtion(value.trim(), validations)

    const onChange = (e) => {
        const val = e.target === undefined ? String(e) : e.target.value

        setValue(val)
        setIsChanged(true)
    }

    const onBlur = () => setIsDirty(true)

    const onClear = () => {
        setValue(initialValue)
        setIsDirty(false)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        isChanged,
        setValue,
        setIsDirty,
        onClear,
        ...valid
    }
}

export default useInput
