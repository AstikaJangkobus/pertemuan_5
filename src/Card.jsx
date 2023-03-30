function Card() {
    return (
        <>
         <div class="flex justify-center items-center h-screen w-full bg-gradient-to-r from-blue-500 to-pink-600">
            <div class="w-1/2 bg-white bg-opacity-50 rounded-lg shadow-2xl p-8 m-4">
                <h1 class="block w-full tect-center tect-gray-800 text-2xl font-bold mb-6">
                    KTP
                </h1>
                <form action="/" method="post">
                    <div class="flex flex-col mb-4">
                        <label
                         class="mb-2 font-bold text-lg text-gray-900"
                         for="tempat_lahir"
                        >
                            
                        </label>
                        <img src="IMG_20221225_114525.jpg" class="flex flex-col mb-1 w-40 h-60" />
                    </div>

                    <div class="flex flex-col mb-4">
                        <label
                         class="mb-2 font-bold text-lg text-gray-900"
                         for="nama"
                        >
                            Nama
                        </label>
                        <input
                         class="border py-2 px-3 text-grey-800"
                         type="text"placeholder="Astika Jangkobus"
                         name="nama"
                         id="nama"
                        />
                    </div>
                    <div class="flex flex-col mb-4">
                        <label
                         class="mb-2 font-bold text-lg text-gray-900"
                         for="alamat"
                        >
                            Alamat
                        </label>
                        <input
                         class="border py-2 px-3 text-lg text-gray-900"
                         type="text"placeholder="Sawang Soataloara 2"
                         name="alamat"
                         id="alamat"
                        />
                    </div>
                    <div class="flex flex-col mb-4">
                        <label
                         class="mb-2 font-bold text-lg text-gray-900"
                         for="jenis_kelamin"
                        >
                            Jenis Kelamin
                        </label>
                        <input
                         class="border py-2 px-3 text-lg text-gray-900"
                         type="text"placeholder="Perempuan"
                         name="jenis_kelamin"
                         id="jenis_kelamin"
                        />
                    </div>
                    <div class="flex flex-col mb-4">
                        <label
                         class="mb-2 font-bold text-lg text-gray-900"
                         for="agama"
                        >
                            Agama
                        </label>
                        <input
                         class="border py-2 px-3 text-lg text-gray-900"
                         type="text"placeholder="Kristen Protestan"
                         name="agama"
                         id="agama"
                        />
                    </div>
                </form>
            </div>
         </div>
        </>
    );
}

export default Card;