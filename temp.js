import express from 'express';
import { google } from "googleapis";
import { getGoogleOAuthURL } from './getGoogleUrl.js';


console.log(getGoogleOAuthURL());


import express from 'express';
const openai = new OpenAI({ apiKey:"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"});
const app = express();
const port = 3080;

async function callApi(){
    const response = await openai.chat.completions.create({
		messages: [{ role: "system", content: "Summarize the following text: Today’s Charitable Sector and Its Roots and Challenges How did civil society develop in the United States, and where does it stand today? To begin answering this question—and because I’m an academic focused on the charitable portion of the nonprofit sector—I believe it’s helpful to start by using available data to identify the major features of today’s 501(c)(3) charitable sector. I preface my remarks by noting that the very idea of an overarching charitable sector is relatively new. In fact, as historian Peter Dobkin Hall observed in an important essay, the notion that diverse nonprofits belong to a unitary “sector” dates only to the 1970s when, according to Hall, the idea of a coherent nonprofit sector was “invented.” Prior to that, there were large numbers of individual nonprofits, but there was a much more limited belief that they shared important attributes and were part of a single, broad sector. According to the “Internal Revenue Service Data Book,” as of 2017 there were 1.3 million 501(c)(3) charitable nonprofits operating in a wide variety of fields, including health, education, human services, the arts, international relief and development, and the environment. Depending how one measures, charities account for 5-10 percent of the nation’s economy and about 10 percent of employment. The health and education subsectors are by far the largest in dollar terms, with hospitals and other health-related nonprofits accounting for 60 percent of all charitable nonprofit expenditures, and nonprofit universities and other educational institutions making up 17 percent of spending. Nonprofits’ largest revenue source is a surprise to many. According to the National Center for Charitable Statistics (NCCS) at the Urban Institute, in 2013 48 percent of the revenue of reporting public charities came from fees for goods and services, 33 percent from government, 13 percent from philanthropy, and the remaining 6 percent from investment income and other sources. While most believe that private contributions are the largest source of charitable sector income, in fact at least in the aggregate earned revenue and government are much larger sources of charities’ revenue than philanthropy. There are similar misconceptions about the sources of philanthropy. While many would guess that corporations and foundations provide the largest amount of private donations, in fact, individual contributions are significantly larger. Giving USA reports that out of total giving of $390 billion in 2016, individuals accounted for 72 percent, foundations for 15 percent, bequests for 8 percent, and corporations for 5 percent. Importantly, about one-third of giving goes to religion. Philanthropy currently totals about 2 percent of GDP and has been holding relatively constant at about this level for several decades.The diversity and size of the US charitable sector are, in part, a legacy of the 1601 British “Statute of Charitable Uses,” which listed a broad range of charitable purposes that later shaped charitable practice in colonial America. From “the relief of aged, impotent, and poor people” to “schools of learning” to “marriages of poor maids,” British law provided the blueprint for a broadly defined charitable sector, and the US tax code reflects this heritage. To qualify for tax exemption under section 501(c)(3), organizations must pass a five-part test. The law requires that they have some organizational structure, be engaged in one of several specified “exempt” activities (such as religious, charitable, scientific, or testing for public safety), not distribute their surpluses (profits), not devote a substantial amount of their resources to lobbying, and not engage in partisan political activity. However, the broad set of activities that qualify as charitable under section 501(c)(3) offers significant latitude to US charities and helps explain the sector’s growth. Moreover, the seeming lack of IRS interest in ruling organizations unqualified for 501(c)(3) status due to ineligible activities reinforces the relatively permissive activity test. Beyond the tax code, the growth of the charitable sector has several sources, according to historian David Hammack and other experts. First, increasing affluence in the United States, especially after World War II, meant that richer Americans could afford to give more to charities. They could also afford to buy more services from nonprofit hospitals and universities. The large share of total charitable sector revenue derived from fees results in part from the dominance in the sector of nonprofit health and educational institutions that depend heavily on charging for their services. A second factor is the growth of government. In the United States, government, especially at the federal level, has grown in a distinctive way. Instead of adding large numbers of federal employees, it has contracted with non-federal “third-parties”— including state and local governments, nonprofits, and businesses—to provide federally funded goods and services. As described by political scientist Lester Salamon, in his book The Tools of Government and elsewhere, this system of third-party governance takes advantage of government’s ability to raise revenue through the tax system and the service-delivery strengths of charities (and businesses). This arrangement also accounts for the relatively high share of nonprofit income derived from government. Finally, Hammack points out that the civil rights movement and the opening up of nonprofit activity to a more-diverse range of social entrepreneurs who were sometimes previously discouraged—or even prevented—from establishing new organizations spurred the rapid growth of the charitable sector beginning in the 1960s. Current and future challenges The US charitable sector is vital and diverse, but the growth patterns described above point to several important challenges facing the sector now and into the future. First, there is the issue that many nonprofit organizations look like businesses, because a large share of their income derives from business-like fees for service. This raises the question of whether such “commercial” nonprofits that charge for their services belong in the same charitable sector as “donative” nonprofits that rely more heavily on charitable contributions, or whether there should be a dividing up of the current charitable sector. Next, there are worries about philanthropy, which has been stuck for many decades at 2 percent of GDP. While many would like giving to grow above this level, philanthropy may now actually shrink due to recent tax law changes that reduce tax incentives to give. Nonprofit leaders are already wrestling with how to restore tax incentives for philanthropy while also considering other approaches to increasing giving above previous levels. Finally, there are the twin issues of definition and identity in the charitable sector. Stakeholders need to own up to data indicating that the nonprofit sector is not all about philanthropy and voluntary action, but also government funding and earned income. The “independent” sector is also an interdependent sector that has important relationships not only with philanthropy, but with government and business as well. Within this interdependent sector, many charities owe more allegiance to their subfield (whether health care, education, or the arts) than to the charitable sector as a whole. To gain more influence in policymaking and other arenas, different types of organizations will have to come together, and make a stronger case for the charitable sector as a whole and the important role it plays in our society. What Is a Nonprofit Organization? People hear the term nonprofit organization and picture Mother Hubbard's cupboard, as in awfully bare with a zero bank balance. But in fact, some nonprofit organizations turn very tidy profits on their operations, and that's good, because cash flow keeps an enterprise humming, whether it's a for-profit business or not. For-profits vs. nonprofits The main difference between a for-profit and a nonprofit enterprise is what happens to the profit. In a for-profit company like Exxon Mobil Corporation, Microsoft, the Walt Disney Company, or your favorite fast-food chain, profits are distributed to the owners, including shareholders. But a nonprofit can't do that. Any profit remaining after the bills are paid has to be plowed back into the organization's service programs, spent to strengthen the nonprofit's infrastructure, or kept in reserve. Profit can't be distributed to individuals, such as the organization's board of directors. Do nonprofits have any shareholders to pay off? Not in terms of a monetary payoff, like a stock dividend. But in a broad, service sense, nonprofits do have \"shareholders.\" They're the people who benefit from the nonprofit's activities, like the people who tune in to public radio or enroll their children in a nonprofit preschool. These people are called stakeholders because they are committed to the success of the nonprofit. The one and only 501(c)(3) For the most part the term nonprofit organization refers to an organization that has been incorporated (or recognized in some way) under the laws of its state and that the Internal Revenue Service (IRS) has classified as a 501(c)(3) and determined to be a public charity. If the term 501(c)(3) is new to you, add it to your vocabulary with pride. Other kinds of nonprofit organizations do exist; they're formed to benefit their members, to influence legislation, or to fulfill other purposes. They receive exemption from federal income taxes and sometimes relief from property taxes at the local level. Nonprofit organizations classified as 501(c)(3) receive extra privileges under the law. They are, with minor exceptions, the only group of tax-exempt organizations that can receive contributions that are tax deductible for their donors. The IRS tax code describes the allowable purposes of 501(c)(3) nonprofit organizations to be serving religious, educational, charitable, scientific, and literary ends. Being a nonprofit organization doesn't mean that an entity is exempt from paying all taxes. Nonprofit organizations pay employment taxes just like for-profit businesses do. In some states, but not all, nonprofits are exempt from paying sales tax and property tax, so be sure that you're familiar with your local laws." }],
			model: "gpt-3.5-turbo",
		});
		console.log(response);
		console.log(response.choices[0].message)
	}

callApi();

app.post('/', async (req, res) => {
	const response = await openai.chat.completions.create({
		messages: [{"role": "system", "content": "You are a helpful assistant."},
			{"role": "user", "content": "Who won the world series in 2020?"},
			{"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
			{"role": "user", "content": "Where was it played?"}],
		model: "gpt-3.5-turbo",
		});
	console.log(response.data.choices[0].text);
	res.json({
		data: response.data
	})
});
