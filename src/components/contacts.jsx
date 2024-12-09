import { contacts } from "../constants";

const Contacts = () => {
  return (
    <div className="w-72 bg-white dark:bg-gray-800 p-4 rounded shadow-lg">
      <h3 className="text-sm font-bold text-gray-900 dark:text-gray-200 mb-4">
        Contacts
      </h3>
      <ul>
        {contacts.map((contact) => (
          <li
            key={contact.id}
            className="flex items-center text-sm text-gray-700 dark:text-gray-300 mb-3"
          >
            {/* Icon */}
            <div className="mr-3">
              <img
                src={contact.icon} // Assuming `contact.icon` contains the path to the icon
                alt="Contact Icon"
                className="w-6 h-6 rounded-full object-cover"
              />
            </div>

            {/* Contact Name */}
            <span className="font-semibold">{contact.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
