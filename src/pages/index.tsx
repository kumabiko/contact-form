import { useRouter } from 'next/router';
import { useForm, FormProvider } from 'react-hook-form';

import { Confirm } from '@/components/uiParts/Confirm';
import { Form } from '@/components/uiParts/Form';
import { Header } from '@/components/uiParts/Header';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  // パラメータを取得
  const router = useRouter();
  const isConfirm = router.query.confirm;

  // useFormの設定&使用したい機能を呼び出す
  const methods = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
  });

  return (
    <>
      <Header />
      <FormProvider {...methods}>
        {!isConfirm ? (
          <>
            <Form />
          </>
        ) : (
          <>
            <Confirm />
          </>
        )}
      </FormProvider>
    </>
  );
};

export default Home;
