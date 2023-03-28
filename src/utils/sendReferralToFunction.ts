import axios from 'axios';

type referralSubmission = {
  referralType: string;
  referralJobId?: string;
  referralFirstName: string;
  referralLastName: string;
  referralEmailAddress: string;
  referralPhoneNumber: string;
  referralUrl: string;
  referralContent: string;
  endorsementStrength: string;
};


export const sendReferralToFunction = (referral: referralSubmission) => {
  // Get curent date as YYYY-MM-DD
  const referralDate = new Date().toISOString().split('T')[0];
  const referralTitleDate = new Date().toISOString();

  const data = { ...referral};

  console.log('Posting Following Referral', data);
  return axios.get ('https://stably-humorous-horse.pgsdemo.com/serverless/createReferral', {
    params: {
      referralType: referral.referralType,
      referralJobId: referral.referralJobId,
      referralFirstName: referral.referralFirstName,
      referralLastName: referral.referralLastName,
      referralEmailAddress: referral.referralEmailAddress,
      referralPhoneNumber: referral.referralPhoneNumber,
      referralUrl: referral.referralUrl,
      referralContent: referral.referralContent,
      endorsementStrength: referral.endorsementStrength,
      date: referralDate,
      date2: referralTitleDate
    },
  });
};

export default sendReferralToFunction;
