"use client";

import { useState } from "react";

const addressList = [
  "Full Name",
  "Phone Number",
  "Email Address",
  "Company",
  "Address 1",
  "Address 2",
  "Zip Code",
];

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Link } from "@/i18n/navigation";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/button";

const Details = () => {
  const [isSameAddress, setIsSameAddress] = useState(false);

  const { totalPrice } = useCartStore();

  return (
    <div className="p-2.5">
      <div className="container mx-auto flex flex-col-reverse md:flex-row md:items-start gap-4">
        <div className="flex-2 flex flex-col gap-6">
          <div className="rounded-md bg-card text-light dark:text-dark p-5 pb-6">
            <p className="font-bold">Shipping Address</p>
            <div className="inputs flex flex-wrap gap-4 mt-4 justify-between">
              {addressList.map((item) => (
                <input
                  key={item.toLowerCase().replace(" ", "-")}
                  aria-label={`Enter ${item}`}
                  placeholder={item}
                  type="text"
                  name={item.toLowerCase().replace(" ", "-")}
                  className="basis-full lg:basis-[calc((100%-16px)/2)] rounded-md s top-0 left-0 ring focus:outline-none hover:ring-2 focus:ring-2 ring-neutral-700 placeholder:text-sm text-sm p-2 placeholder:text-neutral-500"
                />
              ))}

              <Select>
                <SelectTrigger className="basis-full md:flex-1 ring-1 ring-neutral-700">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="egypt">Egypt</SelectItem>
                    <SelectItem value="saudiArabia">Saudi Arabia</SelectItem>
                    <SelectItem value="yemen">Yemen</SelectItem>
                    <SelectItem value="tunisia">Tunisia</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="rounded-md bg-card text-light dark:text-dark p-5 pb-6">
            <p className="font-bold">Billing Address</p>

            <FieldGroup className="w-56 mt-3">
              <Field orientation="horizontal">
                <Checkbox
                  id="same-as-shipping-address"
                  name="same-as-shipping-address"
                  checked={isSameAddress}
                  onCheckedChange={() => setIsSameAddress(!isSameAddress)}
                />
                <FieldLabel htmlFor="same-as-shipping-address">
                  Same As Shipping Address
                </FieldLabel>
              </Field>
            </FieldGroup>

            {!isSameAddress && (
              <div className="inputs flex flex-wrap gap-4 mt-4">
                {addressList.map((item) => (
                  <input
                    key={item.toLowerCase().replace(" ", "-")}
                    aria-label={`Enter ${item}`}
                    placeholder={item}
                    type="text"
                    name={item.toLowerCase().replace(" ", "-")}
                    className="basis-full lg:basis-[calc((100%-16px)/2)] rounded-md s top-0 left-0 ring focus:outline-none hover:ring-2 focus:ring-2 ring-neutral-700 placeholder:text-sm text-sm p-2 placeholder:text-neutral-500"
                  />
                ))}

                <Select>
                  <SelectTrigger className="basis-full md:flex-1 ring-1 ring-neutral-700">
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="egypt">Egypt</SelectItem>
                      <SelectItem value="saudiArabia">Saudi Arabia</SelectItem>
                      <SelectItem value="yemen">Yemen</SelectItem>
                      <SelectItem value="tunisia">Tunisia</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-4 text-light dark:text-dark">
            <Link
              href={"/cart"}
              className="flex-1 ring ring-main-color dark:ring-neutral-600 rounded-md py-2 px-3 text-center hover:ring-2"
            >
              Back To Cart
            </Link>
            <Link
              href={"/payment"}
              className="flex-1 ring ring-main-color dark:ring-[#253853] rounded-md py-2 px-3 text-center bg-main-color dark:bg-[#253853] text-white dark:text-dark hover:ring-2"
            >
              Proceed To Payment
            </Link>
          </div>
        </div>

        <div className="flex-1 rounded-md bg-card text-light dark:text-dark p-5 pb-6">
          <div className="flex items-center justify-between">
            <span>Subtotal:</span>
            <span>${totalPrice}</span>
          </div>

          {["Shipping", "tax", "Discount"].map((item) => (
            <div key={item} className="flex items-center justify-between mt-3">
              <span>{item}:</span>
              <span>-</span>
            </div>
          ))}

          <div className="font-bold text-2xl mt-4 pt-5 border-t">
            ${totalPrice}
          </div>

          <div className="flex items-center gap-2 mt-6">
            <input
              aria-label="Enter Voucher Code"
              placeholder="Voucher"
              type="text"
              name="voucher"
              id="voucher"
              className="flex-1 rounded-md s top-0 left-0 ring focus:outline-none hover:ring-2 focus:ring-2 ring-neutral-700 placeholder:text-sm text-sm p-2 placeholder:text-neutral-500"
            />

            <Button variant={"outline"} className="w-15">
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
