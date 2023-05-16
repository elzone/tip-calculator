import { ComponentWithLabel } from '../molecules';
import { Tips } from '../organisms';

const SelectTips = () => {
  return <div>
    <ComponentWithLabel labelClasses={'block-label'}
                        labelText={'Select Tip'}>
      <Tips />
    </ComponentWithLabel>
  </div>
}

export {SelectTips}
