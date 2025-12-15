

const PhoneBook = () => {
  return (
    <>
      <div className="min-h-screen bg-green-400 p-6">
        <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
            <h1 className="text-2xl font-bold">Phone Book</h1>

            <form >
                <input type="text"
                name="name"
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded mb-4"

                />
                <input type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                
                />

                <input type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                
                />
                <button type="submit"
                className="w-full bg-blue-600 text-white py-2 cursor-pointer rounded hover:bg-blue-400"
                >
                    Add Contact</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default PhoneBook
