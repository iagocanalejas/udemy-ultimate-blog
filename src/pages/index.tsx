import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiChevronRight } from "react-icons/hi";
import MainLayout from "~/layout/MainLayout";

const Home = () => {
  return (
    <>
      <MainLayout>
        <section className="grid grid-cols-12">
          <main className="col-span-8 h-full w-full border-r border-gray-300 px-24">
            <div className="flex flex-col space-y-4 py-10">
              <div className="flex w-full justify-between">
                <div className="flex w-full items-center space-x-4">
                  <label
                    htmlFor="search"
                    className="relative w-full rounded-lg border border-gray-800"
                  >
                    <div className="absolute left-2 flex h-full items-center">
                      <CiSearch className="absolute" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      type="text"
                      placeholder="Search..."
                      className="w-full rounded-lg px-4 py-1 ps-7 outline-none"
                    />
                  </label>
                </div>

                <div className="flex w-full items-center justify-end space-x-4">
                  <div>My topics: </div>
                  <div className="flex items-center space-x-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className="rounded-3xl bg-gray-200/50 px-4 py-3"
                      >
                        tag {i}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex w-full items-center justify-between border-b border-gray-300 pb-6">
                <div>Articles</div>
                <div>
                  <button className="flex items-center space-x-2 rounded-3xl border border-gray-800 px-5 py-2.5">
                    <div>Following</div>
                    <div>
                      <HiChevronRight className="text-xl" />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col justify-center space-y-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="group flex flex-col space-y-4 border-b border-gray-300 pb-4 last:border-none"
                >
                  <div className="flex w-full items-center space-x-2">
                    <div className="h-5 w-5 rounded-full bg-gray-400"></div>
                    <div>
                      <p className="font-semibold">
                        Mi fucking nombre | en 22 Dec 2022
                      </p>
                      <p className="text-sm">Founder, teacher shit</p>
                    </div>
                  </div>
                  <div className="grid w-full grid-cols-12 gap-4">
                    <div className="col-span-8">
                      <p className="text-2xl font-bold text-gray-800 group-hover:underline">
                        Lorem Ipsum es simplemente el texto de relleno de las
                        imprentas y archivos
                      </p>
                      <p className="break-words text-sm text-gray-500">
                        Lorem Ipsum es simplemente el texto de relleno de las
                        imprentas y archivos de texto. Lorem Ipsum ha sido el
                        texto de relleno estándar de las industrias desde el año
                        1500, cuando un impresor (N. del T. persona que se
                        dedica a la imprenta) desconocido usó una galería de
                        textos y los mezcló de tal manera que logró hacer un
                        libro de textos especimen. No sólo sobrevivió 500 años,
                        sino que tambien ingresó como texto de relleno en
                        documentos electrónicos, quedando esencialmente
                      </p>
                    </div>
                    <div className="col-span-4">
                      <div className="h-full w-full rounded-xl bg-gray-500 transition duration-300 hover:scale-105 hover:shadow-lg"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex w-full items-center justify-start space-x-4">
                      <div className="flex items-center space-x-2">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <div
                            key={i}
                            className="rounded-3xl bg-gray-200/50 px-4 py-3"
                          >
                            tag {i}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>

          <aside className="col-span-4 flex flex-col space-y-4 p-6">
            <div>
              <h3 className="my-6 text-lg font-semibold">
                People you fuck be interested
              </h3>
              <div className="flex flex-col space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex flex-row items-center space-x-5">
                    <div className="h-10 w-10 flex-none rounded-full bg-gray-400/50"></div>
                    <div>
                      <div className="font-bold text-gray-900">Lorem ipsum</div>
                      <div className="text-xs">
                        Lorem Ipsum es simplemente el texto de relleno de las
                        imprentas y archivos de texto. Lorem Ipsum ha{" "}
                      </div>
                    </div>
                    <div>
                      <button
                        className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2
                                        transition hover:border-gray-900 hover:text-gray-900"
                      >
                        Follow
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="sticky top-20">
              <h3 className="my-6 text-lg font-semibold">Your fucking list</h3>
              <div className="flex flex-col space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="group flex items-center space-x-6">
                    <div className="aspect-square h-full w-2/5 rounded-xl bg-gray-300"></div>
                    <div className="flex w-3/5 flex-col space-y-2">
                      <div className="text-lg font-semibold group-hover:underline">
                        People you fuck be interested
                      </div>
                      <div>
                        Lorem Ipsum es simplemente el texto de relleno de las
                        imprentas y archivos de texto. Lorem Ipsum ha{" "}
                      </div>
                      <div className="flex w-full items-center space-x-4">
                        <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                        <div>Mi fucking nombre</div>
                        <div>22 Jun. 2021</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </MainLayout>
    </>
  );
};

export default Home;
