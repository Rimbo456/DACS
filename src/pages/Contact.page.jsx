import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Header></Header>
      <div className="mt-[105px] min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="w-full  bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center text-slate-600 mb-8">
            Liên hệ với chúng tôi
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Thông tin liên hệ */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Thông tin liên hệ</h2>
              <p className="text-gray-600 mb-4">
                Nếu bạn có bất kỳ câu hỏi nào, hãy liên hệ với chúng tôi qua
                thông tin dưới đây:
              </p>
              <ul className="text-gray-600">
                <li>
                  <span className="font-bold">Địa chỉ:</span> 123 Đường ABC,
                  Quận XYZ, TP. Hồ Chí Minh
                </li>
                <li>
                  <span className="font-bold">Điện thoại:</span> (028) 1234 5678
                </li>
                <li>
                  <span className="font-bold">Email:</span> admin@gmail.com
                </li>
                <li>
                  <span className="font-bold">Giờ làm việc:</span> 9:00 AM -
                  6:00 PM, Thứ 2 - Thứ 7
                </li>
              </ul>
            </div>

            {/* Form liên hệ */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Gửi tin nhắn cho chúng tôi
              </h2>
              <form action="#" method="POST">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tin nhắn
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  ></textarea>
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Gửi
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Bản đồ (placeholder) */}
          <div className="w-full h-64 bg-gray-200 rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1647.6019499794609!2d106.74705580397013!3d10.835788418404945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1726678139264!5m2!1svi!2s"
              className="w-full h-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
