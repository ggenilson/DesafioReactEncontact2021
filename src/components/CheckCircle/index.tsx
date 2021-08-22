import { FC, useState, useEffect } from 'react';

import { MainCheckCircle } from './styles';
import { CheckCircleType } from './types';

const CheckCircle: FC<CheckCircleType> = ({
  checked,
  checkedValue = () => {},
  onClick = () => {},
}) => {
  const [check, setCheck] = useState<boolean>(false);

  const handleCheckClick = () => {
    setCheck(!check);
    onClick();
  };

  useEffect(() => {
    if (checked) {
      setCheck(checked);
    }
  }, [checked]);

  useEffect(() => {
    checkedValue(check);
  }, [check, checkedValue]);

  return (
    <MainCheckCircle onClick={handleCheckClick}>
      {check && <div />}
    </MainCheckCircle>
  );
};

export default CheckCircle;
