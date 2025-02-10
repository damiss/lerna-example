import React from 'react';
import { Button } from 'antd';
import type { ButtonProps } from 'antd';

interface BaseProps extends ButtonProps {
  ext: any
}

const _Button:(props: BaseProps) => JSX.Element = (props: BaseProps) => {
  return (
    <Button {...props}>{props.children}</Button>
  )
}

export default _Button;
