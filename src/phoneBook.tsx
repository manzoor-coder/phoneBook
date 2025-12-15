import React, { useEffect, useState } from "react";

type Contact = {
  name: string;
  email: string;
  phone: string;
};

const PhoneBook = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [formData, setFormData] = useState<Contact>({
    name: "",
    email: "",
    phone: "",
  });
  
  

  useEffect(() => {
    const data = localStorage.getItem("contacts");
    if (data) {
      setContacts(JSON.parse(data));
    }
    
  }, [refresh]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ id: Date.now(), name: "", email: "", phone: "" });
    setRefresh(!refresh);

    localStorage.setItem("contacts", JSON.stringify([...contacts, formData]));
  };

  return (
    <>
      <div className="min-h-screen bg-green-400 p-6">
        <div className="flex flex-col lg:flex-row justify-center gap-8">

        <div className="w-full bg-white p-6 rounded shadow">
          <h1 className="text-2xl font-bold">Phone Book</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <button
              type="submit"
              className=" bg-blue-600 text-white py-2 px-6 float-end cursor-pointer rounded hover:bg-blue-400"
            >
              Add Contact
            </button>
          </form>

        </div>

          <div className="w-full bg-white p-6 rounded">
            {contacts.length === 0 ? (
              <p className="text-center text-gray-500">No contacts added yet</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded">
                  <thead>
                    <tr>
                      <th className="border border-gray-200 p-2">Name</th>
                      <th className="border border-gray-200 p-2">Email</th>
                      <th className="border border-gray-200 p-2">Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact, index) => (
                      <tr key={index}>
                        <td className="border border-gray-200 p-2">
                          {contact.name}
                        </td>
                        <td className="border border-gray-200 p-2">
                          {contact.email}
                        </td>
                        <td className="border border-gray-200 p-2">
                          {contact.phone}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
        
      </div>
    </>
  );
};

export default PhoneBook;
