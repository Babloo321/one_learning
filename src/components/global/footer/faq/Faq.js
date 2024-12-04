import Common from './common/Common';
import FaqContent from './faqContent/FaqContent';
import FaqHeader from './faqHeader/FaqHeader';
import { useNavigate } from 'react-router-dom';
const FAQ = () => {
  const navigation = useNavigate();
const handleSmartClassJoin = () => {
  navigation("/joinSmartClasss");
}
  return (
    <>
    <FaqHeader />
    <FaqContent />
    <Common smartClassJoin={handleSmartClassJoin}/>
    </>
  );
};

export default FAQ;
