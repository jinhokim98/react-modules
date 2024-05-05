import useInputs from './useInputs';
import { useEffect } from 'react';

const onChange = (value: string) => {
  const isNumber = !Number.isNaN(Number(value));

  if (!isNumber) {
    return { isValid: false, errorMessage: '숫자를 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

const onBlur = (value: string) => {
  const isValidLength = value.length === 0 || value.length === 4;

  if (!isValidLength) {
    return { isValid: false, errorMessage: '카드번호는 4자리로만 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

interface CardNumbersOptions {
  isAutoFocus?: boolean;
}

const useCardNumbers = (initialValue: Record<string, string>, options?: CardNumbersOptions) => {
  const { value, setValue, handleBlur, errorInfo, setErrorInfo } = useInputs(initialValue, {
    onChange,
    onBlur,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const validationResult = onChange(event.target.value);
    setErrorInfo(prev => ({
      ...prev,
      [name]: validationResult,
    }));
    if (!validationResult.isValid) return;
    setValue(prev => ({
      ...prev,
      [name]: event.target.value,
    }));

    if (event.target.value.length === event.target.maxLength) {
      const validationResult = onBlur(event.target.value);

      setErrorInfo(prev => ({
        ...prev,
        [name]: validationResult,
      }));
      if (!validationResult.isValid) return;
      if (options?.isAutoFocus) {
        const target = event.target.nextElementSibling;
        if (target instanceof HTMLInputElement) target.focus();
      }
    }
  };

  useEffect(() => {
    const initialValues = Object.entries(initialValue);
    for (const [key, value] of initialValues) {
      if (!onChange(value).isValid || !onBlur(value).isValid) {
        console.error(
          `cardNumbers field error: ${value} 라는 올바르지 않은 값이 들어와 빈 값으로 초기화했습니다.`,
        );
        setValue(prev => ({
          ...prev,
          [key]: '',
        }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { value, handleChange, handleBlur, errorInfo };
};

export default useCardNumbers;