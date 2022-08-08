import Select from 'react-select';
import { Controller, useForm } from 'react-hook-form';
import { Store } from '../../types/Store';
import { useEffect, useState } from 'react';
import { requestBackend } from '../../util/requests';

import './styles.css';

export type StoreFilterData = {
  store: Store | null;
};

type Props = {
  onSubmitFilter: (data: StoreFilterData) => void;
};

function SelectComponent({ onSubmitFilter }: Props) {
  const [selectStores, setSelectStores] = useState<Store[]>([]);
  const { register, handleSubmit, setValue, getValues, control } = useForm<StoreFilterData>();
  const onsubmit = (formData: StoreFilterData) => {
    onSubmitFilter(formData);
  };
  const handleChangeStore = (value: Store) => {
    setValue('store', value);

    const obj: StoreFilterData = {
      store: getValues('store')
    };

    onSubmitFilter(obj);
  };
  useEffect(() => {
    requestBackend.get('/stores').then((response) => {
      setSelectStores(response.data);
    });
  }, []);
  return (
    <div className="base-card select-component-card">
      <form onSubmit={handleSubmit(onsubmit)} className="select-component-form">
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
                placeholder="Filtro de loja"
                getOptionLabel={(store: Store) => store.name}
                getOptionValue={(store: Store) => String(store.id)}
                onChange={(value) => handleChangeStore(value as Store)}
              />
            )}
          />
        </div>
      </form>
    </div>
  );
}

export default SelectComponent;
