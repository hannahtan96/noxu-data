import { Button } from "antd";

interface ButtonsProps {
  descriptions: string[]
}

export default function Buttons({ descriptions }: ButtonsProps) {
  return <div>
    <Button.Group style={{ display: 'flex', justifyContent: 'left', gap: '12px' }}>
      {descriptions.map((description) => <Button style={{ borderRadius: '8px' }}>{description}</Button>)}
    </Button.Group>
  </div>
}