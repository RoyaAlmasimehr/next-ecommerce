import Image from "next/image";


function IconFooer() {
    return (
      <div>
        <div className="bg-gray-200 justify-center py-20 flex border-b border-gray-400 items-center ">
          <div className="flex  space-x-8">
            <Image
              src="https://kouchinni.com/wp-content/uploads/2023/11/footer-icons.png"
              width={340}
              height={240}
              alt="Footer Icons"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    );
}

export default IconFooer;