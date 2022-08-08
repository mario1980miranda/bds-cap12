import Select from 'react-select';
import { Controller, useForm } from 'react-hook-form';
import { Store } from '../../types/Store';
import { useState } from 'react';

import './styles.css';

type StoreFilterData = {
  id: number;
  store: Store | null;
};

function SelectComponent() {
  const [selectStores, setSelectStores] = useState<Store[]>([]);
  const { register, handleSubmit, setValue, getValues, control } = useForm<StoreFilterData>();
  return (
    <div className="base-card select-component-card">
      <form className="select-component-form">
        <div className="select-component-select">
          <Controller
            name="store"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={selectStores}
                classNamePrefix="store-select-filter"
                isClearable
                placeholder="Filro de loja"
                //onChange={() => {}}
              />
            )}
          />
        </div>
      </form>
    </div>
  );
}

export default SelectComponent;
