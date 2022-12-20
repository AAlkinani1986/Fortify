const volunteers = [
  {
    id: '1',
    firstName: 'Alya',
    lastName: 'Levine',
    skills: 'Cyber Analyst',
    address: 'melbourne, vic 3125',
    contacts: { email: 'alyalevine@gmail.com', phoneNumber: '0412402016' },
    aboutUs:
      'My name is Alya, final year in deakin university. I have working as a cyber analyst for 5 years ' +
      ' as a part time job.' +
      ' I would love to share my experience to support your organization. Please feel free to contact me for more information.' +
      ' Thanks',
    imageURL: 'Alya.jpg',
    qualification: {
      firstDegree: 'Master Of cyber security',
      secondDegree: ' Bachelor computer science',
    },
    assessmentSummary: {
      applicationControl: '2',
      pathApplications: '4',
      configureM365: '1',
      UWAHardening: '0',
      RAPrivileges: '3',
      PatchOS: '0',
      multiFactorAuth: '4',
      backups: '5',
    },
    IncidentResponse: {
      Ransomware: '3',
      WebsiteCompromised: '2',
      accountCompromised: '2',
      dataLoss: '1',
      malwareDetect: '0',
    },
  },
  {
    id: '2',
    firstName: 'Amelia',
    lastName: 'Levine',
    skills: 'DivOps',
    address: 'melbourne, vic 3125',
    contacts: { email: 'Amelialevine@gmail.com', phoneNumber: '0412666616' },
    aboutUs:
      'My name is Amelia, final year in deakin university. I have working as a cyber analyst for 5 years ' +
      ' as a part time job.' +
      ' I would love to share my experience to support your organization. Please feel free to contact me for more information.' +
      ' Thanks',
    imageURL: 'Amelia.jpg',
    qualification: {
      firstDegree: 'Master Of cyber security',
      secondDegree: ' Bachelor computer science',
    },
    assessmentSummary: {
      applicationControl: '2',
      pathApplications: '5',
      configureM365: '5',
      UWAHardening: '4',
      RAPrivileges: '1',
      PatchOS: '0',
      multiFactorAuth: '1',
      backups: '2',
    },
    IncidentResponse: {
      Ransomware: '0',
      WebsiteCompromised: '1',
      accountCompromised: '3',
      dataLoss: '3',
      malwareDetect: '0',
    },
  },
  {
    id: '3',
    firstName: 'Isabella',
    lastName: 'Levine',
    skills: 'IT coordinator',
    address: 'melbourne, vic 3125',
    contacts: { email: 'isabellalevine@gmail.com', phoneNumber: '0412403232' },
    aboutUs:
      'My name is isabella, final year in deakin university. I have working as a cyber analyst for 5 years ' +
      ' as a part time job.' +
      ' I would love to share my experience to support your organization. Please feel free to contact me for more information.' +
      ' Thanks',
    imageURL: 'Isabella.jpg',
    qualification: {
      firstDegree: 'Master Of cyber security',
      secondDegree: ' Bachelor computer science',
    },
    assessmentSummary: {
      applicationControl: '5',
      pathApplications: '4',
      configureM365: '3',
      UWAHardening: '5',
      RAPrivileges: '3',
      PatchOS: '2',
      multiFactorAuth: '4',
      backups: '1',
    },
    IncidentResponse: {
      Ransomware: '3',
      WebsiteCompromised: '1',
      accountCompromised: '2',
      dataLoss: '3',
      malwareDetect: '1',
    },
  },
  {
    id: '4',
    firstName: 'Noah',
    lastName: 'Sam',
    skills: 'system Analyst',
    address: 'melbourne, vic 3125',
    contacts: { email: 'Noha1992@gmail.com', phoneNumber: '0412402016' },
    aboutUs:
      'My name is Noah, final year in deakin university. I have working as a cyber analyst for 5 years ' +
      ' as a part time job.' +
      ' I would love to share my experience to support your organization. Please feel free to contact me for more information.' +
      ' Thanks',
    imageURL: 'Noah.jpg',
    qualification: {
      firstDegree: 'Master Of cyber security',
      secondDegree: ' Bachelor computer science',
    },
    assessmentSummary: {
      applicationControl: '5',
      pathApplications: '3',
      configureM365: '5',
      UWAHardening: '2',
      RAPrivileges: '5',
      PatchOS: '5',
      multiFactorAuth: '4',
      backups: '5',
    },
    IncidentResponse: {
      Ransomware: '3',
      WebsiteCompromised: '2',
      accountCompromised: '2',
      dataLoss: '3',
      malwareDetect: '3',
    },
  },
  {
    id: '5',
    firstName: 'Olivia',
    lastName: 'Musa',
    skills: 'Network engineer',
    address: 'melbourne, vic 3125',
    contacts: { email: 'Olivia2022@gmail.com', phoneNumber: '0412402016' },
    aboutUs:
      'My name is Alya, final year in deakin university. I have working as a cyber analyst for 5 years ' +
      ' as a part time job.' +
      ' I would love to share my experience to support your organization. Please feel free to contact me for more information.' +
      ' Thanks',
    imageURL: 'Olivia.jpg',
    qualification: {
      firstDegree: 'Master Of cyber security',
      secondDegree: ' Bachelor computer science',
    },
    assessmentSummary: {
      applicationControl: '2',
      pathApplications: '1',
      configureM365: '1',
      UWAHardening: '0',
      RAPrivileges: '3',
      PatchOS: '0',
      multiFactorAuth: '2',
      backups: '1',
    },
    IncidentResponse: {
      Ransomware: '0',
      WebsiteCompromised: '1',
      accountCompromised: '2',
      dataLoss: '1',
      malwareDetect: '0',
    },
  },
  {
    id: '6',
    firstName: 'Tom',
    lastName: 'Ali',
    skills: 'IT professional ',
    address: 'melbourne, vic 3125',
    contacts: { email: 'TomAli1222@gmail.com', phoneNumber: '0412402016' },
    aboutUs:
      'My name is Tom, final year in deakin university. I have working as a cyber analyst for 5 years ' +
      ' as a part time job.' +
      ' I would love to share my experience to support your organization. Please feel free to contact me for more information.' +
      ' Thanks',
    imageURL: 'Tom.jpg',
    qualification: {
      firstDegree: 'Master Of cyber security',
      secondDegree: ' Bachelor computer science',
    },
    assessmentSummary: {
      applicationControl: '3',
      pathApplications: '4',
      configureM365: '1',
      UWAHardening: '1',
      RAPrivileges: '3',
      PatchOS: '4',
      multiFactorAuth: '4',
      backups: '5',
    },
    IncidentResponse: {
      Ransomware: '1',
      WebsiteCompromised: '2',
      accountCompromised: '2',
      dataLoss: '1',
      malwareDetect: '3',
    },
  },
  {
    id: '7',
    firstName: 'William',
    lastName: 'David',
    skills: 'Computer system manager',
    address: 'melbourne, vic 3125',
    contacts: { email: 'WilliamD112@gmail.com', phoneNumber: '0412402016' },
    aboutUs:
      'My name is William, final year in deakin university. I have working as a cyber analyst for 5 years ' +
      ' as a part time job.' +
      ' I would love to share my experience to support your organization. Please feel free to contact me for more information.' +
      ' Thanks',
    imageURL: 'William.jpg',
    qualification: {
      firstDegree: 'Master Of cyber security',
      secondDegree: ' Bachelor computer science',
    },
    assessmentSummary: {
      applicationControl: '2',
      pathApplications: '4',
      configureM365: '1',
      UWAHardening: '5',
      RAPrivileges: '3',
      PatchOS: '5',
      multiFactorAuth: '4',
      backups: '5',
    },
    IncidentResponse: {
      Ransomware: '3',
      WebsiteCompromised: '2',
      accountCompromised: '2',
      dataLoss: '1',
      malwareDetect: '3',
    },
  },
]

export default volunteers
