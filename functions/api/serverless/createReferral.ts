export async function main(argumentJson) {
   let url = argumentJson["requestUrl"];
   let questionMark = url.indexOf("?");
   url = url.substring(questionMark);
   let urlParams = new URLSearchParams(url);
   let referralType = urlParams.get("referralType");
   let referralFirstName = urlParams.get("referralFirstName");
   let referralLastName = urlParams.get("referralLastName");
   let referralEmailAddress = urlParams.get("referralEmailAddress");
   let referralPhoneNumber = urlParams.get("referralPhoneNumber");
   let referralUrl = urlParams.get("referralUrl");
   let referralContent = urlParams.get("referralContent");
   let date = urlParams.get("date");
   let date2 = urlParams.get("date2");
   let key = "66614b6b080af99262448781a0989e2c";
 
   const postUrl = 'https://api.yext.com/v2/accounts/me/entities?api_key=' + key + '&entityType=ce_referral' + '&v=20230323';
   
   const title = 'Referral for ' + referralFirstName + ' ' + referralLastName + ' on ' + date2
	
   let data = {
    "name": title,
    "c_referralName": referralFirstName + ' ' + referralLastName,
    "c_referralType": referralType,
    "c_referralEmailAddress" : referralEmailAddress,
	"c_referralPhoneNumber" : referralPhoneNumber,
	"c_referralURL" : referralUrl,
	"c_referralContent" : referralContent,
	"c_referralDate" : date
    }
   
    const response = await fetch(postUrl, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
	    'Cache-control': 'no-cache'
        },
        redirect: 'follow',
        body: JSON.stringify(data)
      });
   return {
  	"statusCode" : 200,
	"status": response.status
   }
}
