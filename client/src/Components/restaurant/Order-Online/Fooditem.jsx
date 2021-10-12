import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { AiOutlinePlus } from "react-icons/ai";
import { getFood } from "../../../Redux/Reducer/Food/Food.action";
import { getImage } from "../../../Redux/Reducer/Image/Image.action";