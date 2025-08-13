import { createContext, useEffect, useState } from 'react';
import saveToLocalStorage from '../utils/saveToLocalStorage';
import getFromLocalStorage from '../utils/getFromLocalStorage';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';
import asiaList from '../utils/countriesList';

export const MyContext = createContext();

const locations = asiaList;

const DrawerProvider = ({ children }) => {
const [screenWidth, setScreenWidth] = useState(() => window.innerWidth);
  const storedDrawer = getFromLocalStorage('drawerOpen');
  const storedTheme = getFromLocalStorage('isDark');
  const [isDrawerOpen, setIsDrawerOpen] = useState(
    typeof storedDrawer === 'boolean' ? storedDrawer : true
  );

  const [isDark, setIsDark] = useState(
    typeof storedTheme === 'boolean' ? storedTheme : false
  );
  const [userType, setUserType] = useState('');

  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');

  const [ProfileData, setProfileData] = useState({});
  const empCollectionRef = collection(db, 'personal-Info');
  const getProfileData = async () => {
    try {
      const data = await getDocs(empCollectionRef);
      let formattedtData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      let finalData = formattedtData[0];
      let bracketIdx = finalData.contactWithCode.indexOf(')');
      setProfileData(finalData);
      setUserType(finalData.userType);
      setLocation(finalData.location);
      setEmail(finalData.email);
      setContact(finalData.contactWithCode.slice(bracketIdx + 1).trim());
    } catch (error) {
      console.log('Faled getching profile Data' + error);
    }
  };


  useEffect(() => {
    getProfileData();

    const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);
  handleResize(); // ensures it syncs immediately on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLocation = (newValue) => {
    setLocation(newValue);
  };

  const handleUserType = (newValue) => {
    setUserType(newValue);
  };
  useEffect(() => {
    saveToLocalStorage('drawerOpen', isDrawerOpen);
  }, [isDrawerOpen]);
  useEffect(() => {
    saveToLocalStorage('isDark', isDark);
  }, [isDark]);
  return (
    <MyContext.Provider
      value={{
        isDrawerOpen,
        setIsDrawerOpen,
        getProfileData,
        isDark,
        setIsDark,
        userType,
        handleUserType,
        locations,
        location,
        handleLocation,
        ProfileData,
        setProfileData,
        email,
        setEmail,
        contact,
        setContact,
        screenWidth,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default DrawerProvider;
