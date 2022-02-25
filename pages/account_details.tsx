import { Layout } from "../components/Layout";
import { useGetAccountsAccountsGet } from "../api/service/accounts";
import Date from "../components/date";

const colours = {
  personal: "bg-pink-600",
  business: "bg-green-500",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AccountCardLarge = ({ mainAccount, account }) => {
  return (
    <>
      <li
        key={account.accountUid}
        className="col-span-1 flex shadow-sm rounded-md"
      >
        {/* colour chip */}
        <div
          className={classNames(
            colours[mainAccount.type_name],
            "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
          )}
        >
          {account.name.slice(0, 1)}
        </div>
        {/* body */}
        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
          <div className="flex-1 px-4 py-2 text-sm truncate">
            <a className="text-gray-900 font-medium hover:text-gray-600">
              {account.name}
            </a>
            <p className="text-gray-500">
              <Date dateString={account.createdAt} />
            </p>
          </div>
        </div>
      </li>
    </>
  );
};

export default function AccountDetails() {
  const response = useGetAccountsAccountsGet();
  const mainAccounts = response.data?.main_accounts;
  console.log(mainAccounts);
  return (
    <>
      {/* Main content title */}
      <h1 className={" text-2xl font-semibold pb-4"}>Accounts</h1>

      {/* Content */}
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
        Accounts :
      </h2>
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {mainAccounts?.map(function (mainAccount) {
          return (
            <>
              {mainAccount.accounts.map(function (account) {
                return (
                  <>
                    <AccountCardLarge
                      mainAccount={mainAccount}
                      account={account}
                    />
                  </>
                );
              })}
            </>
          );
        })}
      </ul>
    </>
  );
}

AccountDetails.Layout = Layout;
